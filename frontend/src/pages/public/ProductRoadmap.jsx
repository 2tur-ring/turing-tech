import SEO from '../../components/seo/SEO'
import { ROADMAP_ITEMS } from '../../data/produtos'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'

export default function ProductRoadmap() {
  return (
    <>
      <SEO title="Roadmap" description="Roadmap de evolução dos produtos Turing Tech." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Produtos', href: '/products' }, { label: 'Roadmap' }]} />
            <div className="eyebrow warm">Roadmap</div>
            <h1>O que estamos a construir <span className="warm">a seguir</span></h1>
            <p className="lead">O plano de evolução dos produtos Turing Tech. De funcionalidades a novos produtos — tudo o que está no nosso radar.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          {ROADMAP_ITEMS.map((r, i) => (
            <div key={i} className="roadmap-row">
              <div>
                <div className="mono" style={{ color: 'var(--accent)', fontSize: '.82rem', marginBottom: '.4rem' }}>{r.phase}</div>
                <h4>{r.title}</h4>
                <ul className="feature-list" style={{ gap: '.4rem', marginTop: '.6rem' }}>
                  {r.items.map(item => <li key={item} style={{ fontSize: '.88rem' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> {item}</li>)}
                </ul>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className={`status-pill ${r.status}`}>
                  {r.status === 'building' ? 'A construir' : r.status === 'research' ? 'Em pesquisa' : 'Planeado'}
                </div>
                <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)', marginTop: '.5rem' }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Tem uma sugestão para o roadmap?"
            description="Os nossos clientes ajudam-nos a priorizar. Partilhe a sua ideia connosco."
            primaryHref="/contact"
            primaryLabel="Enviar Sugestão"
          />
        </div>
      </section>
    </>
  )
}
