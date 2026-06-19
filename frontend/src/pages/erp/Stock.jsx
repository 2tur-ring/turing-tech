import { useState, useEffect } from 'react'

export default function Stock() {
  const [items, setItems] = useState([])
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    fetch('/api/inventory').then(r => r.json()).then(setItems).catch(() => {})
    fetch('/api/inventory/alerts').then(r => r.json()).then(setAlerts).catch(() => {})
  }, [])

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>Stock / Inventário</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Controlo de stock, movimentos e alertas.</p>

      {alerts.length > 0 && (
        <div className="card" style={{ background: 'rgba(239,68,68,.05)', border: '1px solid rgba(239,68,68,.2)', padding: '1.2rem', marginBottom: '1.5rem' }}>
          <h4 style={{ color: 'var(--danger)', marginBottom: '.5rem' }}>⚠ Alertas de Stock Crítico</h4>
          {alerts.map((a, i) => (
            <div key={i} style={{ fontSize: '.88rem', padding: '.3rem 0' }}>{a.item || a.name} — {a.current || a.quantity} unidades (mínimo: {a.min || a.min_stock})</div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {items.map(item => {
          const low = item.quantity <= item.min_stock
          return (
            <div key={item.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto auto auto' }}>
              <div>
                <h4>{item.name}</h4>
                <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>
                  {item.sku} · {item.category} · {item.location || '—'}
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: low ? 'var(--danger)' : 'inherit' }}>
                {item.quantity} un.
              </div>
              <div style={{ fontSize: '.85rem', color: 'var(--text-dim)' }}>min: {item.min_stock}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{item.price.toLocaleString()} Kz</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
