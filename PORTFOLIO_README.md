# Portfolio Website

A sophisticated, modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

✨ **Modern UI/UX**
- Clean, professional design inspired by top portfolios
- Smooth animations and transitions throughout
- Sophisticated color schemes and gradients

🌓 **Dark/Light Mode**
- Seamless theme switching
- System preference detection
- Smooth transitions between themes

📱 **Fully Responsive**
- Mobile-first design
- Optimized for all device sizes
- Touch-friendly interactions

⚡ **Performance Optimized**
- Built with Next.js 16 for optimal performance
- Lazy loading and code splitting
- Optimized animations

🎨 **Sections**
- **Home**: Hero section with typing animation
- **About**: Personal introduction and highlights
- **Education**: Timeline of educational background
- **Experience**: Professional experience with achievements
- **Projects**: Featured projects with tech stacks
- **Skills**: Technical skills with progress bars
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd new-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

All portfolio data is centralized in \`lib/data.ts\`. Update this file with your personal information:

1. **Personal Information**: Name, title, contact details, social links
2. **About Section**: Bio and highlights
3. **Education**: Degrees, institutions, achievements
4. **Experience**: Work history, responsibilities, technologies
5. **Projects**: Featured projects with descriptions and links
6. **Skills**: Technical skills with proficiency levels

### Example:

\`\`\`typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Job Title",
    email: "your.email@example.com",
    // ... update all fields
  },
  // ... update other sections
}
\`\`\`

### Customize Colors

The color scheme can be customized in \`app/globals.css\`:
- Primary colors: Blue (#2563eb)
- Secondary colors: Purple (#9333ea)
- Update the gradient classes: \`bg-linear-to-r from-blue-600 to-purple-600\`

### Add Your Images

Replace placeholder project images in the \`public\` folder:
- Add project screenshots to \`public/projects/\`
- Update image paths in \`lib/data.ts\`

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion, React Intersection Observer
- **Theme**: next-themes

## Project Structure

\`\`\`
new-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navigation.tsx      # Navigation bar
│   ├── hero-section.tsx    # Hero section
│   ├── about-section.tsx   # About section
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data.ts             # Portfolio data (UPDATE THIS!)
│   └── utils.ts            # Utility functions
└── public/
    └── projects/           # Project images

\`\`\`

## Available Scripts

- \`pnpm dev\` - Start development server
- \`pnpm build\` - Build for production
- \`pnpm start\` - Start production server

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## Customization Tips

1. **Colors**: Search for \`blue-600\` and \`purple-600\` in components to change accent colors
2. **Fonts**: Update font in \`app/layout.tsx\`
3. **Sections**: Add/remove sections in \`app/page.tsx\`
4. **Animations**: Adjust animation timings in \`app/globals.css\`

## Performance

- Lighthouse Score: 95+
- Core Web Vitals: Excellent
- SEO Optimized
- Accessibility Compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio!

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js
