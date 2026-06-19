import { Link } from 'react-router-dom'

const Brand = () => (
  <Link to="/" className="brand">
    <span className="brand-mark"><span /><span /><span /><span /></span>
    Turing<small>Tech</small>
  </Link>
)

const socialLinks = [
  { label: 'LinkedIn', href: '#', viewBox: '0 0 24 24', path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.1H5.67v8.24h2.67zM7 9.04c.93 0 1.5-.61 1.5-1.38-.02-.78-.57-1.38-1.48-1.38-.91 0-1.5.6-1.5 1.38 0 .77.57 1.38 1.46 1.38H7zm11.34 9.3v-4.7c0-2.52-1.35-3.7-3.15-3.7-1.45 0-2.1.8-2.46 1.36V10.1H10.1s.04.95 0 8.24h2.67v-4.6c0-.25.02-.5.1-.68.21-.5.68-1.03 1.47-1.03 1.04 0 1.46.79 1.46 1.94v4.37h2.54z', fill: true },
  { label: 'Facebook', href: '#', viewBox: '0 0 24 24', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z', fill: true },
  { label: 'Instagram', href: '#', viewBox: '0 0 24 24', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', fill: true },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand />
            <p>Tecnologia que transforma empresas africanas através de soluções inovadoras de software e inteligência artificial.</p>
            <div className="footer-social">
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <svg viewBox={s.viewBox} fill={s.fill ? 'currentColor' : 'none'} stroke={s.fill ? 'none' : 'currentColor'} strokeWidth="0">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Produtos</h4>
            <ul>
              <li><Link to="/products/visao360">VISÃO 360</Link></li>
              <li><Link to="/products/smartai">VISÃO Genius AI</Link></li>
              <li><Link to="/products/roadmap">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/about">Sobre Nós</Link></li>
              <li><Link to="/careers">Carreiras</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contactos</Link></li>
            </ul>
          </div>
          <div>
            <h4>Suporte</h4>
            <ul>
              <li><Link to="/support">Central de Ajuda</Link></li>
              <li><Link to="/support">FAQ</Link></li>
              <li><Link to="/support">Abrir Ticket</Link></li>
              <li><Link to="/support">Base de Conhecimento</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul className="contact-list">
              <li><a href="mailto:Turingbigtech@gmail.com">Turingbigtech@gmail.com</a></li>
              <li><a href="tel:+244949935230">+244 949 935 230</a></li>
              <li><a href="https://wa.me/244949935230" target="_blank" rel="noopener">WhatsApp Business</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Turing Tech. Todos os direitos reservados.</span>
          <div className="legal-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Utilização</a>
            <Link to="/support">Suporte</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
