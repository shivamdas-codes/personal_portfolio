// "use client"

// import { useEffect, useState } from "react"

// export function useTheme() {
//   const [theme, setTheme] = useState<"light" | "dark">("dark")
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const stored = localStorage.getItem("theme") as "light" | "dark" | null
//     if (stored) {
//       setTheme(stored)
//     } else {
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
//       setTheme(prefersDark ? "dark" : "light")
//     }
//   }, [])

//   useEffect(() => {
//     if (mounted) {
//       document.documentElement.classList.toggle("dark", theme === "dark")
//       localStorage.setItem("theme", theme)
//     }
//   }, [theme, mounted])

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"))
//   }

//   return { theme, toggleTheme, mounted }
// }