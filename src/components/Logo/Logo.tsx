import { brandLogo } from '../../theme/brand'
import './Logo.css'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  className?: string
}

/** Logomarca oficial aprovada do Posto Bom */
export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`logo logo--${size} ${className}`.trim()}>
      <img
        src={brandLogo.src}
        alt={brandLogo.alt}
        className="logo__image"
        draggable={false}
      />
    </div>
  )
}
