import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function DashboardDownloads() {
  const [licenses, setLicenses] = useState([])

  useEffect(() => {
    api.get('/licenses').then(({ data }) => setLicenses(data)).catch(() => {})
  }, [])

  return (
    <div>
      <div className="eyebrow">Área de Cliente</div>
      <h2 style={{ marginBottom: '1rem' }}>Os meus Downloads</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Transfira as aplicações associadas às suas licenças.</p>

      {licenses.length === 0 ? (
        <div className="card">
          <p className="mb-0" style={{ textAlign: 'center', padding: '2rem 0' }}>Nenhuma licença ativa encontrada. Adquira um produto para começar.</p>
        </div>
      ) : (
        <div className="grid-3">
          {licenses.map(lic => (
            <div key={lic.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="icon-tile" style={{ marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="1" width="18" height="22" rx="2" /><line x1="9" y1="18" x2="15" y2="18" /></svg>
              </div>
              <h4>Licença #{lic.key}</h4>
              <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>Produto #{lic.product_id} · {lic.status}</div>
              <button className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Transferir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
