import * as React from "react"

// Zero-dependency button component using plain template literals for consistent athletic styling.

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "inverse"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-inter text-[13px] uppercase font-bold tracking-widest transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none px-8 py-4 border-2 focus-visible:outline-none"
    
    const variants = {
      primary: "bg-primary text-on-primary border-primary hover:bg-transparent hover:text-primary",
      secondary: "bg-transparent text-primary border-primary hover:bg-primary hover:text-on-primary",
      outline: "bg-transparent text-on-primary border-[#5a5a5a] hover:border-on-primary hover:bg-on-primary hover:text-primary",
      inverse: "bg-on-primary text-primary border-on-primary hover:bg-transparent hover:text-on-primary",
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
