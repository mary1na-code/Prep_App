import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Session } from '@supabase/supabase-js'

import { supabase } from '../config/supabase'

type AuthContextValue = {
  session: Session | null
  isLoading: boolean
  isPasswordRecovery: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

function hasRecoveryHash() {
  if (typeof window === 'undefined') return false
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return false

  const params = new URLSearchParams(hash)
  return params.get('type') === 'recovery' && Boolean(params.get('access_token') || params.get('refresh_token'))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(hasRecoveryHash)

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false)
      return
    }

    let isMounted = true
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, nextSession) => {
      if (!isMounted) return

      setSession(nextSession)
      if (event === 'PASSWORD_RECOVERY') setIsPasswordRecovery(true)
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') setIsPasswordRecovery(false)
    })

    supabase.auth.getSession()
      .then(({ data }) => {
        if (isMounted) setSession(data.session)
      })
      .catch(() => {
        if (isMounted) setSession(null)
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
      subscription.unsubscribe()
    }
  }, [])

  const value = useMemo<AuthContextValue>(() => ({
    session,
    isLoading,
    isPasswordRecovery,
    signOut: async () => {
      if (!supabase) throw new Error('Supabase is not configured.')
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    },
  }), [session, isLoading, isPasswordRecovery])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider.')
  return context
}