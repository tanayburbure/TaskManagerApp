type User = {
  id: string
  name: string
  email: string
  role?: string
}

type DashboardProps = {
  user: User
  onLogout: () => void
}

const focusItems = [
  { title: 'Review weekly priorities', detail: 'Planning', completed: true },
  { title: 'Finish product wireframes', detail: 'Design', completed: false },
  { title: 'Share progress with the team', detail: 'Communication', completed: false },
]

function Dashboard({ user, onLogout }: DashboardProps) {
  const firstName = user.name.split(' ')[0]

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <div className="brand-mark">F</div>
          <span>FocusFlow</span>
        </div>
        <div className="dashboard-account">
          <div className="avatar" aria-hidden="true">{firstName.charAt(0).toUpperCase()}</div>
          <div className="account-copy">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </div>
          <button type="button" className="secondary-button" onClick={onLogout}>
            Log out
          </button>
        </div>
      </header>

      <section className="dashboard-content">
        <div className="dashboard-welcome">
          <div>
            <p className="eyebrow">Saturday, November 7</p>
            <h1>Good morning, {firstName}.</h1>
            <p>One focused step at a time. Here is your day at a glance.</p>
          </div>
          <div className="streak-card">
            <span className="streak-icon">✦</span>
            <div><strong>7 day streak</strong><span>Keep it going!</span></div>
          </div>
        </div>

        <div className="dashboard-grid">
          <section className="dashboard-card priority-card">
            <div className="card-heading">
              <div><p className="eyebrow">Today</p><h2>Your priorities</h2></div>
              <span className="progress-label">1 of 3 complete</span>
            </div>
            <div className="progress-track"><span /></div>
            <ul className="priority-list">
              {focusItems.map((item) => (
                <li key={item.title} className={item.completed ? 'completed' : ''}>
                  <span className="check-mark">{item.completed ? '✓' : ''}</span>
                  <div><strong>{item.title}</strong><span>{item.detail}</span></div>
                </li>
              ))}
            </ul>
            <button type="button" className="add-task-button">+ Add a priority</button>
          </section>

          <aside className="dashboard-card insight-card">
            <span className="insight-icon">◒</span>
            <p className="eyebrow">A little insight</p>
            <h2>Small progress is still progress.</h2>
            <p>Protect your focus today. The consistency you build now makes the big goals easier later.</p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Dashboard