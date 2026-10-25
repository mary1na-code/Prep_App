import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import OnboardingPage from './pages/OnboardingPage'

import { supabase } from './config/supabase'

import ForgotPasswordForm from './components/Auth/ForgotPasswordForm'
import LoginForm from './components/Auth/LoginForm'
import SignupForm from './components/Auth/SignupForm'
import Main from './components/Main'
import LandingPage from './components/LandingPage'
import ToggleTheme from './components/ui/ToggleTheme'
import { AuthProvider, useAuth } from './context/AuthProvider'
import QuizProvider from './context/QuizProvider'

function AuthenticatedQuiz() {
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    window.localStorage.removeItem('prepora_quiz_session')
    await signOut()
  }

  return (
    <QuizProvider>
      <div className="app-account-bar">
        <span>Ready for a quick study session?</span>
        <button type="button" onClick={handleSignOut} className="app-signout-button">
          Sign out
        </button>
      </div>
      <Main />
    </QuizProvider>
  )
}


function AuthenticatedRoute() {
  const { isLoading, session } = useAuth()
  const location = useLocation()
  const [profileLoading, setProfileLoading] = useState(true)
  const [profileError, setProfileError] = useState('')
  const [onboardingCompleted, setOnboardingCompleted] = useState(false)

  useEffect(() => {
    let active = true

    async function checkProfile() {
      if (!session?.user.id) {
        setProfileLoading(false)
        return
      }

      if (!supabase) {
        setProfileError('Supabase is not configured.')
        setProfileLoading(false)
        return
      }

      setProfileLoading(true)
      setProfileError('')

      const { data, error } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', session.user.id)
        .maybeSingle()

      if (!active) return

      if (error) {
        setProfileError('Could not load your academic profile.')
      } else {
        setOnboardingCompleted(data?.onboarding_completed === true)
      }

      setProfileLoading(false)
    }

    void checkProfile()

    return () => {
      active = false
    }
  }, [session?.user.id])

  if (isLoading || (session && profileLoading)) {
    return (
      <div className="route-loading" role="status">
        Loading your Prepora profile…
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (profileError) {
    return (
      <div className="route-loading" role="alert">
        <p>{profileError}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </div>
    )
  }

  if (!onboardingCompleted) {
    return <Navigate to="/onboarding" replace />
  }

  return <AuthenticatedQuiz />
}


function PublicOnly({ children, allowPasswordRecovery = false }: { children: ReactNode; allowPasswordRecovery?: boolean }) {
  const { isLoading, session, isPasswordRecovery } = useAuth()

  if (isLoading) return <div className="route-loading" role="status">Restoring your session…</div>

  if (session && !(allowPasswordRecovery && isPasswordRecovery)) {
    return <Navigate to="/app" replace />
  }

  return children
}

function LegacyResetPasswordRoute() {
  const location = useLocation()

  return (
    <Navigate
      to={{ pathname: '/forgot-password', search: location.search, hash: location.hash }}
      replace
    />
  )
}

function AppRoutes() {
  const { isLoading, session, isPasswordRecovery } = useAuth()
  const location = useLocation()
  const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') ?? 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const toggleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.checked ? 'dark' : 'light'
    setCurrentTheme(theme)
    localStorage.setItem('theme', theme)
  }

  if (isLoading) return <div className="route-loading" role="status">Restoring your session…</div>

  if (isPasswordRecovery && location.pathname !== '/forgot-password') {
    return <Navigate to="/forgot-password" replace />
  }

  return (
    <>
      <ToggleTheme
        onChange={toggleTheme}
        currentTheme={currentTheme}
        checked={currentTheme === 'dark'}
        id="toggleTheme"
        value="theme"
      />
      <Routes>
        <Route path="/" element={session ? <Navigate to="/app" replace /> : <LandingPage />} />
        <Route path="/signup" element={<PublicOnly><SignupForm /></PublicOnly>} />
        <Route path="/login" element={<PublicOnly><LoginForm /></PublicOnly>} />
        <Route
          path="/forgot-password"
          element={(
            <PublicOnly allowPasswordRecovery>
              <ForgotPasswordForm isPasswordRecovery={isPasswordRecovery} />
            </PublicOnly>
          )}
        />
        <Route path="/reset-password" element={<LegacyResetPasswordRoute />} />
        <Route path="/app" element={<AuthenticatedRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route
          path="/onboarding"
          element={
            session
            ? <OnboardingPage />
            : <Navigate to="/login"   replace />
          }
        />
        <Route path="/app" element={<AuthenticatedRoute />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
