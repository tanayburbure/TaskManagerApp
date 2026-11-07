import { useState } from 'react'

type User = {
  id: string
  name: string
  email: string
  role?: string
}


function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <main className="auth-page">
      <section className="auth-panel auth-intro auth-intro-signup">
        <div className="brand-mark">F</div>
        <p className="eyebrow">FocusFlow</p>
        <h1>Your calm, clear workspace starts here.</h1>
        <p className="intro-copy">
          Build a simple habit of focused work and make progress visible every
          day.
        </p>
        <ul className="benefit-list">
          <li>Plan your day in minutes</li>
          <li>Track meaningful progress</li>
          <li>Celebrate completed work</li>
        </ul>
      </section>

      <section className="auth-panel auth-form-panel">
        <div className="form-heading">
          <p className="eyebrow">Get started</p>
          <h2>Create your account</h2>
          <p>Everything you need to make progress, in one place.</p>
        </div>

        <form className="auth-form">
          <label htmlFor="signup-name">
            Full name
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Alex Morgan"
              required
            />
          </label>
          <label htmlFor="signup-email">
            Email address
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>
          <label htmlFor="signup-password">
            Password
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 6 characters"
              minLength={6}
              required
            />
          </label>
          
          <button type="submit" className="primary-button" >
            Submit
          </button>
        </form>

        <p className="form-footer">
          Already have an account?{' '}
          <button type="button" className="text-button" >
            Sign in
          </button>
        </p>
      </section>
    </main>
  )
}

export default Signup