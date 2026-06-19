import useAuth from '../../hooks/useAuth'

export default function DashboardOverview() {
  const { user } = useAuth()

  return (
    <div>
      <div className="eyebrow">Painel do Cliente</div>
      <h2 style={{ marginBottom: '1rem' }}>Visão Geral</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Bem-vindo de volta, {user?.nome?.split(' ')[0]}.</p>

      <div className="grid-3">
        <div className="card">
          <div className="console-kpi">
            <div className="label">Licenças Ativas</div>
            <div className="value" style={{ fontSize: '1.8rem', marginBottom: 0 }}>—</div>
          </div>
        </div>
        <div className="card">
          <div className="console-kpi">
            <div className="label">Tickets Abertos</div>
            <div className="value" style={{ fontSize: '1.8rem', marginBottom: 0 }}>—</div>
          </div>
        </div>
        <div className="card">
          <div className="console-kpi">
            <div className="label">Downloads</div>
            <div className="value" style={{ fontSize: '1.8rem', marginBottom: 0 }}>—</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '2rem', padding: '2rem' }}>
        <h4>Próximos passos</h4>
        <ul className="feature-list" style={{ marginTop: '1rem' }}>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Complete o seu perfil com os dados da empresa</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Ative as suas licenças para começar a usar os produtos</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Transfira as aplicações na secção Downloads</li>
        </ul>
      </div>
    </div>
  )
}
