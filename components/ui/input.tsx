import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullOutline?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, fullOutline = false, ...props }, ref) => {
    
    const inputBaseStyles = "flex h-12 w-full bg-transparent px-3 py-2 font-inter text-body-md text-on-surface file:border-0 file:bg-transparent file:text-body-md file:font-medium placeholder:text-outline disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none transition-all duration-200"
    
    // Bottom border vs full outline
    const borderStyles = fullOutline 
      ? "border border-outline focus-visible:border-2 focus-visible:border-primary" 
      : "border-b border-outline focus-visible:border-b-2 focus-visible:border-primary px-0" // remove x-padding if bottom border only to look cleaner

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="font-inter text-label-md uppercase font-bold text-on-surface">
            {label}
          </label>
        )}
        <input
          type={type}
          className={`${inputBaseStyles} ${borderStyles} ${className || ""}`}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
