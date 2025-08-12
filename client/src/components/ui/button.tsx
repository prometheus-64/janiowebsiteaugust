import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft hover:shadow-medium transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline:
          "border border-border bg-background text-foreground hover:bg-muted shadow-soft hover:shadow-medium transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-soft hover:shadow-medium transition-all duration-300",
        ghost: "hover:bg-muted hover:text-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        cta: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-medium hover:shadow-strong transform hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide border-0",
        hero: "bg-background/10 text-primary-foreground border border-background/30 hover:bg-background/20 shadow-elegant hover:shadow-medium transform hover:scale-[1.02] transition-all duration-300 font-semibold backdrop-blur-sm",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft hover:shadow-medium transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
