/**
 * POSTO BOM — Tokens de cor em TypeScript
 * Espelha as variáveis CSS para uso em lógica JS/TS
 */

export const colors = {
  orange: {
    vibrant: '#ff5722',
    light: '#ff7a3d',
  },
  red: {
    energy: '#e63900',
    deep: '#c62828',
  },
  blue: {
    trust: '#1a237e',
    dark: '#0d1547',
    light: '#3949ab',
  },
  purple: {
    deep: '#4a148c',
    vibrant: '#7c3aed',
    mid: '#6d28d9',
    dark: '#1a0a2e',
    dawn: '#3d2a6e',
    dusk: '#2d1b4e',
    velvet: '#1e1035',
    night: '#12081f',
  },
  green: {
    fresh: '#4caf50',
    lime: '#7cb518',
    dark: '#2e7d32',
  },
  yellow: {
    offer: '#ffc107',
    warm: '#ffb300',
  },
  neutral: {
    white: '#ffffff',
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eeeeee',
    gray400: '#bdbdbd',
    gray600: '#757575',
    gray800: '#424242',
    black: '#1a1a1a',
    darkBlack: '#0a0a0a',
    blackDeep: '#000000',
  },
} as const

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.orange.vibrant} 0%, ${colors.red.energy} 50%, ${colors.red.deep} 100%)`,
  hero: `linear-gradient(165deg, ${colors.purple.dawn} 0%, ${colors.purple.dusk} 28%, ${colors.purple.deep} 52%, ${colors.purple.velvet} 75%, ${colors.purple.night} 100%)`,
  background: `linear-gradient(180deg, ${colors.purple.dawn} 0%, ${colors.purple.dusk} 25%, ${colors.purple.deep} 50%, ${colors.purple.dark} 72%, ${colors.purple.night} 100%)`,
  warm: `linear-gradient(90deg, ${colors.orange.light} 0%, ${colors.orange.vibrant} 35%, ${colors.red.energy} 100%)`,
  fresh: `linear-gradient(135deg, ${colors.green.lime} 0%, ${colors.green.fresh} 100%)`,
  offer: `linear-gradient(90deg, ${colors.yellow.warm} 0%, ${colors.yellow.offer} 100%)`,
} as const

export type BrandColor = keyof typeof colors
export type BrandGradient = keyof typeof gradients
