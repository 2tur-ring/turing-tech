import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

import Button from '../components/ui/Button'

describe('Button component', () => {
  it('renders with children', () => {
    render(<Button>Testar</Button>)
    expect(screen.getByText('Testar')).toBeInTheDocument()
  })

  it('renders primary variant', () => {
    render(<Button variant="primary">Primário</Button>)
    const btn = screen.getByText('Primário')
    expect(btn.className).toContain('btn-primary')
  })
})
