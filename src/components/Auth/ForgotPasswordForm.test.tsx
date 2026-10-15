import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import type { User } from '@supabase/supabase-js'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { vi } from 'vitest'

import { supabase } from '../../config/supabase'
import ForgotPasswordForm from './ForgotPasswordForm'

vi.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      resetPasswordForEmail: vi.fn(),
      updateUser: vi.fn(),
      signOut: vi.fn(),
    },
  },
}))

  beforeEach(() => {
    window.history.replaceState({}, '', '/forgot-password')
  })

describe('ForgotPasswordForm', () => {
  it('renders the request form', () => {
    render(
      <MemoryRouter>
        <ForgotPasswordForm />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /reset your password/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument()
  })

  it('submits the email to Supabase with a redirect back to this page', async () => {
    const resetPasswordForEmail = vi.mocked(supabase!.auth.resetPasswordForEmail)
    resetPasswordForEmail.mockResolvedValue({ data: {}, error: null })

    render(
      <MemoryRouter>
        <ForgotPasswordForm />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'test@example.com' },
    })

    fireEvent.click(screen.getByRole('button', { name: /send reset link/i }))

    await waitFor(() => {
      expect(resetPasswordForEmail).toHaveBeenCalledWith('test@example.com', {
        redirectTo: `${window.location.origin}/forgot-password`,
      })
    })
  })

  it('replaces the email request form with password creation for a recovery link', () => {
    window.history.replaceState({}, '', '/forgot-password#access_token=abc&type=recovery')

    render(
      <MemoryRouter initialEntries={['/forgot-password#access_token=abc&type=recovery']}>
        <ForgotPasswordForm />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /create a new password/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/new password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /send reset link/i })).not.toBeInTheDocument()
  })

  it('updates the password, signs out, and sends the user to login', async () => {
    const updateUser = vi.mocked(supabase!.auth.updateUser)
    const signOut = vi.mocked(supabase!.auth.signOut)
    updateUser.mockResolvedValue({ data: { user: {} as User }, error: null })
    signOut.mockResolvedValue({ error: null })

    function CurrentPath() {
      const location = useLocation()
      return <span>{location.pathname}</span>
    }

    window.history.replaceState({}, '', '/forgot-password#access_token=abc&type=recovery')

    render(
      <MemoryRouter initialEntries={['/forgot-password#access_token=abc&type=recovery']}>
        <ForgotPasswordForm />
        <CurrentPath />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByLabelText(/new password/i), {
      target: { value: 'newPassword123' },
    })
    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: 'newPassword123' },
    })
    fireEvent.click(screen.getByRole('button', { name: /create password/i }))

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({ password: 'newPassword123' })
      expect(signOut).toHaveBeenCalled()
      expect(screen.getByText('/login')).toBeInTheDocument()
    })
  })
})
