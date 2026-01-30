export interface Experience {
    id: string
    company: string
    role: string
    period: string
    location: string
    description: string[]
    technologies: string[]
    logo?: string
  }
  
  export const experiences: Experience[] = [
    {
      id: "exp-1",
      company: "Big Tech Company",
      role: "DevOps Engineer",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of core platform features serving 10M+ users",
        "Architected microservices reducing latency by 40%",
        "Mentored team of 8 engineers and established best practices",
        "Improved system reliability to 99.99% uptime",
      ],
      technologies: ["AWS", "Kubernetes"],
    },
    {
      id: "exp-2",
      company: "",
      role: "DevOps Engineer",
      period: "2019 - 2021",
      location: "Remote",
      description: [
        "Built and maintained customer-facing web applications",
        "Optimized database queries reducing response time by 50%",
        "Implemented CI/CD pipelines improving deployment frequency",
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    },
  ]