import Button from './Button'

export default function CTABand({ title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <div className="cta-band">
      <div>
        <h2>{title}</h2>
        {description && <p className="mb-0">{description}</p>}
      </div>
      <div className="cta-band-actions">
        {primaryHref && <Button href={primaryHref} variant="primary" size="lg">{primaryLabel}</Button>}
        {secondaryHref && <Button href={secondaryHref} variant="secondary" size="lg">{secondaryLabel}</Button>}
      </div>
    </div>
  )
}
