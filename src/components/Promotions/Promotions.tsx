import { promotions } from '../../data/services'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import './Promotions.css'

const gradientClass = {
  warm: 'promotions__card--warm',
  fresh: 'promotions__card--fresh',
  offer: 'promotions__card--offer',
}

export function Promotions() {
  return (
    <section className="promotions" id="promocoes">
      <div className="promotions__inner">
        <header className="promotions__header">
          <Logo size="md" className="promotions__brand-logo" />
          <span className="promotions__label pb-label">Promoções</span>
          <h2 className="promotions__title pb-heading-2">
            Economize <span className="pb-text-gradient-warm">de verdade</span>
          </h2>
        </header>

        <div className="promotions__grid">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className={`promotions__card ${gradientClass[promo.gradient]}`}
            >
              <span className="promotions__badge pb-label">{promo.badge}</span>
              <h3 className="promotions__card-title">{promo.title}</h3>
              <p className="promotions__highlight">{promo.highlight}</p>
              <p className="promotions__desc">{promo.description}</p>
            </article>
          ))}
        </div>

        <div className="promotions__cta">
          <Button variant="primary">Quero economizar</Button>
        </div>
      </div>
    </section>
  )
}
