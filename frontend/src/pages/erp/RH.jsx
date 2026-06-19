import { useState, useEffect } from 'react'

export default function RH() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('/api/employees').then(r => r.json()).then(setEmployees).catch(() => {})
  }, [])

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>Recursos Humanos</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Gestão de colaboradores, assiduidade e folha de salários.</p>

      <div className="grid-3" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Total</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{employees.length}</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Ativos</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--success)' }}>{employees.filter(e => e.status === 'active').length}</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1.2rem' }}>
          <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)', marginBottom: '.3rem' }}>Departamentos</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{new Set(employees.map(e => e.department).filter(Boolean)).size}</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {employees.map(emp => (
          <div key={emp.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto auto' }}>
            <div>
              <h4>{emp.nome}</h4>
              <div className="mono" style={{ fontSize: '.78rem', color: 'var(--text-dim)' }}>
                {emp.role} · {emp.department} · {emp.email}
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{emp.salary.toLocaleString()} Kz</div>
            <div className={`status-pill ${emp.status === 'active' ? 'building' : 'planned'}`}>{emp.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
