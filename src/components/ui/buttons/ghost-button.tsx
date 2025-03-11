import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  className?: string
  size?: "default" | "sm" | "lg"
}

export function GhostButton({ children, href, className, size = "default", ...props }: GhostButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"

  const sizeStyles = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-6 text-base",
  }

  const buttonStyles = cn(baseStyles, sizeStyles[size], className)

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

