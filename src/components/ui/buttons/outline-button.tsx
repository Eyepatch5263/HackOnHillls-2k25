import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  className?: string
  size?: "default" | "sm" | "lg"
  color?: "primary" | "amber" | "slate" | "amber-dark"
}

export function OutlineButton({
  children,
  href,
  className,
  size = "default",
  color = "primary",
  ...props
}: OutlineButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-transparent"

  const colorStyles = {
    primary: "border-primary/50 text-primary hover:bg-primary/20",
    amber: "border-amber-500/50 text-amber-500 hover:bg-amber-500/20",
    slate: "border-slate-400/50 text-slate-400 hover:bg-slate-400/20",
    "amber-dark": "border-amber-800/50 text-amber-800 hover:bg-amber-800/20",
  }

  const sizeStyles = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-6 text-base",
  }

  const buttonStyles = cn(baseStyles, colorStyles[color], sizeStyles[size], className)

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

