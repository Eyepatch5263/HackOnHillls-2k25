"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  value: string
  onChange: (value: string) => void
  collapsible: boolean
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

interface AccordionItemContextValue {
  value: string
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | undefined>(undefined)

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single" | "multiple"
    collapsible?: boolean
    value?: string
    onValueChange?: (value: string) => void
    defaultValue?: string
  }
>(({ className, type = "single", collapsible = false, value, onValueChange, defaultValue, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue)
  
  const contextValue = value !== undefined
    ? { value, onChange: onValueChange || (() => {}), collapsible, type }
    : {
        value: internalValue || "",
        onChange: (newValue: string) => {
          if (collapsible && internalValue === newValue) {
            setInternalValue(undefined)
          } else {
            setInternalValue(newValue)
          }
        },
        collapsible,
        type
      }

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn("divide-y divide-slate-700", className)}
        {...props}
      />
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const isOpen = context?.value === value

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn("py-2", className)}
        {...props}
      />
    </AccordionItemContext.Provider>
  )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const itemContext = React.useContext(AccordionItemContext)
  const itemValue = value || itemContext?.value
  const isOpen = context?.value === itemValue

  const handleClick = () => {
    if (!context || !itemValue) return
    context.onChange(itemValue)
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const itemContext = React.useContext(AccordionItemContext)
  const isOpen = context?.value === itemContext?.value

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "animate-accordion-down" : "animate-accordion-up",
        className
      )}
      {...props}
    >
      <div className="py-4">{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 