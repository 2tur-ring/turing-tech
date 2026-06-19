import SEO from '../../components/seo/SEO'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'

const downloads = [
  { name: 'VISÃO 360 — App Android', desc: 'Aplicação móvel do VISÃO 360 para Android. Acompanhe as vendas e o stock do seu negócio diretamente do seu smartphone.', version: 'v2.4.1', size: '28 MB', format: 'APK', icon: 'android', file: null },
  { name: 'VISÃO 360 — App Desktop', desc: 'Cliente desktop do VISÃO 360 para Windows. Gestão completa do seu negócio com funcionalidades offline.', version: 'v2.4.1', size: '64 MB', format: 'EXE', icon: 'windows', file: null },
  { name: 'Turing ERP — Desktop', desc: 'ERP completo para Windows. Finanças, vendas, stock, RH e muito mais numa só aplicação.', version: 'v1.0.0', size: '52 MB', format: 'EXE', icon: 'windows', file: null },
  { name: 'VISÃO 360 — Manual do Utilizador', desc: 'Guia completo de utilização do VISÃO 360 com instruções passo a passo para todos os módulos.', version: '2026.1', size: '8.5 MB', format: 'PDF', icon: 'pdf', file: null },
  { name: 'Eugo — Motor de Busca', desc: 'Aplicação de demonstração do motor de busca da Turing Tech.', version: 'v1.0.1', size: '18 MB', format: 'ZIP', icon: 'android', file: '/api/downloads/files/eugo_version1.0.1.zip' }
]

export default function Downloads() {
  return (
    <>
      <SEO title="Downloads" description="Transfira as aplicações Turing Tech para Android e Windows." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Downloads' }]} />
            <div className="eyebrow">Downloads</div>
            <h1>Transferir <span className="accent">aplicações</span> e recursos</h1>
            <p className="lead">Descarregue as aplicações Turing Tech para Android, Windows e materiais de apoio. Precisará de uma licença ativa para aceder a algumas apps.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SectionHeader eyebrow={{ label: 'Aplicações disponíveis' }} title="Escolha a sua aplicação" description="Aplicações gratuitas para clientes e demonstrações para novos utilizadores." />
          <div className="grid-3">
            {downloads.map((d) => (
              <div key={d.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-tile" style={{ marginBottom: '1rem' }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {d.icon === 'android' ? <><rect x="3" y="1" width="18" height="22" rx="2" /><line x1="9" y1="18" x2="15" y2="18" /></> : d.icon === 'windows' ? <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="3" x2="9" y2="21" /></> : <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>}
                  </svg>
                </div>
                <h4>{d.name}</h4>
                <p style={{ fontSize: '.9rem', flex: 1 }}>{d.desc}</p>
                <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>{d.version} · {d.size} · {d.format}</div>
                {d.file ? (
                  <a href={d.file} download className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    Transferir
                  </a>
                ) : (
                  <span className="btn btn-ghost btn-sm" role="button" aria-disabled="true" style={{ alignSelf: 'flex-start', opacity: .5, cursor: 'default' }}>Brevemente</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="É cliente e precisa de acesso às apps?"
            description="Faça login na área de cliente para gerir as suas licenças e transferir as aplicações que adquiriu."
            primaryHref="/login"
            primaryLabel="Entrar na Área de Cliente"
            secondaryHref="/contact"
            secondaryLabel="Falar Connosco"
          />
        </div>
      </section>
    </>
  )
}
