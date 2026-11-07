import {useState } from 'react'

type User = {
  id: string
  name: string
  email: string
  role?: string
}



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="auth-page">
      <section className="auth-panel auth-intro">
        <div className="brand-mark">F</div>
        <p className="eyebrow">FocusFlow</p>
        <h1>Make space for your best work.</h1>
        <p className="intro-copy">
          Organize your priorities, keep momentum, and get more done with less
          noise.
        </p>
        <div className="intro-stat">
          <strong>86%</strong>
          <span>of focused teams finish their top priority every day.</span>
        </div>
      </section>

      <section className="auth-panel auth-form-panel">
        <div className="form-heading">
          <p className="eyebrow">Welcome back</p>
          <h2>Sign in to your account</h2>
          <p>Pick up right where you left off.</p>
        </div>

        <form className="auth-form">
          <label htmlFor="login-email">
            Email address
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          <label htmlFor="login-password">
            Password
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              minLength={6}
              required
            />
          </label>
          <button type="submit" className="primary-button" >
          </button>
        </form>

        <p className="form-footer">
          New to FocusFlow?{' '}
          <button type="button" className="text-button">
            Create an account
          </button>
        </p>
      </section>
    </main>
  )
}

export default Login