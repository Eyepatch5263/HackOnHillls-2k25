import Link from "next/link"
import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  className?: string
  variant?: "ghost" | "outline" | "primary"
  icon?: ReactNode
  iconPosition?: "left" | "right"
}

export function IconButton({
  children,
  href,
  className,
  variant = "primary",
  icon,
  iconPosition = "right",
  ...props
}: IconButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-sm gap-2"

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const buttonStyles = cn(baseStyles, variantStyles[variant], className)

  const content =
    iconPosition === "left" ? (
      <>
        {icon} {children}
      </>
    ) : (
      <>
        {children} {icon}
      </>
    )

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    )
  }

  return (
    <button className={buttonStyles} {...props}>
      {content}
    </button>
  )
}

