export default function ActivityFeed({ items = [] }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '1rem 1.2rem', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>Atividade Recente</div>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {items.length === 0 ? (
          <div style={{ padding: '2rem 1.2rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '.88rem' }}>Nenhuma atividade registada.</div>
        ) : (
          items.map((item, i) => (
            <div key={i} style={{ padding: '.7rem 1.2rem', borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none', fontSize: '.88rem', display: 'flex', gap: '.7rem', alignItems: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '.4rem', flexShrink: 0 }} />
              <div>
                <div>{item.description}</div>
                <div className="mono" style={{ fontSize: '.72rem', color: 'var(--text-dim)' }}>{new Date(item.date).toLocaleString('pt-PT')}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
