"use client"

import { ButtonHTMLAttributes, forwardRef, cloneElement, isValidElement } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, asChild, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    const buttonClassName = cn(
      "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      variants[variant],
      sizes[size],
      className
    )

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        className: cn(buttonClassName, children.props.className),
        ...props,
      } as any)
    }

    // Exclude conflicting animation event handlers from props
    const {
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...motionProps
    } = props

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClassName}
        {...(motionProps as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"