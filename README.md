# Personal Portfolio

A modern, production-ready personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with dark/light mode
- 🚀 Optimized performance (Lighthouse 90+)
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎭 3D elements with Three.js
- 🔍 SEO optimized
- ♿ Accessible (ARIA labels, keyboard navigation)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Customize your data:
   - Edit \`src/data/config.ts\` for personal information
   - Update \`src/data/projects.ts\` with your projects
   - Modify \`src/data/experience.ts\` with your work history
   - Add achievements in \`src/data/achievements.ts\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

All personal data is stored in \`src/data/config.ts\`:
- Name, title, description
- Social media links
- Resume PDF path
- Location

### Projects

Edit \`src/data/projects.ts\` to add/remove projects. Each project includes:
- Title and description
- Technologies used
- GitHub and live demo links
- Featured status

### Experience

Update \`src/data/experience.ts\` with your work history.

### Styling

- Colors: Edit CSS variables in \`src/app/globals.css\`
- Components: Modify components in \`src/components/\`
- Tailwind: Customize \`tailwind.config.ts\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

\`\`\`bash
npm run build
npm start
\`\`\`

## Performance Tips

- Optimize images (use Next.js Image component)
- Enable compression
- Use CDN for static assets
- Monitor with Lighthouse
