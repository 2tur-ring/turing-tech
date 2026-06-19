import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function DashboardInvoices() {
  const [invoices, setInvoices] = useState([])

  useEffect(() => { api.get('/invoices').then(({ data }) => setInvoices(data)).catch(() => {}) }, [])

  return (
    <div>
      <div className="eyebrow">Área de Cliente</div>
      <h2 style={{ marginBottom: '1rem' }}>As minhas Faturas</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Histórico de faturas e pagamentos.</p>

      {invoices.length === 0 ? (
        <div className="card"><p className="mb-0" style={{ textAlign: 'center', padding: '2rem 0' }}>Nenhuma fatura encontrada.</p></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {invoices.map(inv => (
            <div key={inv.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto auto' }}>
              <div>
                <h4>Fatura #{inv.id}</h4>
                <div className="mono" style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>{new Date(inv.created_at).toLocaleDateString('pt-PT')} · Vencimento: {new Date(inv.due_date).toLocaleDateString('pt-PT')}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>{inv.amount.toLocaleString()} Kz</div>
              <div className={`status-pill ${inv.status === 'paid' ? 'building' : inv.status === 'pending' ? 'research' : 'planned'}`}>
                {inv.status === 'paid' ? 'Paga' : inv.status === 'pending' ? 'Pendente' : inv.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
