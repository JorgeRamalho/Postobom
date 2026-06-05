import { Logo } from '../Logo/Logo'
import './Header.css'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Promoções', href: '#promocoes' },
  { label: 'Conveniência', href: '#conveniencia' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__brand">
          <Logo size="md" />
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#promocoes" className="header__cta pb-label">
          Ver descontos
        </a>
      </div>
    </header>
  )
}
