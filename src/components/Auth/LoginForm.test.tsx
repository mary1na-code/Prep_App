import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import type { Session, User } from '@supabase/supabase-js'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { vi } from 'vitest'

import { supabase } from '../../config/supabase'
import LoginForm from './LoginForm'

vi.mock('../../config/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
    },
  },
}))

describe('LoginForm', () => {
  it('takes the user to the app after valid credentials are accepted', async () => {
    const signInWithPassword = vi.mocked(supabase!.auth.signInWithPassword)
    signInWithPassword.mockResolvedValue({
      data: { user: {} as User, session: {} as Session },
      error: null,
    })

    function CurrentPath() {
      const location = useLocation()
      return <span>{location.pathname}</span>
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <LoginForm />
        <CurrentPath />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByRole('textbox', { name: /email address/i }), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'newPassword123' },
    })
    fireEvent.click(screen.getByRole('button', { name: /^log in$/i }))

    await waitFor(() => {
      expect(signInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'newPassword123',
      })
      expect(screen.getByText('/app')).toBeInTheDocument()
    })
  })
})
