import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { supabase } from '../../config/supabase'
import AuthPageShell from './AuthPageShell'
import CreateNewPasswordForm from './CreateNewPasswordForm'

type ForgotPasswordFormProps = {
  isPasswordRecovery?: boolean
}

function hasRecoveryHash() {
  if (typeof window === 'undefined') return false
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return false

  const params = new URLSearchParams(hash)
  return params.get('type') === 'recovery' && Boolean(params.get('access_token') || params.get('refresh_token'))
}

function ForgotPasswordForm({ isPasswordRecovery = false }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isCreatingPassword, setIsCreatingPassword] = useState(
    () => isPasswordRecovery || hasRecoveryHash()
  )

  useEffect(() => {
    if (isPasswordRecovery || hasRecoveryHash()) setIsCreatingPassword(true)
  }, [isPasswordRecovery])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
    setIsSuccess(false)

    if (!supabase) {
      setMessage('Password reset is unavailable because Supabase is not configured.')
      return
    }

    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/forgot-password`,
      })

      if (error) {
        setMessage(error.message)
        return
      }

      setEmail('')
      setIsSuccess(true)
      setMessage('If that email is registered, we sent a reset link. Check your inbox and follow the instructions.')
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthPageShell
      title={isCreatingPassword ? 'Create a new password' : 'Reset your password'}
      description={isCreatingPassword
        ? 'Choose and confirm a new password for your account.'
        : 'We’ll send a secure link to help you choose a new password.'}
      footer={isCreatingPassword
        ? <>Back to <Link to="/login">log in</Link></>
        : <>Remembered it? <Link to="/login">Log in</Link></>}
    >
      {isCreatingPassword ? <CreateNewPasswordForm /> : <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="forgot-email">Email address</label>
        <input
          id="forgot-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        {message && (
          <p className={`auth-message ${isSuccess ? 'auth-message-success' : 'auth-message-error'}`} role={isSuccess ? 'status' : 'alert'}>
            {message}
          </p>
        )}

        <button className="button button-primary auth-submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Sending reset link…' : 'Send reset link'}
        </button>
      </form>}
    </AuthPageShell>
  )
}

export default ForgotPasswordForm
