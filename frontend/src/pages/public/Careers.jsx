import SEO from '../../components/seo/SEO'
import { JOBS } from '../../data/vagas'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function Careers() {
  return (
    <>
      <SEO title="Carreiras" description="Trabalhe na Turing Tech — vagas em Angola e remoto." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Carreiras' }]} />
            <div className="eyebrow warm">Carreiras</div>
            <h1>Junte-se à <span className="warm">Turing Tech</span></h1>
            <p className="lead">Estamos a construir o futuro da tecnologia em Angola — e precisamos de pessoas talentosas para nos ajudar.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader eyebrow={{ label: 'Vagas abertas' }} title="Trabalhe connosco" description="Veja as posições abertas e candidate-se. Se não encontrar uma vaga adequada, envie-nos uma candidatura espontânea." />
          {JOBS.map((job, i) => (
            <div key={i} className="job-card">
              <div>
                <h4>{job.title}</h4>
                <div className="meta">
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                  <span>{job.department}</span>
                </div>
              </div>
              <a href="/contact" className="btn btn-secondary btn-sm">Candidatar-se</a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader eyebrow={{ label: 'Cultura' }} title="Como trabalhamos" description="Os valores que nos guiam e o ambiente que cultivamos." />
          <div className="grid-3">
            <div className="card">
              <div className="icon-tile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <h4>Inovação com Propósito</h4>
              <p className="mb-0">Resolvemos problemas reais do mercado angolano. Cada linha de código tem um impacto direto no negócio dos nossos clientes.</p>
            </div>
            <div className="card">
              <div className="icon-tile teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h4>Equipa Jovem e Diversa</h4>
              <p className="mb-0">Acreditamos no talento angolano. Promovemos um ambiente inclusivo onde todas as vozes são ouvidas e valorizadas.</p>
            </div>
            <div className="card">
              <div className="icon-tile warm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4>Crescimento Contínuo</h4>
              <p className="mb-0">Investimos na formação da nossa equipa. Da Academia Turing Tech a certificações externas — o crescimento é parte do nosso ADN.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Não encontrou a vaga ideal?"
            description="Envie-nos uma candidatura espontânea. Estamos sempre à procura de talento."
            primaryHref="/contact"
            primaryLabel="Candidatura Espontânea"
          />
        </div>
      </section>
    </>
  )
}
