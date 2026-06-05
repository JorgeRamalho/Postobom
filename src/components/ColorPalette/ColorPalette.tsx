import { colors, gradients } from '../../theme/colors'
import './ColorPalette.css'

const paletteGroups = [
  {
    title: 'Primárias — Energia',
    items: [
      { name: 'Laranja Vibrante', hex: colors.orange.vibrant, var: '--pb-orange-vibrant' },
      { name: 'Laranja Claro', hex: colors.orange.light, var: '--pb-orange-light' },
      { name: 'Vermelho Energia', hex: colors.red.energy, var: '--pb-red-energy' },
      { name: 'Vermelho Profundo', hex: colors.red.deep, var: '--pb-red-deep' },
    ],
  },
  {
    title: 'Background — A.M. / P.M.',
    items: [
      { name: 'Roxo Amanhecer', hex: colors.purple.dawn, var: '--pb-purple-dawn' },
      { name: 'Roxo Entardecer', hex: colors.purple.dusk, var: '--pb-purple-dusk' },
      { name: 'Roxo Profundo', hex: colors.purple.deep, var: '--pb-purple-deep' },
      { name: 'Roxo Veludo', hex: colors.purple.velvet, var: '--pb-purple-velvet' },
      { name: 'Roxo Noite', hex: colors.purple.night, var: '--pb-purple-night' },
    ],
  },
  {
    title: 'Secundárias — Confiança',
    items: [
      { name: 'Azul Confiança', hex: colors.blue.trust, var: '--pb-blue-trust' },
      { name: 'Azul Claro', hex: colors.blue.light, var: '--pb-blue-light' },
    ],
  },
  {
    title: 'Apoio — Frescor & Ofertas',
    items: [
      { name: 'Verde Frescor', hex: colors.green.fresh, var: '--pb-green-fresh' },
      { name: 'Verde Lima', hex: colors.green.lime, var: '--pb-green-lime' },
      { name: 'Amarelo Oferta', hex: colors.yellow.offer, var: '--pb-yellow-offer' },
    ],
  },
]

const gradientItems = [
  { name: 'Hero (A.M. → P.M.)', css: gradients.hero },
  { name: 'Background', css: gradients.background },
  { name: 'Primário', css: gradients.primary },
  { name: 'Warm', css: gradients.warm },
  { name: 'Fresh', css: gradients.fresh },
  { name: 'Offer', css: gradients.offer },
]

export function ColorPalette() {
  return (
    <section className="palette" id="conveniencia">
      <div className="palette__inner">
        <header className="palette__header">
          <span className="palette__label pb-label">Design System</span>
          <h2 className="palette__title pb-heading-2">
            Paleta & <span className="pb-text-gradient-warm">Degradês</span>
          </h2>
          <p className="palette__subtitle pb-body">
            Tokens de cor e gradientes usados em todo o projeto Posto Bom.
          </p>
        </header>

        {paletteGroups.map((group) => (
          <div key={group.title} className="palette__group">
            <h3 className="palette__group-title pb-heading-3">{group.title}</h3>
            <div className="palette__swatches">
              {group.items.map((item) => (
                <div key={item.hex} className="palette__swatch">
                  <div
                    className="palette__swatch-color"
                    style={{ backgroundColor: item.hex }}
                  />
                  <div className="palette__swatch-info">
                    <span className="palette__swatch-name">{item.name}</span>
                    <code className="palette__swatch-hex">{item.hex}</code>
                    <code className="palette__swatch-var">{item.var}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="palette__group">
          <h3 className="palette__group-title pb-heading-3">Gradientes (Degradê)</h3>
          <div className="palette__gradients">
            {gradientItems.map((item) => (
              <div key={item.name} className="palette__gradient">
                <div
                  className="palette__gradient-preview"
                  style={{ background: item.css }}
                />
                <span className="palette__gradient-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
