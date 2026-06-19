import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NAV = [
  { label: 'Início', target: '' },
  { label: 'Sobre', target: 'about' },
  { label: 'Produtos', target: 'products' },
  { label: 'Serviços', target: 'services' },
  { label: 'Soluções', target: 'setores' },
  { label: 'Contactos', target: 'contact' },
]

const Icons = {
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
}

const Brand = () => (
  <Link to="/" className="brand">
    <span className="brand-mark"><span /><span /><span /><span /></span>
    Turing<small>Tech</small>
  </Link>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container navbar-inner">
          <Brand />
          <ul className="nav-links">
            {NAV.map(item => (
              <li key={item.target}>
                <NavLink to={`/${item.target}`} end={item.target === ''} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link to="/login" className="btn btn-ghost btn-sm">Entrar</Link>
            <Link to="/contact?demo=1" className="btn btn-primary btn-sm">Solicitar Demonstração</Link>
            <button className="nav-toggle" id="navToggle" aria-label="Abrir menu" onClick={() => setOpen(o => !o)}>
              {open ? Icons.close : Icons.menu}
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-panel${open ? ' open' : ''}`} id="mobilePanel">
        <div className="container">
          {NAV.map(item => (
            <div key={item.target}>
              <NavLink to={`/${item.target}`} end={item.target === ''} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            </div>
          ))}
          <div className="mobile-actions">
            <Link to="/login" className="btn btn-secondary btn-block" onClick={() => setOpen(false)}>Entrar</Link>
            <Link to="/contact?demo=1" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>Solicitar Demonstração</Link>
          </div>
        </div>
      </div>
    </>
  )
}
