import SEO from '../../components/seo/SEO'
import { useState } from 'react'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <SEO title="Contactos" description="Entre em contacto com a Turing Tech." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Contacto' }]} />
            <div className="eyebrow">Contacto</div>
            <h1>Vamos <span className="grad-text">conversar</span></h1>
            <p className="lead">Estamos no Cuito, Bié — mas presentes em todo o país pelo digital. Agende uma demonstração, peça um orçamento ou tire as suas dúvidas.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Informações</div>
              <h2>Estamos aqui para si</h2>

              <div className="contact-info-list" style={{ marginTop: '2rem' }}>
                <div className="contact-info-item">
                  <div className="icon-tile" style={{ marginBottom: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <h4>Telefone</h4>
                    <p className="mb-0"><a href="tel:+244949935230">+244 949 935 230</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon-tile teal" style={{ marginBottom: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p className="mb-0"><a href="mailto:Turingbigtech@gmail.com">Turingbigtech@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon-tile warm" style={{ marginBottom: 0 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h4>Endereço</h4>
                    <p className="mb-0">Cuito, Província do Bié — Angola</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon-tile" style={{ marginBottom: 0, background: 'rgba(45,212,191,.12)', color: 'var(--accent-2)' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.9-.8 1.1-.1.2-.3.2-.5.1-1.3-.6-2.6-1.7-3.5-3.1-.1-.2-.1-.4.1-.6.2-.2.4-.5.6-.7.1-.2.1-.4.1-.6-.1-.2-.7-1.6-.9-2.1-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.7-.9 2.7.2 1.9 1.5 3.8 3.1 5.1 1.8 1.5 3.5 2.2 4.6 2.4.7.1 1.5 0 2.2-.5.6-.4 1-1.1 1.1-1.8 0-.2 0-.4-.2-.5z" /><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.1 15 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.2-8.4 8.2z" /></svg>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p className="mb-0"><a href="https://wa.me/244949935230" target="_blank" rel="noopener">Conversar via WhatsApp Business</a></p>
                  </div>
                </div>
              </div>

              <div className="divider" style={{ margin: '1.5rem 0' }} />
              <h4>Horário de Atendimento</h4>
              <p style={{ fontSize: '.92rem' }}>Segunda a Sexta · 08h00 – 17h30 (Hora de Angola)<br />Suporte técnico 24/7 para clientes VISÃO 360.</p>
            </div>

            <div>
              <div className="eyebrow">Formulário de Contacto</div>
              <h2>Diga-nos o que precisa</h2>
              <p className="lead">Escolha o tipo de pedido — demonstração, orçamento, suporte ou parceria — e a nossa equipa direciona o seu contacto para a pessoa certa.</p>

              <form onSubmit={handleSubmit} className="mt-2">
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" placeholder="O seu nome" required />
                  </div>
                  <div className="field">
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" id="empresa" name="empresa" placeholder="Nome da sua empresa" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="nome@empresa.co.ao" required />
                  </div>
                  <div className="field">
                    <label htmlFor="telefone">Telefone / WhatsApp</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="+244 9XX XXX XXX" />
                  </div>
                  <div className="field full">
                    <label htmlFor="tipo">Tipo de pedido</label>
                    <select id="tipo" name="tipo">
                      <option>Solicitar Demonstração — VISÃO 360</option>
                      <option>Orçamento de Projeto / Serviços</option>
                      <option>Suporte Técnico</option>
                      <option>Carreiras / Candidatura Espontânea</option>
                      <option>Outro Assunto</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" placeholder="Conte-nos um pouco sobre o seu negócio e o que precisa..." required />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg mt-1">Enviar Pedido
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
                <p className="form-note">Ao enviar, concorda com o contacto da Turing Tech para responder ao seu pedido. Não partilhamos os seus dados com terceiros.</p>
                <div className={`form-success${sent ? ' show' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Pedido enviado com sucesso! A nossa equipa entrará em contacto em breve.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="map-box" style={{ border: 'none', borderRadius: 0, height: '300px' }}>
              <iframe src="https://www.google.com/maps?q=Cuito,+Bi%C3%A9,+Angola&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Turing Tech — Cuito, Bié, Angola" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(.4) invert(.92) contrast(.9)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
