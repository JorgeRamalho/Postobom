import { services } from '../../data/services'
import { Logo } from '../Logo/Logo'
import './Services.css'

const accentClass: Record<string, string> = {
  warm: 'services__card--warm',
  fresh: 'services__card--fresh',
  trust: 'services__card--trust',
  offer: 'services__card--offer',
}

export function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services__inner">
        <header className="services__header">
          <Logo size="md" className="services__brand-logo" />
          <span className="services__label pb-label">Nossos serviços</span>
          <h2 className="services__title pb-heading-2">
            A conveniência mais <span className="pb-text-gradient-warm">completa</span> da cidade
          </h2>
          <p className="services__subtitle pb-body-lg">
            Do combustível ao mercado, da farmácia ao espaço pet — tudo num só lugar.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service) => (
            <article
              key={service.id}
              className={`services__card ${accentClass[service.accent]}`}
            >
              <span className="services__icon" role="img" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="services__card-title pb-heading-3">{service.title}</h3>
              <p className="services__card-desc pb-body">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
