import type { ReactNode } from "react"
import { PrimaryButton } from "./primary-button"

interface RegisterButtonProps {
  children?: ReactNode
  className?: string
  size?: "default" | "sm" | "lg"
}

export function RegisterButton({ children = "Register Now", className, size = "default" }: RegisterButtonProps) {
  return (
    <PrimaryButton href="/register" className={className} size={size}>
      {children}
    </PrimaryButton>
  )
}

