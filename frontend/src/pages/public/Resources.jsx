import SEO from '../../components/seo/SEO'
import { useState } from 'react'
import { RESOURCES } from '../../data/recursos'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'

const types = ['Todos', ...new Set(RESOURCES.map(r => r.type))]

export default function Resources() {
  const [filter, setFilter] = useState('Todos')
  const filtered = filter === 'Todos' ? RESOURCES : RESOURCES.filter(r => r.type === filter)

  return (
    <>
      <SEO title="Recursos" description="Materiais, guias e infográficos sobre os produtos Turing Tech." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Recursos' }]} />
            <div className="eyebrow warm">Centro de Recursos</div>
            <h1>Materiais para <span className="warm">ajudar</span> a sua decisão</h1>
            <p className="lead">Catálogos de produto, brochuras de serviços, guias práticos e casos de estudo reais — tudo num só lugar.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="filter-row">
            {types.map(t => (
              <button key={t} className={`filter-pill${filter === t ? ' active' : ''}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
          <div className="grid-3">
            {filtered.map(r => (
              <div key={r.slug} className="resource-card">
                <div className="icon-tile" style={{ marginBottom: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {r.format === 'PDF' ? <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></> : r.format === 'MP4' ? <><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></> : <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>}
                  </svg>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '.72rem', color: 'var(--accent-2)', marginBottom: '.4rem' }}>{r.type}</div>
                  <h4>{r.title}</h4>
                  <p style={{ fontSize: '.88rem' }}>{r.description}</p>
                  <div className="meta">{r.fileSize} · {r.format}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Quer falar connosco antes de decidir?"
            description="A nossa equipa está disponível para esclarecer dúvidas e apresentar as soluções certas para o seu negócio."
            primaryHref="/contact"
            primaryLabel="Falar Connosco"
          />
        </div>
      </section>
    </>
  )
}
