"use client"

import { HTMLAttributes } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ className, children, hover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-lg transition-shadow",
        hover && "hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}