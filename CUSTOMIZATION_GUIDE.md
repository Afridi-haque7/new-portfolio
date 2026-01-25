# How to Update Portfolio with Your Resume Data

## Quick Start Guide

Your portfolio data is stored in **`lib/data.ts`**. Follow these steps to personalize it:

## 1. Personal Information

Update the \`personal\` object with your details:

\`\`\`typescript
personal: {
  name: "Your Full Name",
  title: "Your Job Title (e.g., Full Stack Developer)",
  email: "your.email@example.com",
  phone: "+1 (XXX) XXX-XXXX",
  location: "City, State/Country",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  website: "https://your-website.com",
  bio: "A brief one-sentence introduction about yourself"
}
\`\`\`

## 2. About Section

Write a compelling description about yourself:

\`\`\`typescript
about: {
  description: "2-3 paragraphs about your background, expertise, and passion",
  highlights: [
    "Your years of experience",
    "Key skills or achievements",
    "What drives you",
    "Your approach to work"
  ]
}
\`\`\`

## 3. Education

List your educational background (most recent first):

\`\`\`typescript
education: [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2018 - 2022",
    gpa: "3.8/4.0",  // Optional
    achievements: [
      "Notable awards",
      "Leadership positions",
      "Honors or recognition"
    ]
  }
]
\`\`\`

## 4. Experience

Detail your work experience (most recent first):

\`\`\`typescript
experience: [
  {
    position: "Senior Full Stack Developer",
    company: "Company Name",
    location: "City, Country or Remote",
    period: "Jan 2023 - Present",
    description: [
      "Key achievement with metrics (e.g., increased performance by 40%)",
      "Major responsibility or project",
      "Leadership or collaboration examples",
      "Technical improvements or innovations"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker"]
  }
]
\`\`\`

## 5. Projects

Showcase your best work (3-6 projects recommended):

\`\`\`typescript
projects: [
  {
    title: "Project Name",
    description: "Clear, concise description of what the project does",
    image: "/projects/project-name.jpg",  // Add image to public/projects/
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com/username/project",
    demo: "https://project-demo.com",
    highlights: [
      "Key feature or achievement",
      "Technical challenge solved",
      "Impact or results"
    ]
  }
]
\`\`\`

## 6. Skills

Rate your proficiency in various technologies (0-100):

\`\`\`typescript
skills: {
  "Frontend": [
    { name: "React", level: 95 },  // 90-100: Expert
    { name: "TypeScript", level: 85 },  // 80-89: Advanced
    { name: "Vue.js", level: 70 }  // 70-79: Intermediate
  ],
  "Backend": [
    { name: "Node.js", level: 90 },
    { name: "Python", level: 80 }
  ],
  "Tools & Others": [
    { name: "Git", level: 92 },
    { name: "Docker", level: 75 }
  ]
}
\`\`\`

## Skill Level Guidelines

- **90-100**: Expert - Used extensively in production
- **80-89**: Advanced - Comfortable with complex projects
- **70-79**: Intermediate - Can work independently
- **60-69**: Basic - Need occasional guidance

## Tips for Writing Effective Content

### Experience Descriptions
✅ **Good**: "Reduced API response time by 40% through implementing caching strategies"
❌ **Bad**: "Worked on API optimization"

Use the **STAR method**:
- **S**ituation: What was the challenge?
- **T**ask: What was your role?
- **A**ction: What did you do?
- **R**esult: What was the outcome?

### Project Highlights
Focus on:
- **Impact**: User numbers, performance improvements
- **Innovation**: Unique solutions or approaches
- **Technology**: Interesting tech choices or challenges

### About Section
Include:
- Your current role and expertise
- What you're passionate about
- What makes you unique
- Your goals or approach to development

## Adding Project Images

1. Create project screenshots or graphics
2. Save them in \`public/projects/\`
3. Update image paths in \`lib/data.ts\`
4. Recommended size: 1200x630px for best results

## After Updating

1. Save your changes to \`lib/data.ts\`
2. The development server will auto-reload
3. Review your portfolio at http://localhost:3000
4. Make adjustments as needed

## Need Help?

- Check \`PORTFOLIO_README.md\` for technical details
- Look at the existing template data for examples
- Test thoroughly on mobile and desktop
- Ask someone to review for typos and clarity

---

Remember: Quality over quantity! Better to have fewer, well-described items than many rushed ones.
