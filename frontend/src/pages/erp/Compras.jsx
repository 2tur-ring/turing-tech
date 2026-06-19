import { useState, useEffect } from 'react'

export default function Compras() {
  const [suppliers, setSuppliers] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/api/purchases/suppliers').then(r => r.json()).then(setSuppliers).catch(() => {})
    fetch('/api/purchases/orders').then(r => r.json()).then(setOrders).catch(() => {})
  }, [])

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '1rem' }}>Compras</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Fornecedores e encomendas.</p>

      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Fornecedores</h4>
          {suppliers.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-dim)', fontSize: '.88rem' }}>Nenhum fornecedor registado.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {suppliers.map(s => (
                <div key={s.id} style={{ padding: '.7rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>{s.name}</div>
                    <div className="mono" style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>{s.nif} · {s.contact}</div>
                  </div>
                  <div style={{ fontSize: '.8rem', color: 'var(--text-dim)' }}>{s.payment_terms || '—'}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1rem' }}>Encomendas</h4>
          {orders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-dim)', fontSize: '.88rem' }}>Nenhuma encomenda registada.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {orders.map(o => (
                <div key={o.id} style={{ padding: '.7rem 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 500 }}>Encomenda #{o.id}</div>
                    <div className="mono" style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>{new Date(o.created_at).toLocaleDateString('pt-PT')}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{o.total.toLocaleString()} Kz</span>
                    <span className={`status-pill ${o.status === 'delivered' ? 'building' : o.status === 'pending' ? 'planned' : ''}`}>{o.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
