import { useState, useEffect } from 'react'

export default function Contabilidade() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch('/api/finance/entries').then(r => r.json()).then(setEntries).catch(() => {})
  }, [])

  const totalDebit = entries.reduce((s, e) => s + e.debit, 0)
  const totalCredit = entries.reduce((s, e) => s + e.credit, 0)

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>Contabilidade</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Plano de contas, lançamentos e reconciliação.</p>

      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Lançamentos</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{entries.length}</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Total Débito</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{totalDebit.toLocaleString()} Kz</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Total Crédito</div>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{totalCredit.toLocaleString()} Kz</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {entries.map(e => (
          <div key={e.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto auto auto' }}>
            <div>
              <h4>{e.account_code} — {e.account_name}</h4>
              <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>
                {e.description} · {new Date(e.date).toLocaleDateString('pt-PT')}
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--danger)' }}>{e.debit > 0 ? `${e.debit.toLocaleString()} Kz` : '—'}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--success)' }}>{e.credit > 0 ? `${e.credit.toLocaleString()} Kz` : '—'}</div>
            <div className={`status-pill ${e.reconciled === 'yes' ? 'building' : 'planned'}`}>{e.reconciled === 'yes' ? 'Reconciliado' : 'Pendente'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
