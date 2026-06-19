import { useState, useEffect } from 'react'

export default function CRM() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('/api/clients').then(r => r.json()).then(setClients).catch(() => {})
  }, [])

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>CRM — Gestão de Clientes</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Base de dados centralizada de clientes.</p>

      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Total Clientes</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{clients.length}</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Setores</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{new Set(clients.map(c => c.sector).filter(Boolean)).size}</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Empresas</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{clients.filter(c => c.empresa).length}</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {clients.map(c => (
          <div key={c.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto' }}>
            <div>
              <h4>{c.nome}</h4>
              <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>
                {c.empresa ? `${c.empresa} · ` : ''}{c.sector || '—'} · {c.email || c.telefone || '—'}
              </div>
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--text-dim)' }}>{c.nif || '—'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
