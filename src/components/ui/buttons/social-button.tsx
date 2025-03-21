import type { ReactNode } from "react"
import { OutlineButton } from "./outline-button"

interface SocialButtonProps {
  href: string
  icon: ReactNode
  label: string
  className?: string
}

export function SocialButton({ href, icon, label, className }: SocialButtonProps) {
  return (
    <OutlineButton href={href} className={`p-2 rounded-full ${className}`}>
      {icon}
      <span className="sr-only">{label}</span>
    </OutlineButton>
  )
}

