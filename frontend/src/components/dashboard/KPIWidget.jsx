export default function KPIWidget({ label, value, icon, trend, color }) {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.2rem' }}>
      <div style={{ width: '44px', height: '44px', borderRadius: 'var(--r-sm)', background: `rgba(${color === 'green' ? '52,211,153' : color === 'blue' ? '59,130,246' : color === 'yellow' ? '250,204,21' : '239,68,68'},.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div className="mono" style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--text-dim)', marginBottom: '.15rem' }}>{label}</div>
        <div style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</div>
        {trend && <div style={{ fontSize: '.75rem', color: trend > 0 ? 'var(--success)' : 'var(--danger)' }}>{trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%</div>}
      </div>
    </div>
  )
}
