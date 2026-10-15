import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AuthPageShellProps = {
  title: string
  description: string
  footer: ReactNode
  children: ReactNode
}

function AuthPageShell({ title, description, footer, children }: AuthPageShellProps) {
  return (
    <main className="auth-page">
      <Link className="brand-mark auth-brand" to="/" aria-label="Prepora home">
        <span className="brand-icon" aria-hidden="true">P</span>
        <span>prepora<span className="brand-period">.</span></span>
      </Link>
      <section className="auth-card">
        <div className="auth-card-heading">
          <p className="eyebrow">YOUR STUDY SPACE</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {children}
        <div className="auth-card-footer">{footer}</div>
      </section>
      <p className="auth-back-link"><Link to="/">← Back to home</Link></p>
    </main>
  )
}

export default AuthPageShell