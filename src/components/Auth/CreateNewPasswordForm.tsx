import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from '../../config/supabase'

function CreateNewPasswordForm() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')

    if (!supabase) {
      setMessage('Password reset is unavailable because Supabase is not configured.')
      return
    }

    if (password.length < 6) {
      setMessage('Choose a password with at least 6 characters.')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    setIsLoading(true)

    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) {
        setMessage(error.message)
        return
      }

      const { error: signOutError } = await supabase.auth.signOut({ scope: 'local' })
      if (signOutError) {
        setMessage('Your password was updated, but we could not end the recovery session. Please try logging in with your new password.')
        return
      }

      navigate('/login', {
        replace: true,
        state: { notice: 'Your password has been updated. Log in with your new password.' },
      })
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label htmlFor="new-password">New password</label>
      <input
        id="new-password"
        name="newPassword"
        type="password"
        autoComplete="new-password"
        placeholder="At least 6 characters"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        minLength={6}
      />

      <label htmlFor="confirm-password">Confirm password</label>
      <input
        id="confirm-password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        required
        minLength={6}
      />

      {message && <p className="auth-message auth-message-error" role="alert">{message}</p>}

      <button className="button button-primary auth-submit" type="submit" disabled={isLoading}>
        {isLoading ? 'Updating password…' : 'Create password'}
      </button>
    </form>
  )
}

export default CreateNewPasswordForm
