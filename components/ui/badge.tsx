import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-2 py-1 text-label-md uppercase font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    
    const variants = {
      default: "bg-primary text-on-primary border border-primary",
      secondary: "bg-surface-variant text-on-surface border border-surface-variant",
      outline: "bg-transparent text-primary border border-primary",
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className || ""}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
