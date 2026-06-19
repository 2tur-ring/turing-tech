import SEO from '../../components/seo/SEO'
import { TIMELINE, VALUES_DATA } from '../../data/stats'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function About() {
  return (
    <>
      <SEO title="Sobre Nós" description="Conheça a Turing Tech — Tecnologia Inteligente. Segura. Escalável.." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Sobre Nós' }]} />
            <div className="eyebrow">Sobre a Turing Tech</div>
            <h1>Tecnologia construída <span className="grad-text">a partir do terreno.</span></h1>
            <p className="lead">Não começámos com um plano de negócios de Silicon Valley. Começámos a ver, de perto, como as empresas angolanas perdem dinheiro por falta de visibilidade — e decidimos construir a ferramenta que resolvesse isso.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader eyebrow={{ label: 'História' }} title="Como nasceu a Turing Tech" description="Da observação no terreno a uma equipa de engenharia — a nossa história em 4 anos." />
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="t-date mono">{t.year}</div>
                <div className="t-dot-col">
                  <div className="t-dot" />
                  {i < TIMELINE.length - 1 && <div className="t-line" />}
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p className="mb-0">{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container split">
          <div ref={useIntersectionObserver()}>
            <div className="eyebrow">Missão</div>
            <h2>O que nos move</h2>
            <p className="lead">Desenvolver soluções tecnológicas inovadoras para acelerar a transformação digital das empresas africanas.</p>
          </div>
          <div ref={useIntersectionObserver()}>
            <div className="eyebrow teal">Visão</div>
            <h2>Onde queremos chegar</h2>
            <p className="lead">Tornar-se uma referência em software empresarial e inteligência artificial em África até 2030.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader center eyebrow={{ label: 'Valores' }} title="Princípios que guiam cada linha de código" />
          <div className="value-grid">
            {VALUES_DATA.map(v => (
              <div key={v.id} className="value-card">
                <div className="vnum mono">{v.id}</div>
                <h4>{v.title}</h4>
                <p className="mb-0" style={{ fontSize: '.9rem' }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <CTABand
            title="Quer fazer parte da nossa história?"
            description="Estamos a crescer e procuramos talento angolano para a nossa equipa."
            primaryHref="/careers"
            primaryLabel="Ver Vagas Abertas"
            secondaryHref="/contact"
            secondaryLabel="Falar Connosco"
          />
        </div>
      </section>
    </>
  )
}
