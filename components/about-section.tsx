"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "./ui/card";
import { portfolioData } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import { BentoCard, BentoGrid, BentoComponent } from "./ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { GridComponent } from "./grid-component";

export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [leetcodeData, setLeetcodeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeetcodeData = async () => {
    try {
      const res = await fetch("/api/fetch-leetcode?username=daemon777");
      const data = await res.json();
      const totalQuestions = data?.totalQuestions || 3821;
      const totalSolved = data?.totalSolved || 1068;
      const easySolved = data?.easySolved || 366;
      const mediumSolved = data?.mediumSolved || 550;
      const hardSolved = data?.hardSolved || 182;
      const totalEasy = data?.totalEasy || 650;
      const totalMedium = data?.totalMedium || 1150;
      const totalHard = data?.totalHard || 580;
      setLeetcodeData({
        totalQuestions,
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        totalEasy,
        totalMedium,
        totalHard,
      });
    } catch (error) {
      console.error("Error fetching LeetCode data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeetcodeData();
  }, []);

  const features = [
    {
      Icon: FileTextIcon,
      name: "Summary",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-100" />,
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
      GridComponent: (
        <GridComponent
          name="Summary"
          type="summary"
          content={portfolioData.about.description}
          className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
        />
      ),
    },
    {
      Icon: FileTextIcon,
      name: "Socials",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
      GridComponent: (
        <GridComponent
          name="Socials"
          type="socials"
          content={portfolioData.socials}
          className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
        />
      ),
    },
    {
      Icon: FileTextIcon,
      name: "Education",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4",
      GridComponent: (
        <GridComponent
          name="Education"
          type="education"
          content={portfolioData.education}
          className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
        />
      ),
    },
    {
      Icon: FileTextIcon,
      name: "Photo",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      GridComponent: (
      <GridComponent 
      name="Photo" 
      type="photo" 
      content=""
      className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
      />),
    },
    {
      Icon: FileTextIcon,
      name: "Experience",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-2",
      GridComponent: (
        <GridComponent
          name="Experience"
          type="experience"
          content={portfolioData.experience}
          className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
        />
      ),
    },
    {
      Icon: FileTextIcon,
      name: "Skills",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-4",
      GridComponent: (
        <GridComponent
          name="Skills"
          type="skills"
          content={portfolioData.skills}
          className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
        />
      ),
    },
    {
      Icon: FileTextIcon,
      name: "Leetcode",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -top-20 -right-20 opacity-60" />,
      className: "lg:row-start-4 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      GridComponent: (
        <GridComponent
          name="Leetcode"
          type="leetcode"
          content={leetcodeData}
          className=" w-full scale-95 border-none transition-all duration-300 ease-out group-hover:scale-100"
        />
      ),
    },
  ];
  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoComponent key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          {/* <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                      {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {portfolioData.about.description}
                </p>
              </Card>

              <div className="space-y-3">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <Card className="p-4 text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Years Exp
                  </div>
                </Card>
                <Card className="p-4 text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Projects
                  </div>
                </Card>
                <Card className="p-4 text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-pink-600">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Dedicated
                  </div>
                </Card>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
