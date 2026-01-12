"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/config"

const socialLinks = [
  { icon: Github, href: siteConfig?.links?.github ?? "#", label: "GitHub" },
  { icon: Linkedin, href: siteConfig?.links?.linkedin ?? "#", label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}