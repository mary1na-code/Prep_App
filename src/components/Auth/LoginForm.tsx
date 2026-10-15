import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { supabase } from '../../config/supabase'
import { clearPersistedQuizSession } from '../../context/QuizProvider'
import AuthPageShell from './AuthPageShell'

type RedirectState = { from?: { pathname?: string }; notice?: string }

function LoginForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	const redirectState = location.state as RedirectState | null

	const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setMessage('')

		if (!supabase) {
			setMessage('Sign in is unavailable because Supabase is not configured.')
			return
		}

		setIsLoading(true)
		try {
			const { error } = await supabase.auth.signInWithPassword({
				email: email.trim(),
				password,
			})

			if (error) {
				setMessage(error.message)
				return
			}

			clearPersistedQuizSession()
			navigate(redirectState?.from?.pathname ?? '/app', { replace: true })
		} catch {
			setMessage('Something went wrong. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<AuthPageShell
			title="Welcome back"
			description="Sign in to pick up your learning journey."
			footer={<>New to Prepora? <Link to="/signup">Create an account</Link></>}
		>
			<form className="auth-form" onSubmit={handleLogin}>
				<label htmlFor="login-email">Email address</label>
				<input
					id="login-email"
					name="email"
					type="email"
					autoComplete="email"
					placeholder="you@example.com"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
				/>

				<label htmlFor="login-password">Password</label>
				<input
					id="login-password"
					name="password"
					type="password"
					autoComplete="current-password"
					placeholder="Enter your password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					required
				/>

				{redirectState?.notice && (
					<p className="auth-message auth-message-success" role="status">{redirectState.notice}</p>
				)}
				{message && <p className="auth-message auth-message-error" role="alert">{message}</p>}
				<div className="auth-secondary-link">
					<Link to="/forgot-password">Forgot password?</Link>
				</div>
				<button className="button button-primary auth-submit" type="submit" disabled={isLoading}>
					{isLoading ? 'Signing in…' : 'Log in'}
				</button>
			</form>
		</AuthPageShell>
	)
}

export default LoginForm
