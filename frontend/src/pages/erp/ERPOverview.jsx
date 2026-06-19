import { useState, useEffect } from 'react'
import KPIWidget from '../../components/dashboard/KPIWidget'
import ActivityFeed from '../../components/dashboard/ActivityFeed'

export default function ERPOverview() {
  const [kpis, setKpis] = useState({ total_revenue: 0, total_sales: 0, total_clients: 0, total_employees: 0, stock_alerts: 0, pending_orders: 0, open_tickets: 0, pending_invoices: 0 })
  const [activity, setActivity] = useState([])
  const [insights, setInsights] = useState('')
  const [loadingInsights, setLoadingInsights] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/overview').then(r => r.json()).then(setKpis).catch(() => {})
    fetch('/api/dashboard/activity').then(r => r.json()).then(setActivity).catch(() => {})
  }, [])

  const loadInsights = async () => {
    setLoadingInsights(true)
    try { const r = await fetch('/api/ai/insights'); const d = await r.json(); setInsights(d.response) }
    catch { setInsights('❌ Não foi possível carregar insights.') }
    setLoadingInsights(false)
  }

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>Painel</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Visão consolidada do seu negócio.</p>

      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <KPIWidget label="Receita Total" value={`${kpis.total_revenue.toLocaleString()} Kz`} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--success)' }}><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>} color="green" />
        <KPIWidget label="Vendas" value={kpis.total_sales.toString()} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--accent)' }}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>} color="blue" />
        <KPIWidget label="Clientes" value={kpis.total_clients.toString()} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--warning)' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>} color="yellow" />
        <KPIWidget label="Alertas Stock" value={kpis.stock_alerts.toString()} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--danger)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>} color="red" />
      </div>

      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <KPIWidget label="Funcionários" value={kpis.total_employees.toString()} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--accent)' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>} color="blue" />
        <KPIWidget label="Encomendas Pendentes" value={kpis.pending_orders.toString()} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--warning)' }}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>} color="yellow" />
        <KPIWidget label="Tickets Abertos" value={kpis.open_tickets.toString()} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--danger)' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>} color="red" />
        <KPIWidget label="Faturas Pendentes" value={`${kpis.pending_invoices.toLocaleString()} Kz`} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'var(--success)' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>} color="green" />
      </div>

      <ActivityFeed items={activity} />

      <div className="card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h4 style={{ marginBottom: 0 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '.4rem', color: 'var(--accent)' }}><path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" /><line x1="19" y1="3" x2="19" y2="8" /><line x1="16" y1="5.5" x2="21" y2="5.5" /></svg>
            Sugestões AI
          </h4>
          <button className="btn btn-ghost btn-sm" onClick={loadInsights} disabled={loadingInsights}>
            {loadingInsights ? 'A analisar...' : 'Analisar Dados'}
          </button>
        </div>
        {insights ? (
          <div style={{ fontSize: '.92rem', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{insights}</div>
        ) : (
          <div style={{ color: 'var(--text-dim)', fontSize: '.88rem' }}>Clique em "Analisar Dados" para obter insights inteligentes sobre o seu negócio.</div>
        )}
      </div>
    </div>
  )
}
