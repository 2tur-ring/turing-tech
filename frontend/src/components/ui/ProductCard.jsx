import Button from './Button'

export default function ProductCard({ tag, tagVariant, icon, title, description, modules, features, href, hrefLabel, featured }) {
  return (
    <div className={`product-card${featured ? ' featured' : ''}`}>
      {tag && <span className={`tag${tagVariant ? ` ${tagVariant}` : ''}`}>{tag}</span>}
      {icon && <div className="icon-tile">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {modules && <div className="module-grid">{modules.map(m => <div key={m} className="module-chip">{m}</div>)}</div>}
      {features && <ul className="feature-list">{features.map(f => <li key={f}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> {f}</li>)}</ul>}
      {href && <Button href={href} variant="secondary" className="mt-1">{hrefLabel || 'Saiba mais'} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Button>}
    </div>
  )
}
