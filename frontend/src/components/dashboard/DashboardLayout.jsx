import { NavLink, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const links = [
  { to: '/dashboard', label: 'Visão Geral', icon: 'grid', end: true },
  { to: '/dashboard/perfil', label: 'Perfil', icon: 'user' },
  { to: '/dashboard/downloads', label: 'Downloads', icon: 'download' },
  { to: '/dashboard/licencas', label: 'Licenças', icon: 'key' },
  { to: '/dashboard/tickets', label: 'Tickets', icon: 'message' },
  { to: '/dashboard/faturas', label: 'Faturas', icon: 'file' },
]

const icons = {
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  download: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
  key: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>,
  message: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  file: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
}

export default function DashboardLayout() {
  const { user, logout } = useAuth()

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 78px)', paddingTop: '78px' }}>
      <aside style={{ width: '240px', borderRight: '1px solid var(--border)', background: 'var(--bg-soft)', padding: '1.5rem 0', flexShrink: 0, position: 'fixed', top: '78px', bottom: 0, overflowY: 'auto' }}>
        <div className="container" style={{ padding: '0 1rem' }}>
          <div style={{ padding: '0 .8rem 1.2rem', borderBottom: '1px solid var(--border)', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--text-dim)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.3rem' }}>Bem-vindo</div>
            <div style={{ fontWeight: 600, fontSize: '.92rem' }}>{user?.nome}</div>
            <div style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>{user?.email}</div>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} style={{ padding: '.65rem .8rem', borderRadius: 'var(--r-sm)', fontSize: '.9rem', display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                {icons[l.icon]} {l.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <button onClick={logout} className="btn btn-ghost btn-sm btn-block" style={{ justifyContent: 'flex-start', padding: '.65rem .8rem', borderRadius: 'var(--r-sm)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
              Sair
            </button>
          </div>
        </div>
      </aside>
      <main style={{ marginLeft: '240px', flex: 1, padding: '2rem 2rem 4rem', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}
