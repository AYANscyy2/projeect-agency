import * as React from "react"
import Image from "next/image"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  imageAlt?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, imageSrc, imageAlt = "Card image", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-surface-container-lowest border-2 border-primary flex flex-col ${className || ""}`}
        {...props}
      >
        {imageSrc && (
          <div className="relative w-full h-64 border-b-2 border-primary overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 p-6 text-left">
          {children}
        </div>
      </div>
    )
  }
)
Card.displayName = "Card"

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={`font-anton text-headline-md uppercase leading-tight ${className || ""}`}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={`font-inter text-body-md text-on-surface-variant ${className || ""}`}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

export { Card, CardTitle, CardDescription }
