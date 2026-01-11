export interface Project {
    id: string
    title: string
    description: string
    longDescription: string
    image: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    featured: boolean
    category: "web" | "mobile" | "ai" | "infrastructure"
  }
  
  export const projects: Project[] = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description: "Scalable e-commerce solution with real-time inventory",
      longDescription: "Built a high-performance e-commerce platform using Next.js and microservices architecture. Implemented real-time inventory management, payment processing, and analytics dashboard.",
      image: "/images/project-1.jpg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
      githubUrl: "https://github.com/yourusername/project-1",
      liveUrl: "https://project-1-demo.com",
      featured: true,
      category: "web",
    },
    {
      id: "project-2",
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics with ML predictions",
      longDescription: "Developed an analytics platform with machine learning capabilities for predictive insights. Features include real-time data visualization, custom ML models, and automated reporting.",
      image: "/images/project-2.jpg",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
      githubUrl: "https://github.com/yourusername/project-2",
      liveUrl: "https://project-2-demo.com",
      featured: true,
      category: "ai",
    },
    {
      id: "project-3",
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code for multi-cloud deployment",
      longDescription: "Created a comprehensive IaC solution using Terraform and Ansible for automated cloud infrastructure provisioning across AWS, GCP, and Azure.",
      image: "/images/project-3.jpg",
      technologies: ["Terraform", "Ansible", "AWS", "GCP", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/yourusername/project-3",
      featured: true,
      category: "infrastructure",
    },
  ]