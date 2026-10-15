import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import { supabase } from '../../config/supabase'
import SignupForm from './SignupForm'

vi.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
    },
  },
}))

describe('SignupForm', () => {
  const renderSignupForm = () => render(
    <MemoryRouter>
      <SignupForm />
    </MemoryRouter>
  )

  it('renders the Sign up form fields', () => {
    renderSignupForm()

    expect(
      screen.getByRole('heading', { name: /create your account/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /create account/i })
    ).toBeInTheDocument()
  })

  it('submits the email and password to Supabase', async () => {
    const signUp = vi.mocked(supabase!.auth.signUp)
    signUp.mockResolvedValue({ data: { user: null, session: null }, error: null })

    renderSignupForm()

    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    })

    fireEvent.click(screen.getByRole('button', { name: /create account/i }))

    await waitFor(() => {
      expect(signUp).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        options: {
          emailRedirectTo: `${window.location.origin}/app`,
        },
      })
    })
  })
})
