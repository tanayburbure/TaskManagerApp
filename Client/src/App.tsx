import { useState } from 'react'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import './App.css'

type User = {
  id: string
  name: string
  email: string
  role?: string
}

function App() {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('focusflow_user')
    return savedUser ? (JSON.parse(savedUser) as User) : null
  })
  const [page, setPage] = useState<'login' | 'signup'>('login')

  const handleAuth = (token: string, authenticatedUser: User) => {
    localStorage.setItem('focusflow_token', token)
    localStorage.setItem('focusflow_user', JSON.stringify(authenticatedUser))
    setUser(authenticatedUser)
  }

  const handleLogout = () => {
    localStorage.removeItem('focusflow_token')
    localStorage.removeItem('focusflow_user')
    setUser(null)
    setPage('login')
  }

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />
  }

  return page === 'login' ? (
    <Login onLogin={handleAuth} onShowSignup={() => setPage('signup')} />
  ) : (
    <Signup onSignup={handleAuth} onShowLogin={() => setPage('login')} />
  )
}

export default App
