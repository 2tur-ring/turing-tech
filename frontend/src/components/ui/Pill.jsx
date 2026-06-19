export function StatusPill({ variant, children }) {
  return <span className={`status-pill${variant ? ` ${variant}` : ''}`}>{children}</span>
}

export function Pill({ children, active, onClick }) {
  const Tag = onClick ? 'button' : 'span'
  return <Tag className={`pill${active ? ' active' : ''}`} onClick={onClick}>{children}</Tag>
}

export function Tag({ variant, children }) {
  return <span className={`tag${variant ? ` ${variant}` : ''}`}>{children}</span>
}
