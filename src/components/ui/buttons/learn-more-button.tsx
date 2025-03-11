import type { ReactNode } from "react"
import { OutlineButton } from "./outline-button"

interface LearnMoreButtonProps {
  children?: ReactNode
  href?: string
  className?: string
  color?: "primary" | "amber" | "slate" | "amber-dark"
}

export function LearnMoreButton({
  children = "Learn More",
  href = "#",
  className,
  color = "primary",
}: LearnMoreButtonProps) {
  return (
    <OutlineButton href={href} className={className} color={color}>
      {children}
    </OutlineButton>
  )
}

