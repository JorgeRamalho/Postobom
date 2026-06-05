import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'fresh' | 'offer'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`pb-btn pb-btn--${variant} ${fullWidth ? 'pb-btn--full' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
