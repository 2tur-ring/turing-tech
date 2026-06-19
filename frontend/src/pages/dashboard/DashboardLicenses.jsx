import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function DashboardLicenses() {
  const [licenses, setLicenses] = useState([])

  useEffect(() => {
    api.get('/licenses').then(({ data }) => setLicenses(data)).catch(() => {})
  }, [])

  return (
    <div>
      <div className="eyebrow">Área de Cliente</div>
      <h2 style={{ marginBottom: '1rem' }}>As minhas Licenças</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Gerencie as licenças dos seus produtos Turing Tech.</p>

      {licenses.length === 0 ? (
        <div className="card">
          <p className="mb-0" style={{ textAlign: 'center', padding: '2rem 0' }}>Nenhuma licença encontrada.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {licenses.map(lic => (
            <div key={lic.id} className="job-card">
              <div>
                <h4>Licença · {lic.key}</h4>
                <div className="meta">
                  <span>Produto #{lic.product_id}</span>
                  <span>{lic.max_devices} dispositivos</span>
                  <span className={`status-pill ${lic.status === 'active' ? 'building' : 'planned'}`} style={{ display: 'inline-block', padding: '.2rem .7rem', fontSize: '.72rem' }}>
                    {lic.status === 'active' ? 'Ativa' : lic.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
