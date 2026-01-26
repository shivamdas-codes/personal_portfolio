export interface Achievement {
    id: string
    title: string
    description: string
    year: string
    category: "competitive" | "certification" | "hackathon" | "open-source"
    link?: string
  }
  
  export const achievements: Achievement[] = [
    {
      id: "ach-1",
      title: "AWS Certified Solutions Architect",
      description: "Professional certification in cloud architecture",
      year: "",
      category: "certification",
      link: "",
    },
    {
      id: "ach-2",
      title: "",
      description: "",
      year: "",
      category: "competitive",
    },
    {
      id: "ach-3",
      title: "",
      description: "",
      year: "",
      category: "hackathon",
    },
  ]