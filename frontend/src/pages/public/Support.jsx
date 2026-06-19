import SEO from '../../components/seo/SEO'
import { FAQ_ITEMS } from '../../data/faq'
import Accordion from '../../components/ui/Accordion'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function Support() {
  return (
    <>
      <SEO title="Suporte" description="Suporte técnico Turing Tech — FAQ, tickets, canais de ajuda." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Suporte' }]} />
            <div className="eyebrow">Suporte</div>
            <h1>Como podemos <span className="grad-text">ajudar</span>?</h1>
            <p className="lead">FAQ, canais de contacto e suporte técnico 24/7 para clientes VISÃO 360.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.6rem', marginBottom: '3rem' }}>
            <div className="card">
              <div className="icon-tile" style={{ marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <h4>Telefone / WhatsApp</h4>
              <p className="mb-0"><a href="tel:+244949935230" style={{ color: 'var(--accent)' }}>+244 949 935 230</a><br /><a href="https://wa.me/244949935230" target="_blank" rel="noopener" style={{ color: 'var(--accent-2)' }}>WhatsApp Business</a></p>
            </div>
            <div className="card">
              <div className="icon-tile teal" style={{ marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
              </div>
              <h4>Email</h4>
              <p className="mb-0"><a href="mailto:Turingbigtech@gmail.com" style={{ color: 'var(--accent)' }}>suporte@turingtech.co.ao</a><br /><span className="mono" style={{ fontSize: '.82rem', color: 'var(--text-dim)' }}>Tempo de resposta: até 2h (comercial)</span></p>
            </div>
            <div className="card">
              <div className="icon-tile warm" style={{ marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h4>Ticket de Suporte</h4>
              <p className="mb-0">Clientes VISÃO 360 podem abrir tickets diretamente no sistema.<br /><a href="/contact" style={{ color: 'var(--accent)' }}>Abrir Ticket</a></p>
            </div>
            <div className="card">
              <div className="icon-tile" style={{ marginBottom: '1rem', background: 'rgba(45,212,191,.12)', color: 'var(--accent-2)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h4>Horário de Atendimento</h4>
              <p className="mb-0">Segunda a Sexta · 08h00 – 17h30<br /><span className="warm">Suporte 24/7</span> para clientes VISÃO 360</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeader eyebrow={{ label: 'FAQ' }} title="Perguntas frequentes" description="As dúvidas mais comuns dos nossos clientes e visitantes." />
          <Accordion items={FAQ_ITEMS.map(f => ({ title: f.question, content: f.answer }))} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Não encontrou a resposta?"
            description="A nossa equipa de suporte está pronta para ajudar."
            primaryHref="/contact"
            primaryLabel="Falar Connosco"
          />
        </div>
      </section>
    </>
  )
}
