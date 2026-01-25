"use client";

import { useEffect, useState, useMemo } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { portfolioData } from "@/lib/data";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "next-themes";

export function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const theme = useTheme();
  const [particleColor, setParticleColor] = useState(theme.theme === "dark" ? "#FFFFFF" : "#000000");

  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Innovator",
  ];

  useEffect(() => {
    setParticleColor(theme.theme === "dark" ? "#FFFFFF" : "#000000");
  }, [theme]);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  // Memoize the Sparkles component to prevent re-rendering during typing animation
  const sparklesBackground = useMemo(
    () => (
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor={particleColor}
        />
      </div>
    ),
    [particleColor, theme.theme],
  ); // Empty dependency array means this only renders once

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      {sparklesBackground}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium animate-slide-down">
              Hi, I'm
            </h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
              {portfolioData.personal.name}
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              {text}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          {/* Bio */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-delay">
            {portfolioData.personal.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              onClick={() => scrollToSection("projects")}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 z-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group px-8 py-6 text-lg rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8 animate-fade-in-delay-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
