import SEO from '../../components/seo/SEO'
import { useState } from 'react'
import { SERVICE_GROUPS } from '../../data/servicos'
import { TabBar, TabPanel } from '../../components/ui/TabBar'
import Card from '../../components/ui/Card'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'

const Icons = {
  software: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  'ia-cloud': <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></>,
  dados: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
  governo: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>,
  financas: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  capacitacao: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>
}

const totalServices = SERVICE_GROUPS.reduce((acc, g) => acc + g.categories.reduce((sum, c) => sum + c.items.length, 0), 0)

export default function Services() {
  const [activeGroup, setActiveGroup] = useState(SERVICE_GROUPS[0].key)

  return (
    <>
      <SEO title="Serviços — Portfólio Completo Turing Tech" description="Transformando África através da Tecnologia, Inovação e Inteligência Artificial. Mais de 21 categorias de serviços tecnológicos." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Serviços' }]} />
            <div className="eyebrow">Portfólio Oficial de Serviços</div>
            <p className="lead" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>Transformando África através da Tecnologia, Inovação e Inteligência Artificial.</p>
            <h1>Mais de <span className="grad-text">21 categorias</span> de serviços tecnológicos</h1>
            <p className="lead">Do desenvolvimento de software à inteligência artificial, passando por cloud, cibersegurança, transformação digital e muito mais — tudo o que a sua empresa, organização ou governo precisa num só parceiro africano.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><div className="num">{SERVICE_GROUPS.length}</div><div className="lbl">Categorias Principais</div></div>
            <div className="stat"><div className="num">{SERVICE_GROUPS.reduce((a, g) => a + g.categories.length, 0)}+</div><div className="lbl">Áreas de Atuação</div></div>
            <div className="stat"><div className="num">{totalServices}+</div><div className="lbl">Serviços Especializados</div></div>
            <div className="stat"><div className="num">100%</div><div className="lbl">Adaptado a África</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <TabBar tabs={SERVICE_GROUPS.map(g => ({ key: g.key, label: g.label }))} activeTab={activeGroup} onChange={setActiveGroup} />
          {SERVICE_GROUPS.map(group => (
            <TabPanel key={group.key} tabKey={group.key} activeTab={activeGroup}>
              <div className="grid-3">
                {group.categories.map(cat => (
                  <Card key={cat.id}>
                    <div className="icon-tile">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{Icons[group.key]}</svg>
                    </div>
                    <h3>{cat.name}</h3>
                    <p>{cat.description}</p>
                    <ul className="feature-list">
                      {cat.items.map(item => <li key={item}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> {item}</li>)}
                    </ul>
                  </Card>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'stretch' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <div className="icon-tile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <h3>Missão</h3>
              <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>Acelerar a transformação digital de África através de soluções tecnológicas inovadoras, acessíveis e escaláveis.</p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--teal, #14b8a6)' }}>
              <div className="icon-tile teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3>Visão</h3>
              <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>Tornar-se a empresa tecnológica africana mais influente e completa, servindo governos, organizações, empresas e cidadãos em todo o continente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Não encontrou o que precisa?"
            description="Fale connosco. Se o seu problema não está na lista, nós construímos a solução."
            primaryHref="/contact"
            primaryLabel="Solicitar Orçamento"
          />
        </div>
      </section>
    </>
  )
}
