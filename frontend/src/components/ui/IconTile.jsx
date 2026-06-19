export default function IconTile({ variant, children, ...props }) {
  return <div className={`icon-tile${variant ? ` ${variant}` : ''}`} {...props}>{children}</div>
}
