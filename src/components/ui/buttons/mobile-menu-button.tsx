"use client"

import { useState } from "react"
import { OutlineButton } from "./outline-button"

interface MobileMenuButtonProps {
  onToggle?: () => void
  className?: string
}

export function MobileMenuButton({ onToggle, className }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    if (onToggle) {
      onToggle()
    }
  }

  return (
    <OutlineButton onClick={handleClick} className={`p-1 ${className}`} aria-expanded={isOpen} aria-label="Toggle menu">
      <span className="sr-only">Toggle menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </>
        )}
      </svg>
    </OutlineButton>
  )
}

