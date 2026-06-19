import SEO from '../../components/seo/SEO'
import { useParams } from 'react-router-dom'
import { OWN_PRODUCTS } from '../../data/produtos'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'

const iconMap = {
  visao360: <><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
  smartai: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></>,
  'turing-cloud': <><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></>,
  'turing-erp': <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
  'turing-crm': <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  'turing-hr': <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>
}

const checkIcon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', flexShrink: 0, color: 'var(--accent-2)', marginTop: '3px' }}><polyline points="20 6 9 17 4 12" /></svg>

export default function ProductDetail() {
  const { slug } = useParams()
  const product = OWN_PRODUCTS.find(p => p.slug === slug)
  if (!product) return <section className="section"><div className="container"><h2>Produto não encontrado</h2></div></section>

  return (
    <>
      <SEO title="Produto" description="Detalhes do produto Turing Tech." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Produtos', href: '/products' }, { label: product.name }]} />
            <div className="eyebrow">{product.subtitle}</div>
            <h1>{product.name}</h1>
            <p className="lead">{product.description}</p>
            <div className="hero-ctas" style={{ marginTop: '2rem' }}>
              <a href="/contact?demo=1" className="btn btn-primary btn-lg">Solicitar Demonstração</a>
              <a href="/contact" className="btn btn-secondary btn-lg">Falar Connosco</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Funcionalidades</div>
              <h2>Tudo o que precisa num só lugar</h2>
              <ul className="feature-list" style={{ gap: '1.2rem', marginTop: '1.5rem' }}>
                {product.features.map(f => <li key={f} style={{ display: 'flex', gap: '.65rem', alignItems: 'flex-start', fontSize: '.95rem', color: 'var(--text-muted)' }}>{checkIcon} {f}</li>)}
              </ul>
            </div>
            <div>
              <div className="console">
                <div className="console-bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                  <span className="console-title mono">{product.slug}.turingtech.co.ao</span>
                </div>
                <div className="console-body" style={{ padding: '2rem', textAlign: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '64px', height: '64px', color: 'var(--accent)', opacity: '.5', margin: '0 auto 1rem' }}>{iconMap[slug] || iconMap.visao360}</svg>
                  <h3 style={{ color: 'var(--text)' }}>{product.name}</h3>
                  <p style={{ fontSize: '.88rem' }}>{product.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.modules && (
        <section className="section">
          <div className="container">
            <div className="section-header center">
              <div className="eyebrow">Módulos</div>
              <h2>8 módulos integrados</h2>
              <p className="lead" style={{ margin: '0 auto' }}>Todos os módulos comunicam entre si, partilhando a mesma base de dados em tempo real.</p>
            </div>
            <div className="module-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', gap: '.8rem' }}>
              {product.modules.map(m => <div key={m} className="module-chip" style={{ padding: '1.2rem .8rem', fontSize: '.8rem' }}>{m}</div>)}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title={`Pronto para implementar o ${product.name}?`}
            description="Agende uma demonstração gratuita personalizada para a sua empresa."
            primaryHref="/contact?demo=1"
            primaryLabel="Agendar Demonstração"
            secondaryHref="/contact"
            secondaryLabel="Falar com Equipa Comercial"
          />
        </div>
      </section>
    </>
  )
}
