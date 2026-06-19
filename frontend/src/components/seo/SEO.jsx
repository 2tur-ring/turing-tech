import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://turingtech.co.ao'

export default function SEO({ title, description, ogImage, noindex }) {
  const fullTitle = title ? `${title} — Turing Tech` : 'Turing Tech — Tecnologia que Transforma Negócios em África'
  const desc = description || 'ERP, CRM, RH, Inteligência Artificial e aplicações empresariais para o mercado angolano e africano. Soluções offline, multi-loja e em português.'
  const image = ogImage || `${BASE_URL}/og-image.png`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="language" content="pt" />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_AO" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={BASE_URL} />
    </Helmet>
  )
}
