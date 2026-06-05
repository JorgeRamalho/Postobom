import { brandSlogan } from '../../theme/typography'
import { Logo } from '../Logo/Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer pb-bg-gradient-hero" id="contato">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo size="lg" />
          <p className="footer__slogan pb-slogan">{brandSlogan}</p>
        </div>

        <div className="footer__columns">
          <div className="footer__col">
            <h4 className="footer__col-title pb-label">Serviços</h4>
            <ul>
              <li>Combustível</li>
              <li>Troca de óleo</li>
              <li>Mini mercado</li>
              <li>Farmácia</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title pb-label">Conveniência</h4>
            <ul>
              <li>Banco</li>
              <li>Lavanderia</li>
              <li>Espaço Pet 24h</li>
              <li>Autoservice</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title pb-label">Contato</h4>
            <ul>
              <li>0800 000 0000</li>
              <li>contato@postobom.com.br</li>
              <li>Aberto 24 horas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Posto Bom. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
