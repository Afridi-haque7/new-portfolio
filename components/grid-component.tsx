import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  ArrowDown
} from "lucide-react";
import { Button } from "./ui/button";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Image from "next/image";

interface GridComponentProps {
  className?: string;
  name?: string;
  type?: string;
  content?: any;
}

// Helper function to get icon component
const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    Github,
    Linkedin,
    Instagram,
    Twitter,
    Facebook,
    Mail,
  };
  return icons[iconName] || Mail; // Default to Mail if icon not found
};

const SummaryGrid = ({ content }: { content: string }) => {
  return (
    <div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
};

const SocialsGrid = ({ content }: { content: any[] }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-wrap gap-3">
        {content.map((social, index) => {
          const IconComponent = getIconComponent(social.icon);
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
            >
              <IconComponent className="w-5 h-5 text-primary transition-colors" />
            </a>
          );
        })}
      </div>

      <div>
        <a 
          href="/resume.pdf" 
          download="Resume.pdf"
          className="inline-flex"
        >
          <Button variant="outline">
            Resume <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

const EducationGrid = ({ content }: { content: any[] }) => {
  return (
    <div className="space-y-4">
      {content.map((edu, index) => (
        <div
          key={index}
          className="p-3 rounded-md bg-background/50 border border-border/30 hover:border-border/60 transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-sm text-foreground">
              {edu.institution}
            </h4>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              {edu.gpa}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{edu.degree}</p>
          <p className="text-xs text-muted-foreground">{edu.period}</p>
        </div>
      ))}
    </div>
  );
};

const ExperienceGrid = ({ content }: { content: any[] }) => {
  return (
    <div className="space-y-4">
      {content.map((exp, index) => (
        <div
          key={index}
          className="p-3 rounded-md bg-background/50 border border-border/30 hover:border-border/60 transition-colors"
        >
          <div className="mb-2">
            <h4 className="font-semibold text-sm text-foreground">
              {exp.position}
            </h4>
            <p className="text-xs text-primary">{exp.company}</p>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                        {exp.shortDescription.map((desc: string, i: number) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
          <div className="flex flex-wrap gap-1 mt-2">
            {exp.technologies.slice(0, 4).map((tech: string, i: number) => (
              <span
                key={i}
                className="inline-block text-xs px-2 py-0.5 bg-primary/10 text-primary rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SkillsGrid = ({ content }: { content: any[] }) => {
  return (
    <div className="space-y-3">
      {content.map((skillCategory, index) => (
        <div key={index}>
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">
            {skillCategory.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillCategory.skills.map((skill: string, i: number) => (
              <span
                key={i}
                className="inline-block text-xs px-3 py-1 bg-primary/15 text-primary rounded-full border border-primary/30 hover:bg-primary/25 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const PhotoGrid = ({ content }: { content: any }) => {
  return (
    <div className="flex justify-center items-center h-full">
        <Image
        src="/photo.jpeg"
        width={200}
        height={100}
        alt="Profile Photo"
        />
    </div>
  );
};

const LeetcodeGrid = ({ content }: { content: any }) => {
  // Find the "All" submission data

  const allData = content?.totalQuestions;
  // const difficultyData = content?.filter((item: any) => item.difficulty !== "All");

  // Get individual difficulty data
  const easyData = content?.easySolved;
  const mediumData = content?.mediumSolved;
  const hardData = content?.hardSolved;

  const difficultyData = [
    {
      difficulty: "Easy",
      count: content?.totalEasy,
      submission: easyData,
    },
    {
      difficulty: "Medium",
      count: content?.totalMedium,
      submission: mediumData,
    },
    {
      difficulty: "Hard",
      count: content?.totalHard,
      submission: hardData,
    },
  ];
  // Calculate percentages for circular progress based on total count
  const totalCount = content?.totalSolved;
  const easyPercentage = easyData ? (easyData / totalCount) * 100 : 0;
  const mediumPercentage = mediumData ? (mediumData / totalCount) * 100 : 0;
  const hardPercentage = hardData ? (hardData / totalCount) * 100 : 0;

  // Calculate cumulative offsets for stacking circles
  const circumference = 565.48;
  const easyLength = (easyPercentage / 100) * circumference;
  const mediumLength = (mediumPercentage / 100) * circumference;
  const hardLength = (hardPercentage / 100) * circumference;

  return (
    <div className="w-full h-full flex items-center justify-between">
      {/* Circular Stats with Ring */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-48 h-48">
          {/* Background circle */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 200 200"
          >
            {/* Total circle background */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted-foreground/20"
            />

            {/* Easy progress (green) */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#22c55e"
              strokeWidth="8"
              strokeDasharray={`${easyLength} ${circumference}`}
              strokeDashoffset="0"
              strokeLinecap="round"
              className="transition-all duration-1000"
            />

            {/* Medium progress (yellow) */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="8"
              strokeDasharray={`${mediumLength} ${circumference}`}
              strokeDashoffset={`-${easyLength}`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />

            {/* Hard progress (red) */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#ef4444"
              strokeWidth="8"
              strokeDasharray={`${hardLength} ${circumference}`}
              strokeDashoffset={`-${easyLength + mediumLength}`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 dark:text-white">
                {totalCount}
                <span className="text-xl text-muted-foreground">
                  /{allData}
                </span>
              </div>
              <div className="text-sm text-green-500 font-medium mt-1">
                ✓ Solved
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty breakdown - Right side cards */}
      <div className="space-y-2">
        {difficultyData.map((item: any) => (
          <div
            key={item.difficulty}
            className="p-3 rounded-md bg-background/50 border border-border/30"
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-xs font-semibold ${
                    item.difficulty === "Easy"
                      ? "text-green-500"
                      : item.difficulty === "Medium"
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                >
                  {item.difficulty}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">
                  {item.submission}/{item.count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function GridComponent({
  className,
  name,
  type,
  content,
}: GridComponentProps) {
  const renderContent = () => {
    switch (type) {
      case "summary":
        return <SummaryGrid content={content} />;
      case "socials":
        return <SocialsGrid content={content} />;
      case "education":
        return <EducationGrid content={content} />;
      case "experience":
        return <ExperienceGrid content={content} />;
      case "skills":
        return <SkillsGrid content={content} />;
      case "photo":
        return <PhotoGrid content={content} />;
      case "leetcode":
        return <LeetcodeGrid content={content} />;
      default:
        return <p className="text-muted-foreground">{content}</p>;
    }
  };
  return (
    <div
      className={cn(
        "w-full h-full p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm",
        className,
      )}
    >
      {/* Header Section */}
      {name && name !== "Photo" && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        </div>
      )}

      {/* Content Section */}
      <div className="">{renderContent()}</div>
    </div>
  );
}
