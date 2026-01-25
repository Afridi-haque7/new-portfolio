# Resume to Portfolio Data Extraction Checklist

Use this checklist to systematically transfer information from your resume to `lib/data.ts`.

## Personal Information ✏️

From your resume header, extract:
- [ ] Full Name
- [ ] Professional Title/Role
- [ ] Email Address
- [ ] Phone Number
- [ ] Location (City, State/Country)
- [ ] LinkedIn Profile URL
- [ ] GitHub Profile URL
- [ ] Personal Website (if any)
- [ ] One-line professional bio

**Where to add**: `lib/data.ts` → `portfolioData.personal`

---

## About Section 📝

Write or adapt from your resume:
- [ ] Professional summary (2-3 paragraphs)
- [ ] Key highlights (4-6 bullet points):
  - Years of experience
  - Core competencies
  - Notable achievements
  - Work approach/philosophy

**Where to add**: `lib/data.ts` → `portfolioData.about`

---

## Education 🎓

For each degree (starting with most recent):
- [ ] Degree name (e.g., "Bachelor of Science in Computer Science")
- [ ] Institution name
- [ ] Location (City, Country)
- [ ] Time period (e.g., "2018 - 2022")
- [ ] GPA (optional)
- [ ] Achievements/honors:
  - Dean's List
  - Scholarships
  - Leadership positions
  - Relevant coursework
  - Academic awards

**Where to add**: `lib/data.ts` → `portfolioData.education[]`

---

## Work Experience 💼

For each position (starting with most recent):
- [ ] Job title
- [ ] Company name
- [ ] Location (or "Remote")
- [ ] Time period (e.g., "Jan 2023 - Present")
- [ ] Key responsibilities and achievements (4-6 bullets):
  - Use action verbs (Led, Developed, Implemented, etc.)
  - Include metrics/numbers when possible
  - Focus on impact and results
  - Mention key technologies used
- [ ] Technologies/tools used (array of strings)

**Where to add**: `lib/data.ts` → `portfolioData.experience[]`

---

## Projects 🚀

Select 4-6 of your best projects:

For each project:
- [ ] Project name
- [ ] Brief description (1-2 sentences)
- [ ] Technologies used
- [ ] GitHub repository URL
- [ ] Live demo URL (if deployed)
- [ ] Key highlights (3-4 bullets):
  - Main features
  - Technical challenges solved
  - Impact or results
  - Scale or metrics
- [ ] Screenshot/image (save to `public/projects/`)

**Where to add**: `lib/data.ts` → `portfolioData.projects[]`

---

## Technical Skills 💻

Organize your skills into categories:

### Frontend Skills
- [ ] List frameworks/libraries (React, Vue, etc.)
- [ ] Rate proficiency (0-100)

### Backend Skills
- [ ] List languages/frameworks (Node.js, Python, etc.)
- [ ] Rate proficiency (0-100)

### Tools & Others
- [ ] List tools (Git, Docker, AWS, etc.)
- [ ] Rate proficiency (0-100)

**Proficiency Guide:**
- 90-100: Expert (extensive production use)
- 80-89: Advanced (complex projects)
- 70-79: Intermediate (can work independently)
- 60-69: Basic (need occasional help)

**Where to add**: `lib/data.ts` → `portfolioData.skills`

---

## Extraction Tips 💡

### For Experience Bullets
Transform resume bullets to include:
- **Before**: "Worked on API development"
- **After**: "Developed RESTful APIs serving 100K+ daily requests with 99.9% uptime"

### For Project Descriptions
Include:
- What problem it solves
- Who uses it / intended audience
- Key technical features
- Your specific role (if team project)

### For Skills Assessment
Be honest about proficiency:
- Can you mentor others? → 90-100
- Can you architect solutions? → 80-89
- Can you implement features? → 70-79
- Still learning? → 60-69

---

## Before You Start 📋

Have these ready:
1. [ ] Your resume (PDF or printed)
2. [ ] List of project URLs
3. [ ] Social media profile URLs
4. [ ] Project screenshots (optional)
5. [ ] Text editor open to `lib/data.ts`

---

## After Extraction ✅

Review checklist:
- [ ] All placeholders replaced with real data
- [ ] No "Your Name" or "Company XYZ" left
- [ ] All URLs are correct and working
- [ ] Dates are accurate
- [ ] Skills reflect current abilities
- [ ] No typos or grammatical errors
- [ ] Consistent formatting throughout
- [ ] Professional tone maintained
- [ ] Quantified achievements where possible
- [ ] Technologies accurately listed

---

## Need Help? 🆘

**Stuck on writing descriptions?**
- Use STAR method (Situation, Task, Action, Result)
- Focus on impact, not just responsibilities
- Include numbers and metrics
- Show, don't just tell

**Not sure about skill levels?**
- Compare with job requirements
- Consider production experience
- Be realistic, not modest or boastful

**Projects unclear?**
- Prioritize recent, complex projects
- Include diverse tech stacks
- Show range of abilities
- Quality over quantity

---

## Quick Start Example

### From Resume:
```
Software Engineer at Tech Corp
- Developed web applications
- Improved performance
```

### To Portfolio:
```typescript
{
  position: "Software Engineer",
  company: "Tech Corp",
  location: "San Francisco, CA",
  period: "Jun 2022 - Present",
  description: [
    "Developed and maintained 5+ customer-facing web applications using React and Node.js",
    "Improved application load time by 45% through code optimization and lazy loading",
    "Led migration from JavaScript to TypeScript, reducing bugs by 30%",
    "Mentored 3 junior developers through code reviews and pair programming"
  ],
  technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
}
```

---

**Ready?** Open `lib/data.ts` and start filling in your information! 🚀
