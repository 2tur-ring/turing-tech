export default function SectionHeader({ eyebrow, title, description, center, className = '' }) {
  return (
    <div className={`section-header${center ? ' center' : ''} ${className}`.trim()}>
      {eyebrow && <div className={`eyebrow${center ? ` ${eyebrow.variant || ''}` : ''}`}>{eyebrow.label || eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {description && <p className="lead" style={center ? { margin: '0 auto' } : undefined}>{description}</p>}
    </div>
  )
}
