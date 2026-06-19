import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Vendas() {
  const [vendas, setVendas] = useState([])
  const [topProducts, setTopProducts] = useState([])

  useEffect(() => {
    fetch('/api/sales').then(r => r.json()).then(setVendas).catch(() => {})
    fetch('/api/sales/top-products').then(r => r.json()).then(setTopProducts).catch(() => {})
  }, [])

  const dailyData = vendas.reduce((acc, v) => {
    const day = new Date(v.created_at).toLocaleDateString('pt-PT')
    acc[day] = (acc[day] || 0) + v.amount
    return acc
  }, {})

  const chartData = Object.entries(dailyData).slice(-14).map(([day, amount]) => ({ day, amount }))

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>Vendas</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Acompanhe o desempenho das suas vendas.</p>
      <div style={{ marginBottom: '1.5rem' }}>
        <a href="/erp/smart-ai" className="btn btn-ghost btn-sm">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
          Gerar Relatório de Vendas
        </a>
      </div>

      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Vendas Recentes</h4>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--text-dim)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-dim)' }} />
              <Tooltip contentStyle={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)' }} />
              <Bar dataKey="amount" fill="var(--accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Top Produtos</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
            {topProducts.map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.6rem 0', borderBottom: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontWeight: 500 }}>{p.product_name}</div>
                  <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>{p.total_qty} unidades</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '.95rem' }}>{Number(p.total_amount).toLocaleString()} Kz</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
        {vendas.map(v => (
          <div key={v.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto auto' }}>
            <div>
              <h4>Venda #{v.id} — {v.product_name}</h4>
              <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>
                {v.quantity}x · {v.payment_method} · {new Date(v.created_at).toLocaleDateString('pt-PT')}
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{v.amount.toLocaleString()} Kz</div>
            <div className={`status-pill ${v.status === 'completed' ? 'building' : ''}`}>{v.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
