import { ArrowRight } from "lucide-react"
import { GhostButton } from "./ghost-button"

interface ViewDetailsButtonProps {
  href?: string
  className?: string
}

export function ViewDetailsButton({ href = "#", className }: ViewDetailsButtonProps) {
  return (
    <GhostButton href={href} className={`w-full group ${className}`}>
      View Details
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </GhostButton>
  )
}

