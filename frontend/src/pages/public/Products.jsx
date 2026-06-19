import SEO from '../../components/seo/SEO'
import { OWN_PRODUCTS, ROADMAP_ITEMS } from '../../data/produtos'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import ProductCard from '../../components/ui/ProductCard'
import Breadcrumb from '../../components/ui/Breadcrumb'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function Products() {
  return (
    <>
      <SEO title="Produtos" description="VISÃO 360 ERP, Turing CRM, Turing RH e muito mais. Conheça o nosso catálogo." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Produtos' }]} />
            <div className="eyebrow">Produtos</div>
            <h1>Produtos próprios <span className="grad-text">Turing Tech</span></h1>
            <p className="lead">Do ERP completo ao assistente de IA — produtos construídos pela Turing Tech para transformar a gestão empresarial em Angola e África.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader
            eyebrow={{ label: 'Produtos em destaque' }}
            title="VISÃO 360 e Smart AI "
            description="Os dois produtos principais da Turing Tech: o ERP completo e o assistente inteligente que lê os seus dados."
          />
          <div className="grid-2">
            {OWN_PRODUCTS.slice(0, 2).map(p => {
              const iconMap = { boxes: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>, cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></> }
              return (
                <ProductCard
                  key={p.slug}
                  featured={p.slug === 'visao360'}
                  tag={p.tag}
                  tagVariant={p.tagVariant}
                  icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconMap[p.icon]}</svg>}
                  title={p.name}
                  description={p.description}
                  modules={p.modules}
                  features={p.features}
                  href={`/products/${p.slug}`}
                  hrefLabel="Explorar"
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader
            eyebrow={{ label: 'Ecossistema' }}
            title="Mais produtos do ecossistema Turing Tech"
            description="Soluções especializadas para diferentes setores e necessidades empresariais."
          />
          <div className="grid-3">
            {OWN_PRODUCTS.slice(2).map(p => {
              const iconMap = { cloud: <><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></>, settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>, users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>, briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></> }
              return (
                <ProductCard
                  key={p.slug}
                  tag={p.tag}
                  tagVariant={p.tagVariant}
                  icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{iconMap[p.icon]}</svg>}
                  title={p.name}
                  subtitle={p.subtitle}
                  description={p.description}
                  features={p.features}
                  href={`/products/${p.slug}`}
                  hrefLabel="Detalhes"
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader eyebrow={{ label: 'Roadmap' }} title="O que estamos a construir a seguir" description="Conheça o plano de evolução dos produtos Turing Tech." center />
          {ROADMAP_ITEMS.map((r, i) => (
            <div key={i} className="roadmap-row">
              <div>
                <h4>{r.title}</h4>
                <ul className="feature-list" style={{ gap: '.4rem', marginTop: '.6rem' }}>{r.items.map(item => <li key={item} style={{ fontSize: '.85rem' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> {item}</li>)}</ul>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className={`status-pill ${r.status}`}>{r.status === 'building' ? 'A construir' : r.status === 'research' ? 'Em pesquisa' : 'Planeado'}</div>
                <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)', marginTop: '.5rem' }}>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Quer experimentar o VISÃO 360?"
            description="Solicite uma demonstração gratuita e veja como o ERP Turing Tech pode transformar a sua gestão."
            primaryHref="/contact?demo=1"
            primaryLabel="Solicitar Demonstração"
            secondaryHref="/contact"
            secondaryLabel="Falar Connosco"
          />
        </div>
      </section>
    </>
  )
}
