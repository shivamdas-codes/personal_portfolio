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
      year: "2023",
      category: "certification",
      link: "",
    },
    {
      id: "ach-2",
      title: "",
      description: "",
      year: "2022",
      category: "competitive",
    },
    {
      id: "ach-3",
      title: "",
      description: "",
      year: "2021",
      category: "hackathon",
    },
  ]