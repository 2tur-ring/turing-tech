import SEO from '../../components/seo/SEO'
import { Link } from 'react-router-dom'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'

const sectors = [
  {
    name: 'Comércio',
    color: 'var(--primary)',
    hoverColor: 'var(--primary)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
  },
  {
    name: 'Indústria',
    color: 'var(--accent)',
    hoverColor: 'var(--accent)',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  },
  {
    name: 'Saúde',
    color: '#22C55E',
    hoverColor: '#22C55E',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
  },
  {
    name: 'Educação',
    color: '#F59E0B',
    hoverColor: '#F59E0B',
    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></>
  },
  {
    name: 'Logística',
    color: '#F97316',
    hoverColor: '#F97316',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  },
  {
    name: 'Construção Civil',
    color: '#38BDF8',
    hoverColor: '#38BDF8',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  },
  {
    name: 'Hotelaria',
    color: '#EC4899',
    hoverColor: '#EC4899',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
  },
  {
    name: 'Serviços',
    color: '#818CF8',
    hoverColor: '#818CF8',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  }
]

export default function Setores() {
  return (
    <>
      <SEO title="Soluções por Setor" description="Indústrias que atendemos: Comércio, Indústria, Saúde, Educação, Logística, Construção Civil, Hotelaria, Serviços." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Soluções por Setor' }]} />
            <div className="eyebrow teal">Soluções por Setor</div>
            <h1>Indústrias que <span className="grad-text">Atendemos</span></h1>
            <p className="lead">Soluções especializadas para cada setor da economia. Da tecnologia certa para o seu negócio.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem', position: 'relative' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {sectors.map(s => (
              <div
                key={s.name}
                className="card"
                style={{
                  textAlign: 'center',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all .3s ease',
                  border: '1px solid rgba(255,255,255,.1)'
                }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ width: 32, height: 32, margin: '0 auto .75rem', color: s.color }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >{s.icon}</svg>
                <h4 style={{ fontSize: '.875rem', fontWeight: 600 }}>{s.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="O seu setor não está na lista?"
            description="Fale connosco. Desenvolvemos soluções personalizadas para qualquer tipo de negócio."
            primaryHref="/contact"
            primaryLabel="Solicitar Orçamento"
          />
        </div>
      </section>
    </>
  )
}
