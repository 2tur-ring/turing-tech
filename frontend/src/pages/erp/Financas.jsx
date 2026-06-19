import { useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Financas() {
  const [summary, setSummary] = useState({ revenue: 0, expenses: 0, balance: 0, pending: 0 })
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('/api/finance/summary').then(r => r.json()).then(setSummary).catch(() => {})
    fetch('/api/finance/transactions').then(r => r.json()).then(setTransactions).catch(() => {})
  }, [])

  const monthlyData = transactions.reduce((acc, t) => {
    const month = new Date(t.date).toLocaleDateString('pt-PT', { month: 'short', year: '2-digit' })
    if (!acc[month]) acc[month] = { month, revenue: 0, expenses: 0 }
    if (t.type === 'revenue') acc[month].revenue += t.amount
    else acc[month].expenses += t.amount
    return acc
  }, {})

  const chartData = Object.values(monthlyData)

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>Finanças</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Gestão financeira e fluxo de caixa.</p>
      <div style={{ marginBottom: '1.5rem' }}>
        <a href="/erp/smart-ai" className="btn btn-ghost btn-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
          Gerar Relatório Financeiro
        </a>
      </div>

      <div className="grid-4" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Receita</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--success)' }}>{summary.revenue.toLocaleString()} Kz</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Despesas</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--danger)' }}>{summary.expenses.toLocaleString()} Kz</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Saldo</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{summary.balance.toLocaleString()} Kz</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Pendente</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--warning)' }}>{summary.pending.toLocaleString()} Kz</div>
        </div>
      </div>

      <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h4 style={{ marginBottom: '1rem' }}>Fluxo de Caixa</h4>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-dim)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-dim)' }} />
            <Tooltip contentStyle={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)' }} />
            <Area type="monotone" dataKey="revenue" stroke="var(--success)" fill="rgba(52,211,153,.1)" strokeWidth={2} />
            <Area type="monotone" dataKey="expenses" stroke="var(--danger)" fill="rgba(239,68,68,.1)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {transactions.map(t => (
          <div key={t.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto auto' }}>
            <div>
              <h4>{t.description || t.category || 'Transação'}</h4>
              <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>{new Date(t.date).toLocaleDateString('pt-PT')}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: t.type === 'revenue' ? 'var(--success)' : 'var(--danger)' }}>
              {t.type === 'revenue' ? '+' : '-'}{t.amount.toLocaleString()} Kz
            </div>
            <div className={`status-pill ${t.type === 'revenue' ? 'building' : 'planned'}`}>{t.type}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
