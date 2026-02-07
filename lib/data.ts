export const portfolioData = {
  personal: {
    name: "Afridi Haque",
    title: "Software Engineer",
    email: "afridi.hq97@gmail.com",
    phone: "+91 6294900841",
    location: "Kolkata, India",
    linkedin: "https://www.linkedin.com/in/afridi-haque-851924203/",
    github: "https://github.com/Afridi-haque7",
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
      title: "Safe Report - Incident Reporting Platform",
      description:
        "An online platform for annonymous crime reporting and community safety.",
      image: "/safereport.png",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Nodejs"],
      github: "https://github.com/Afridi-haque7/crime-report-js",
      demo: "https://crime-report-js.vercel.app/",
      highlights: [
        "Annonymous incident reporting",
        "Real-time status tracking",
        "Emergency contact features",
      ],
    },
    {
      title: "Trip Tailor",
      description:
        "AI powered travel itinerary planner that customizes trips based on user preferences.",
      image: "/trip.png",
      technologies: ["Nextjs", "Tailwind", "Node.js", "Express", "MongoDB", "Gemini API"],
      github: "https://github.com/Afridi-haque7/ai-trip-planner",
      demo: "https://trip-tailor-dev.vercel.app/",
      highlights: [
        "AI customized itineraries",
        "Tailored recommendations",
        "Estimated cost breakdowns",
      ],
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Javascript", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "MongoDB", "REST APIs", "PostgreSQL"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Postman", "MCP"],
    },
  ],

  socials: [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/afridi-haque-851924203/",
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
