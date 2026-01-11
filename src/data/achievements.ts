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
      link: "https://aws.amazon.com/certification/",
    },
    {
      id: "ach-2",
      title: "Google HashCode Finalist",
      description: "Top 100 in global programming competition",
      year: "2022",
      category: "competitive",
    },
    {
      id: "ach-3",
      title: "Hackathon Winner - TechCrunch Disrupt",
      description: "First place in AI/ML category",
      year: "2021",
      category: "hackathon",
    },
  ]