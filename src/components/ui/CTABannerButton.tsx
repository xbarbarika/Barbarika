"use client"

import * as React from "react"
import { Button } from "./button"
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      } as const,
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      } as const,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'

interface CTABannerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const CTABannerButton = React.forwardRef<HTMLButtonElement, CTABannerButtonProps>(
  ({ className, variant = 'secondary', size = 'lg', ...props }, ref) => {
    return (
      <Button
        className={buttonVariants({ variant: variant as 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link', size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
CTABannerButton.displayName = "CTABannerButton"

export { CTABannerButton }
