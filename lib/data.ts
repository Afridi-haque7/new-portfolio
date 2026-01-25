export const portfolioData = {
  personal: {
    name: "Afridi Haque",
    title: "Software Engineer",
    email: "afridi.hq97@.com",
    phone: "+91 6294900841",
    location: "Kolkata, India",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    website: "https://yourwebsite.com",
    bio: "Passionate developer with expertise in building scalable web applications. Focused on creating elegant solutions to complex problems.",
  },

  about: {
    description: `I'm a dedicated software developer with a strong foundation in modern web technologies. 
    I specialize in building responsive, user-friendly applications that solve real-world problems. 
    With a keen eye for design and a commitment to writing clean, maintainable code, 
    I strive to create exceptional digital experiences.`,
    highlights: [
      "1.5+ years of industry experience",
      "Strong problem-solving and analytical skills",
      "Passionate about learning new technologies",
      "Team player with excellent communication skills",
    ],
  },

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Chandigarh University",
      location: "Mohali, Punjab",
      period: "2020 - 2024",
      gpa: "8.1/10.0",
      achievements: [],
    },
    {
      degree: "12th Grade - Science Stream",
      institution: "Guidance Academy",
      location: "Kolkata, West Bengal",
      period: "2018 - 2020",
      gpa: "9.3/10.0",
      achievements: [],
    },
    {
      degree: "10th Grade",
      institution: "Guidance Academy",
      location: "Kolkata, West Bengal",
      period: "2017 - 2018",
      gpa: "9.3/10.0",
      achievements: [],
    },
  ],

  experience: [
    {
      position: "Software Engineer",
      company: "Amoga Software Pvt. Ltd.",
      location: "Bangalore, India",
      period: "April, 2025 - Present",
      description: [
        `Led development of the AI App Studio, a flagship low-code/no-code platform enabling clients to build scalable
applications with pages, objects, RBAC, workflows, and automations, reducing application creation time from
3–4 days to 30 minutes (90%+ reduction) and eliminating dependency on product consultants.`,
        `Designed and built a highly interactive drag-and-drop application builder along with reusable widgets including
Notes (real-time saving with replies), Comments (real-time collaboration), Stats (dashboard KPIs), and File
Uploaders, significantly improving client productivity and faster application delivery`,
        `Owned frontend architecture and performance optimization, delivering fast, scalable, and responsive user interfaces using
Nextjs, Reactjs, Tailwind CSS, Shadcn components, Redux, and WebSocket, supporting complex multi-page
enterprise applications.`,
        `Collaborated cross-functionally with backend and product teams to integrate workflow-driven automations,
role-based access control, and AI-powered features, ensuring seamless end-to-end user experience and reliable system
behavior`,
        `Contributed to AI model training and fine-tuning to improve accuracy and real-world effectiveness of intelligent
features within the AI App Studio, aligning AI outputs with business workflows.`,
      ],
      shortDescription: [
        "Led development of the AI App Studio",
        "Engineered drag-and-droppable page widgets",
        "Designed AI page builder architecture",
      ],
      technologies: ["ReactJS", "Javascript", "TypeScript", "NextJS", "Tailwind CSS", "Redux", "Websocket", "REST APIs" ],
    },
    {
      position: "Web Developer Intern",
      company: "AKON Group of Industries",
      location: "Remote",
      period: "June 2022 - Aug 2022",
      description: [
        "Developed responsive web applications using modern frameworks",
        "Wrote unit tests achieving 85% code coverage",
        "Participated in agile development process",
        "Fixed bugs and implemented new features",
      ],
      shortDescription: [
        "Developed responsive web applications using modern frameworks",
        "Wrote unit tests achieving 85% code coverage",
        "Fixed bugs and implemented new features",
      ],
      technologies: ["JavaScript", "React", "CSS", "Bootstrap" ],
    },
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://ecommerce-demo.com",
      highlights: [
        "Supports 10,000+ products",
        "Real-time inventory updates",
        "Secure payment processing",
      ],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      image: "/projects/taskapp.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/yourusername/taskapp",
      demo: "https://taskapp-demo.com",
      highlights: [
        "Real-time collaboration",
        "Drag-and-drop interface",
        "Role-based access control",
      ],
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot powered by AI for customer support and engagement.",
      image: "/projects/chatbot.jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/yourusername/chatbot",
      demo: "https://chatbot-demo.com",
      highlights: [
        "Natural language processing",
        "Multi-language support",
        "Context-aware responses",
      ],
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system specifically designed for developers and designers to showcase their work.",
      image: "/projects/cms.jpg",
      technologies: ["Next.js", "Sanity.io", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio-cms",
      demo: "https://portfolio-cms-demo.com",
      highlights: [
        "Drag-and-drop content builder",
        "SEO optimized",
        "Responsive templates",
      ],
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"],
    },
  ],

  socials: [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: "Linkedin"
    },
    {
        name: "GitHub",
        url: "https://github.com/Afridi-haque7",
        icon: "Github"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/yourprofile",
        icon: "Instagram"
    }
  ]
};
