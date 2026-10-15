import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { supabase } from '../../config/supabase'
import { clearPersistedQuizSession } from '../../context/QuizProvider'
import AuthPageShell from './AuthPageShell'

function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isConfirmation, setIsConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
    setIsConfirmation(false)

    if (!supabase) {
      setMessage('Account creation is unavailable because Supabase is not configured.')
      return
    }

    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/app`,
        },
      })

      if (error) {
        setMessage(error.message)
        return
      }

      if (data.session) {
        clearPersistedQuizSession()
        navigate('/app', { replace: true })
        return
      }

      setIsConfirmation(true)
      setMessage('Account created. Check your email to confirm your address, then log in to start a quiz.')
      setPassword('')
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthPageShell
      title="Create your account"
      description="A little practice today goes a long way."
      footer={<>Already have an account? <Link to="/login">Log in</Link></>}
    >
      <form className="auth-form" onSubmit={handleSignup}>
        <label htmlFor="signup-email">Email address</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={6}
        />

        {message && (
          <p className={`auth-message ${isConfirmation ? 'auth-message-success' : 'auth-message-error'}`} role={isConfirmation ? 'status' : 'alert'}>
            {message}
          </p>
        )}
        <button className="button button-primary auth-submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Creating account…' : 'Create account'}
        </button>
        <p className="auth-terms">By continuing, you agree to use your account responsibly.</p>
      </form>
    </AuthPageShell>
  )
}

export default SignupForm

