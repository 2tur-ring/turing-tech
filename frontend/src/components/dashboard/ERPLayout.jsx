import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/erp', label: 'Painel ERP', icon: 'grid', end: true },
  { to: '/erp/vendas', label: 'Vendas', icon: 'trending' },
  { to: '/erp/financas', label: 'Finanças', icon: 'dollar' },
  { to: '/erp/stock', label: 'Stock', icon: 'box' },
  { to: '/erp/compras', label: 'Compras', icon: 'shopping' },
  { to: '/erp/rh', label: 'Recursos Humanos', icon: 'users' },
  { to: '/erp/clientes', label: 'CRM', icon: 'heart' },
  { to: '/erp/contabilidade', label: 'Contabilidade', icon: 'file' },
  { to: '/erp/smart-ai', label: 'Genius AI', icon: 'sparkles' },
]

const icons = {
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
  trending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  dollar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  box: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
  shopping: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  file: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
  sparkles: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" /><line x1="19" y1="3" x2="19" y2="8" /><line x1="16" y1="5.5" x2="21" y2="5.5" /></svg>,
}

export default function ERPLayout() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 78px)', paddingTop: '78px' }}>
      <aside style={{ width: '240px', borderRight: '1px solid var(--border)', background: 'var(--bg-soft)', padding: '1.5rem 0', flexShrink: 0, position: 'fixed', top: '78px', bottom: 0, overflowY: 'auto' }}>
        <div className="container" style={{ padding: '0 1rem' }}>
          <div style={{ padding: '0 .8rem 1.2rem', borderBottom: '1px solid var(--border)', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.3rem' }}>VISÃO 360</div>
            <div style={{ fontWeight: 600, fontSize: '.92rem' }}>Sistema ERP</div>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} style={{ padding: '.65rem .8rem', borderRadius: 'var(--r-sm)', fontSize: '.9rem', display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                {icons[l.icon]} {l.label}
              </NavLink>
            ))}
          </nav>
          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <NavLink to="/dashboard" className="nav-link" style={{ padding: '.65rem .8rem', borderRadius: 'var(--r-sm)', fontSize: '.9rem', display: 'flex', alignItems: 'center', gap: '.7rem' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
              Área de Cliente
            </NavLink>
          </div>
        </div>
      </aside>
      <main style={{ marginLeft: '240px', flex: 1, padding: '2rem 2rem 4rem', position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}
