import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Using standard classNames for now instead of cva for simplicity, or we can use a simple helper
// Wait, we don't have class-variance-authority or clsx installed. Let's just use plain template literals for zero-dependency.

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-inter text-label-md uppercase font-bold transition-colors disabled:opacity-50 disabled:pointer-events-none px-6 py-4 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    
    const variants = {
      primary: "bg-primary text-on-primary border-primary hover:bg-surface hover:text-primary hover:border-primary",
      secondary: "bg-transparent text-primary border-primary hover:bg-surface-variant",
    }

    const classes = `${baseStyles} ${variants[variant]} ${className || ""}`

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
