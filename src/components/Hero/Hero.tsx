import { brandSlogan } from '../../theme/typography'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero pb-bg-gradient-hero">
      <div className="hero__glow hero__glow--orange" aria-hidden="true" />
      <div className="hero__glow hero__glow--green" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__badge pb-label">Rede Posto Bom</span>

          <h1 className="hero__title pb-heading-1">
            <span className="hero__title-line">Tudo que você</span>
            <span className="hero__title-line pb-text-gradient-warm">precisa.</span>
          </h1>

          <p className="hero__slogan pb-slogan">{brandSlogan}</p>

          <p className="hero__desc pb-body-lg">
            Combustível com desconto, troca de óleo em 10x sem juros, mini mercado
            completo, farmácia, banco, lavanderia e espaço pet 24 horas.
          </p>

          <div className="hero__actions">
            <Button variant="primary">Ver promoções</Button>
            <Button variant="outline">Nossos serviços</Button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-card">
            <Logo size="hero" />
            <div className="hero__logo-card-accent" aria-hidden="true" />
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value pb-text-gradient-warm">24h</span>
              <span className="hero__stat-label pb-label">Pet & Conveniência</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value pb-text-gradient-fresh">10x</span>
              <span className="hero__stat-label pb-label">Óleo s/ juros</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value pb-text-gradient-warm">A–Z</span>
              <span className="hero__stat-label pb-label">Mini mercado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
