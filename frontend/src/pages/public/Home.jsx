import SEO from '../../components/seo/SEO'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
)

function RevealSection({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal${className ? ' ' + className : ''}`}>{children}</div>
}

function RevealStagger({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in'); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal-stagger${className ? ' ' + className : ''}`}>{children}</div>
}

const testimonials = [
  {
    initials: 'DK', name: 'Direção Comercial', company: 'Distribuidora Kianda',
    quote: 'Desde que implementámos o VISÃO 360, deixámos de fazer o fecho de caixa em papel. Hoje sabemos, em tempo real, o que está a vender e o que está a faltar em cada loja.'
  },
  {
    initials: 'FB', name: 'Gestão Geral', company: 'Farmácia Bem-Estar, Huambo',
    quote: 'O Genius AI tornou-se o nosso analista financeiro de bolso. Pergunto em português normal e recebo a resposta — sem esperar pelo relatório do fim do mês.'
  },
  {
    initials: 'GS', name: 'Operações', company: 'Grupo Sanzala, Luanda',
    quote: 'A equipa da Turing Tech entende como as empresas angolanas realmente funcionam. Não nos venderam um sistema genérico — adaptaram-no à nossa realidade, incluindo o trabalho offline.'
  }
]

export default function Home() {
  const trackRef = useRef(null)
  const dotsRef = useRef(null)
  const slideIndex = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    const dots = dotsRef.current
    if (!track || !dots) return
    const slides = Array.from(track.querySelectorAll('.testimonial-slide'))
    if (!slides.length) return
    const update = () => {
      track.style.transform = `translateX(-${slideIndex.current * 100}%)`
      dots.querySelectorAll('button').forEach((btn, i) => btn.classList.toggle('active', i === slideIndex.current))
    }
    dots.innerHTML = slides.map((_, i) => `<button${i === 0 ? ' class="active"' : ''}></button>`).join('')
    const prev = document.querySelector('.carousel-arrow.prev')
    const next = document.querySelector('.carousel-arrow.next')
    prev?.addEventListener('click', () => { slideIndex.current = (slideIndex.current - 1 + slides.length) % slides.length; update() })
    next?.addEventListener('click', () => { slideIndex.current = (slideIndex.current + 1) % slides.length; update() })
    return () => { prev?.replaceWith(prev.cloneNode(true)); next?.replaceWith(next.cloneNode(true)) }
  }, [])

  return (
    <>
      <SEO title="Turing Tech — Tecnologia que Transforma Empresas em Angola e África" description="ERP, Inteligência Artificial e consultoria estratégica para transformar a gestão da sua empresa em Angola e África." />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" style={{ background: 'var(--primary)', top: '-10%', left: '-10%' }}></div>
        <div className="hero-glow" style={{ background: 'var(--accent)', bottom: '-10%', right: '-10%' }}></div>
        <div className="hero-glow" style={{ background: 'var(--primary)', top: '40%', left: '50%' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 25%, rgba(2,6,23,0.75) 40%, transparent 65%), url(/assets/hero-bg.png) right center / cover no-repeat', pointerEvents: 'none', zIndex: 0 }}></div>
        <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <RevealSection>
            <div className="eyebrow">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulseGlow 2s ease-in-out infinite', marginRight: 2 }}></span>
              Tecnologia Empresarial
            </div>
            <h1>A <span className="grad-text">tecnologia</span> que transforma empresas em  Angola e África.</h1>
            <p className="lead">Na Turing Tech, combinamos ERP, Inteligência Artificial e consultoria estratégica para transformar a gestão da sua empresa. Somos a ponte entre a visão tradicional e o futuro digital.</p>
            <div className="hero-ctas">
              <Link to="/contact?demo=1" className="btn btn-primary btn-lg">Solicitar Demonstração</Link>
              <a href="https://wa.me/244949935230" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Falar no WhatsApp</a>
            </div>
            <div className="hero-meta">
              <div><b>10+</b>Anos de Experiência</div>
              <div><b>50+</b>Empresas Transformadas</div>
              <div><b>54+</b>Parceiros</div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="console">
              <div className="console-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="console-title mono">visao360.turingtech.co.ao / painel-geral</span>
              </div>
              <div className="console-body">
                <div className="console-kpis">
                  <div className="console-kpi">
                    <div className="label">Vendas Hoje</div>
                    <div className="value">1.840.500 Kz</div>
                    <div className="bars">
                      <span style={{ height: '35%' }}></span><span style={{ height: '55%' }}></span>
                      <span style={{ height: '40%' }}></span><span style={{ height: '70%' }}></span>
                      <span style={{ height: '92%' }} className="up"></span>
                    </div>
                  </div>
                  <div className="console-kpi">
                    <div className="label">Stock Crítico</div>
                    <div className="value">12 itens</div>
                    <div className="bars">
                      <span style={{ height: '80%' }}></span><span style={{ height: '65%' }}></span>
                      <span style={{ height: '75%' }}></span><span style={{ height: '50%' }}></span>
                      <span style={{ height: '30%' }} className="up"></span>
                    </div>
                  </div>
                  <div className="console-kpi">
                    <div className="label">Margem Bruta</div>
                    <div className="value">25,4%</div>
                    <div className="bars">
                      <span style={{ height: '48%' }}></span><span style={{ height: '52%' }}></span>
                      <span style={{ height: '58%' }}></span><span style={{ height: '60%' }}></span>
                      <span style={{ height: '66%' }} className="up"></span>
                    </div>
                  </div>
                </div>
                <div className="console-chat">
                  <div className="row">
                    <div className="avatar user mono">GM</div>
                    <div className="bubble">Qual foi o produto mais vendido esta semana na Loja 1?</div>
                  </div>
                  <div className="row">
                    <div className="avatar mono">AI</div>
                    <div className="bubble typing"><strong>Detergente OMO 1kg</strong> liderou com 312 unidades — 18% acima da média semanal. Sugiro reforçar o stock antes do fim de semana.</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <RevealStagger className="stats-grid">
            {[
              { num: '10+', label: 'Anos de Experiência' },
              { num: '500+', label: 'Empresas Transformadas' },
              { num: '50+', label: 'Parceiros' },
              { num: '98%', label: 'Satisfação' }
            ].map(s => (
              <div key={s.label} className="stat">
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section" id="sobre">
        <div className="container split">
          <RevealSection>
            <div className="eyebrow">Sobre Nós</div>
            <h2>A tecnologia que <span className="grad-text">impulsiona</span> o seu negócio em África.</h2>
            <p className="lead mb-0">Somos uma empresa de tecnologia nascida em Angola com o propósito de transformar a gestão empresarial em África. Atuamos nos setores de retalho, saúde, logística e construção civil, oferecendo soluções completas que integram ERP, inteligência artificial e consultoria estratégica.</p>
            <Link to="/about" className="btn btn-ghost mt-2">Conhecer a nossa história <ChevronRight /></Link>
          </RevealSection>
          <RevealStagger style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="card">
              <div className="icon-tile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <h3>Missão</h3>
              <p className="mb-0">Transformar empresas angolanas e africanas através de tecnologia inteligente, segura e escalável..</p>
            </div>
            <div className="card">
              <div className="icon-tile teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3>Visão</h3>
              <p className="mb-0">Ser o principal hub tecnológico de inovação de África Lusófona até 2030.</p>
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="section" id="produtos" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-header center">
            <RevealSection>
              <div className="eyebrow">Produtos</div>
              <h2>Soluções que <span className="grad-text">transformam</span> a gestão empresarial.</h2>
              <p className="lead" style={{ margin: '0 auto' }}>Conheça os nossos produtos principais, construídos para responder aos desafios reais das empresas angolanas e africanas.</p>
            </RevealSection>
          </div>

          <RevealStagger className="grid-3">
            <div className="product-card featured">
              <span className="tag live">Em operação</span>
              <div className="icon-tile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <h3>VISÃO 360 ERP</h3>
              <p>O ERP completo que integra finanças, stock, vendas, RH e CRM num único sistema. Funciona online e offline, adaptado à realidade das empresas africanas.</p>
              <div className="module-grid">
                {['01 Finanças', '02 Contabilidade', '03 Compras', '04 Vendas', '05 RH', '06 CRM', '07 POS', '08 Inventário'].map(m => <div key={m} className="module-chip">{m}</div>)}
              </div>
              <Link to="/products/visao360" className="btn btn-secondary mt-1">Explorar o VISÃO 360 <ChevronRight /></Link>
            </div>

            <div className="product-card">
              <span className="tag soon">Em desenvolvimento</span>
              <div className="icon-tile warm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
              </div>
              <h3>VISÃO 360 Mobile</h3>
              <p>A versão mobile do nosso ERP, permitindo gerir o negócio a partir de qualquer lugar. Consulte stock, registe vendas e acompanhe indicadores em tempo real pelo smartphone.</p>
              <ul className="feature-list">
                {['POS móvel para vendedores', 'Consulta de stock em tempo real', 'Dashboard de indicadores', 'Sincronização offline'].map(f => <li key={f}><CheckIcon /> {f}</li>)}
              </ul>
              <Link to="/products/roadmap" className="btn btn-secondary mt-1">Ver roadmap completo <ChevronRight /></Link>
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section" id="servicos">
        <div className="container">
          <div className="section-header">
            <RevealSection>
              <div className="eyebrow">Portfólio de Serviços</div>
              <h2>Mais de <span className="grad-text">21 categorias</span> de serviços tecnológicos.</h2>
              <p className="lead mb-0">Transformando África através da Tecnologia, Inovação e Inteligência Artificial. Do software à IA, da cloud à cibersegurança — tudo num só parceiro.</p>
            </RevealSection>
          </div>

          <RevealStagger className="grid-3">
            {[
              { icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>, title: 'Software & Plataformas', desc: 'Sistemas empresariais, plataformas digitais, web e mobile.', tag: '4 áreas' },
              { icon: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></>, title: 'IA & Cloud', desc: 'Inteligência Artificial, Cloud Computing, Cibersegurança e Infraestrutura.', tag: '4 áreas' },
              { icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>, title: 'Transformação & Dados', desc: 'Transformação Digital, Business Intelligence e Internet das Coisas.', tag: '3 áreas' },
              { icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>, title: 'Governo & Setor Público', desc: 'Governo digital, educação, saúde e agricultura inteligente.', tag: '4 áreas' },
              { icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>, title: 'Finanças & Marketing', desc: 'Bancos, Fintech, Design Digital e Marketing para o mercado africano.', tag: '3 áreas' },
              { icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>, title: 'Capacitação & Inovação', desc: 'Formação, pesquisa, laboratórios e o ecossistema de produtos próprios.', tag: '3 áreas' }
            ].map((s, i) => (
              <Link key={i} to="/services" className="card" style={{ textDecoration: 'none' }}>
                <div className={`icon-tile${i === 1 ? ' teal' : ''}${i === 2 ? ' warm' : ''}${i === 3 ? '' : ''}${i === 4 ? ' teal' : ''}${i === 5 ? ' warm' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </div>
                <h3>{s.title}</h3>
                <p className="mb-0">{s.desc}</p>
                <span className="tag" style={{ marginTop: '0.75rem' }}>{s.tag}</span>
              </Link>
            ))}
          </RevealStagger>

          <RevealSection>
            <div className="text-center mt-2">
              <Link to="/services" className="btn btn-primary">Ver portfólio completo de serviços <ChevronRight /></Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="section" id="solucoes" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center">
            <RevealSection>
              <div className="eyebrow">Soluções</div>
              <h2>Soluções para cada <span className="grad-text">setor</span>.</h2>
              <p className="lead" style={{ margin: '0 auto' }}>Adaptamos a nossa tecnologia às necessidades específicas de cada indústria.</p>
            </RevealSection>
          </div>

          <RevealStagger className="grid-4">
            {[
              {
                icon: <><path d="M3 3h18v18H3z" /></>,
                title: 'Retalho',
                desc: 'Gestão de lojas, POS, inventário multi-loja e fidelização de clientes.'
              },
              {
                icon: <><path d="M4 4h16v16H4z" /><path d="M9 12h6" /></>,
                title: 'Saúde',
                desc: 'Gestão de clínicas, stock de medicamentos e prontuários eletrónicos.'
              },
              {
                icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
                title: 'Logística',
                desc: 'Rastreamento de frotas, gestão de armazéns e otimização de rotas.'
              },
              {
                icon: <><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" /></>,
                title: 'Construção Civil',
                desc: 'Gestão de obras, orçamentos, fornecedores e controlo de projetos.'
              }
            ].map((s, i) => (
              <div key={i} className="card">
                <div className="icon-tile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </div>
                <h3>{s.title}</h3>
                <p className="mb-0">{s.desc}</p>
              </div>
            ))}
          </RevealStagger>

          <RevealSection>
            <div className="cta-band" style={{ marginTop: '3rem' }}>
              <div>
                <h2>Qual é o seu setor?</h2>
                <p className="mb-0">Agende uma demonstração personalizada para o seu ramo de atividade.</p>
              </div>
              <div className="cta-band-actions">
                <Link to="/contact?demo=1" className="btn btn-primary btn-lg">Solicitar Demonstração</Link>
                <Link to="/setores" className="btn btn-secondary btn-lg">Ver todas as soluções</Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section" id="depoimentos">
        <div className="container">
          <div className="section-header center">
            <RevealSection>
              <div className="eyebrow">Depoimentos</div>
              <h2>Empresas que já confiam na Turing Tech</h2>
            </RevealSection>
          </div>

          <RevealSection>
            <div className="testimonial-track-wrap">
              <div className="testimonial-track" ref={trackRef} style={{ transition: 'transform .45s var(--ease)', display: 'flex' }}>
                {testimonials.map(t => (
                  <div key={t.initials} className="testimonial-slide" style={{ minWidth: '100%', display: 'grid' }}>
                    <div className="avatar-block">{t.initials}</div>
                    <div>
                      <blockquote>{t.quote}</blockquote>
                      <cite>{t.name} &middot; <b>{t.company}</b></cite>
                    </div>
                  </div>
                ))}
              </div>
              <div className="carousel-controls">
                <button className="carousel-arrow prev" aria-label="Anterior">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" /></svg>
                </button>
                <div className="carousel-dots" ref={dotsRef}></div>
                <button className="carousel-arrow next" aria-label="Seguinte">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* BLOG */}
      <section className="section" id="blog" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center">
            <RevealSection>
              <div className="eyebrow">Blog Tecnológico</div>
              <h2>Conhecimento que <span className="grad-text">impulsiona</span>.</h2>
              <p className="lead" style={{ margin: '0 auto' }}>Artigos sobre ERP, IA, Transformação Digital e Gestão Empresarial.</p>
            </RevealSection>
          </div>

          <RevealStagger className="grid-3">
            {[
              {
                tag: 'ERP',
                title: 'Como o ERP transforma a gestão empresarial em África',
                desc: 'Descubra como um sistema integrado pode revolucionar a sua empresa.'
              },
              {
                tag: 'Transformação Digital',
                title: 'Guia prático para a transformação digital em Angola',
                desc: 'Passos essenciais para digitalizar o seu negócio com sucesso.'
              }
            ].map((post, i) => (
              <Link key={i} to="/blog" className="card" style={{ textDecoration: 'none' }}>
                <p className="eyebrow" style={{ fontSize: '.75rem' }}>{post.tag}</p>
                <h3 style={{ fontSize: '1.05rem' }}>{post.title}</h3>
                <p className="mb-0">{post.desc}</p>
              </Link>
            ))}
          </RevealStagger>

          <RevealSection>
            <div className="text-center mt-2">
              <Link to="/blog" className="btn btn-ghost">Ver todos os artigos <ChevronRight /></Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="section" id="recursos" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center">
            <RevealSection>
              <div className="eyebrow">Centro de Recursos</div>
              <h2>Materiais para <span className="grad-text">download</span>.</h2>
            </RevealSection>
          </div>

          <RevealStagger className="grid-4">
            {[
              { title: 'Catálogo de Produtos', meta: 'PDF • 2.4 MB' },
              { title: 'Brochura Comercial', meta: 'PDF • 1.8 MB' },
              { title: 'E-book: ERP em África', meta: 'PDF • 5.2 MB' },
              { title: 'Caso de Estudo', meta: 'PDF • 3.1 MB' }
            ].map((r, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <svg style={{ width: '2.5rem', height: '2.5rem', margin: '0 auto 1rem' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <h4 style={{ fontSize: '.9rem' }}>{r.title}</h4>
                <p className="mb-0" style={{ fontSize: '.8rem', color: 'var(--text-muted)' }}>{r.meta}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <RevealSection>
            <div className="cta-band">
              <div>
                <h2>Pronto para transformar o seu negócio?</h2>
                <p className="mb-0">Agende uma demonstração gratuita e descubra como a Turing Tech pode simplificar a gestão da sua empresa.</p>
              </div>
              <div className="cta-band-actions">
                <Link to="/contact?demo=1" className="btn btn-primary btn-lg">Solicitar Demonstração</Link>
                <a href="https://wa.me/244949935230" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">Falar no WhatsApp</a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
