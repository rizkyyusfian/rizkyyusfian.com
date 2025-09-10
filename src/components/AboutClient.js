"use client";

import { useState } from "react";
import {
  User,
  ArrowUpRight,
  File,
  Facebook,
  Instagram,
  Twitter,
  Video,
  Coffee,
  School,
  CodeXml,
  BriefcaseBusiness,
  ScrollText,
  CircleUserRound,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useTheme } from "@/components/ClientThemeProvider";

export default function AboutClient({
  skills,
  education,
  experience,
  publications,
  socialMediaData,
}) {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("techstack");

  // Tab configuration
  const tabs = [
    {
      id: "techstack",
      label: "Tech Stack",
      icon: CodeXml,
    },
    {
      id: "education",
      label: "Education",
      icon: School,
    },
    {
      id: "experience",
      label: "Experience",
      icon: BriefcaseBusiness,
    },
    {
      id: "publications",
      label: "Publications",
      icon: ScrollText,
    },
  ];

  // Define icons in the client component
  const iconMap = {
    Facebook,
    Instagram,
    Twitter,
    Video,
    Coffee,
  };

  // Map the social media data with icons
  const socialMedia = socialMediaData.map((social) => ({
    ...social,
    icon: iconMap[social.iconName],
  }));

  return (
    <>
      {/* Personal Story Section */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-12 items-start">
            {/* Personal Story with Image on Right */}
            <div className="">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left: Story */}
                <div className="flex-1 lg:flex-[3] space-y-6">
                  <div className="flex items-center mb-8">
                    <CircleUserRound className="w-7 h-7 text-[var(--accent)] mr-3" />
                    <h2 className="heading-2 text-left">
                      quick Intro about me.
                    </h2>
                  </div>
                  <p className="text-small text-[var(--muted-foreground)] text-justify">
                    Hello! I&apos;m Muhammad Rizky Yusfian Yusuf, but my friend
                    often call me Fian or Rizky. i enjoy build and explore
                    things that related to internet, software, and tech.
                  </p>
                  <p className="text-small text-[var(--muted-foreground)] text-justify">
                    I&apos;m a person with high curiosity and eagerness to learn
                    new things. My expertise includes software engineering, Data
                    Science, and AI/ML, with hands-on experience in both
                    frontend and backend development, as well as building
                    intelligent systems .when im not coding, you can find me
                    playing video games, watching movies, or just slacking of
                    browsing through the internet. creating solutions through
                    code.
                  </p>
                  <p className="text-small text-[var(--muted-foreground)] text-justify">
                    as for this Platform, It&apos;s a space for self-expression
                    and to share what I&apos;ve learned with the world. This
                    blog is my platform to share insights, experiences, and
                    discoveries from my journey as a software engineer. i aim to
                    inspire and connect with others through my content.
                  </p>
                </div>
                {/* Right: Image Placeholder */}
                <div className="w-full lg:w-auto lg:flex-[2] flex-shrink-0 flex items-center justify-center mt-16">
                  <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 border-2 border-dashed border-[var(--accent)]/30 rounded-xl">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                        <User className="w-8 h-8 text-[var(--accent)]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="heading-3 text-[var(--accent)]">
                          Image Placeholder
                        </h3>
                        <p className="text-[var(--muted-foreground)] text-sm">
                          Carousel images or Spotify profile card will be added
                          here
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-left">
                <p className="text-small text-[var(--muted-foreground)]">
                  Thank you for visiting, and I look forward to embarking on
                  this knowledge-sharing adventure.
                </p>
              </div>
              {/* Social Media Footer - Full Width */}
              {/* <div className="flex items-center justify-center gap-4 pt-6 border-t border-[var(--border)] flex-wrap mt-8">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </Link>
                  );
                })}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Sections */}
      <section>
        <div className="max-w-6xl mx-auto">
          {/* Single unified card containing tabs and content */}
          <div className=" relative">
            {/* Tab Navigation */}
            <div className="relative mb-8">
              {/* Background container with gradient border */}
              {/* <div className="relative p-4 bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent)]/5 to-[var(--accent)]/10 rounded-2xl border border-[var(--border)] shadow-[var(--shadow-lg)] backdrop-blur-sm"> */}
              <div className="flex flex-wrap gap-6 items-center justify-between">
                <div className="flex flex-wrap gap-6">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-4 px-6 py-3 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                          isActive
                            ? "bg-[var(--accent)] text-white shadow-[var(--shadow-xl)] scale-105"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--card)] hover:shadow-[var(--shadow-md)] hover:scale-105"
                        }`}
                      >
                        {/* Active tab background glow */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 rounded-xl" />
                        )}

                        {/* Hover effect background */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-[var(--accent)]/10 rounded-xl transition-all duration-300" />
                        )}

                        {/* Content */}
                        <div className="relative flex items-center gap-4">
                          <div
                            className={`relative ${
                              isActive ? "text-white" : "text-[var(--accent)]"
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            {isActive && (
                              <div className="absolute inset-0 bg-white/20 rounded-full blur-sm" />
                            )}
                          </div>
                          <span
                            className={`relative font-semibold text-sm ${
                              isActive ? "text-white" : ""
                            }`}
                          >
                            {tab.label}
                          </span>
                        </div>

                        {/* Active indicator
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/30 rounded-full" />
                      )} */}
                      </button>
                    );
                  })}
                </div>

                {/* Resume button on the right side */}
                <ShimmerButton
                  className="shadow-lg"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv.pdf";
                    link.download = "rizkyyusfian_cv.pdf";
                    link.click();
                  }}
                >
                  <File className="w-4 h-4 mr-2" />
                  Resume
                </ShimmerButton>
              </div>
              {/* </div> */}

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[var(--accent)]/20 rounded-full blur-sm" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[var(--accent)]/10 rounded-full blur-md" />
            </div>

            {/* Tab Content - directly inside the main card */}
            <div className="relative min-h-[500px]">
              {/* Content container with fade animation */}
              <div className="transition-all duration-500 ease-in-out">
                {/* Tech Stack Tab */}
                {activeTab === "techstack" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* <div className="flex items-center mb-2">
                      <CodeXml className="w-7 h-7 text-[var(--accent)] mr-3" />
                      <h2 className="heading-2 text-left">Tech Stack</h2>
                    </div> */}
                    <p className="text-small text-[var(--muted-foreground)] mb-8">
                      the tech stacks & tools that keep me fed 🍕.
                    </p>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                      {skills.map((skillGroup, index) => (
                        <Card
                          key={index}
                          className="relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                        >
                          <ShineBorder
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            shineColor={
                              theme === "dark" ? "#60a5fa" : "#60a5fa"
                            }
                            borderWidth={2}
                            duration={8}
                          />
                          <CardHeader className="text-center pb-4">
                            <CardTitle className="heading-3 text-[var(--accent)]">
                              {skillGroup.category}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                              {skillGroup.technologies.map(
                                (tech, techIndex) => (
                                  <Link
                                    key={techIndex}
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center gap-2 p-3 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 group/tech ${
                                      theme === "dark"
                                        ? ""
                                        : "bg-[var(--secondary)] hover:bg-[var(--secondary)]/80 text-[var(--secondary-foreground)]"
                                    }`}
                                    style={
                                      theme === "dark"
                                        ? {
                                            backgroundColor: "#374151",
                                            color: "#f3f4f6",
                                          }
                                        : {}
                                    }
                                  >
                                    <div className="relative w-8 h-8 flex items-center justify-center">
                                      <Image
                                        src={`/images/techstack/${tech.icon}`}
                                        alt={tech.name}
                                        width={tech.width}
                                        height={tech.height}
                                        className="group-hover/tech:scale-110 transition-transform duration-200"
                                      />
                                    </div>
                                    <span className="text-center text-xs leading-tight">
                                      {tech.name}
                                    </span>
                                  </Link>
                                )
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* <div className="flex items-center mb-2">
                      <School className="w-7 h-7 text-[var(--accent)] mr-3" />
                      <h2 className="heading-2">Education</h2>
                    </div> */}
                    <p className="text-small text-[var(--muted-foreground)] mb-8">
                      where i <span className="line-through">unlearned</span>{" "}
                      learned stuff (no cap 💯)
                    </p>
                    <div className="space-y-8">
                      {education.map((item, index) => (
                        <div key={index} className="flex gap-6 group">
                          <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] shadow-lg"></div>
                            {index < education.length - 1 && (
                              <div className="w-px h-16 bg-[var(--border)] mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="flex items-center gap-4 mb-2">
                              <span className="text-sm font-medium text-[var(--accent)] bg-[var(--secondary)] px-2 py-1 rounded">
                                {item.year}
                              </span>
                              <h3 className="heading-3">{item.title}</h3>
                            </div>
                            <p className="font-medium text-[var(--muted-foreground)] mb-2">
                              {item.company}
                            </p>
                            <p className="text-[var(--muted-foreground)] leading-relaxed mb-2">
                              {item.description}
                            </p>
                            <p className="text-sm font-medium text-[var(--accent)]">
                              {item.gpa}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience Tab */}
                {activeTab === "experience" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <p className="text-small text-[var(--muted-foreground)] mb-8">
                      my work grind timeline ✨ (basically where i&apos;ve been
                      hustling)
                    </p>
                    <div className="space-y-8">
                      {experience.map((item, index) => (
                        <div key={index} className="flex gap-6 group">
                          <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] shadow-lg"></div>
                            {index < experience.length - 1 && (
                              <div className="w-px h-16 bg-[var(--border)] mt-2"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="flex items-center gap-4 mb-2">
                              <span className="text-sm font-medium text-[var(--accent)] bg-[var(--secondary)] px-2 py-1 rounded">
                                {item.year}
                              </span>
                              <h3 className="heading-3">{item.title}</h3>
                            </div>
                            <p className="font-semibold text-[var(--foreground)] mb-2 text-lg">
                              {item.company}
                            </p>
                            <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Publications Tab */}
                {activeTab === "publications" && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* <div className="flex items-center mb-2">
                      <ScrollText className="w-7 h-7 text-[var(--accent)] mr-3" />
                      <h2 className="heading-2">Publications</h2>
                    </div> */}
                    <p className="text-small text-[var(--muted-foreground)] mb-8">
                      papers i wrote that somehow got published 📚.
                    </p>
                    <div className="space-y-6">
                      {publications.map((publication, index) => (
                        <Card
                          key={index}
                          className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                        >
                          <ShineBorder
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            shineColor={
                              theme === "dark" ? "#60a5fa" : "#60a5fa"
                            }
                            borderWidth={2}
                            duration={8}
                          />
                          <CardContent className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <CardTitle className="heading-3 mb-2">
                                {publication.title}
                              </CardTitle>
                              <p className="text-[var(--muted-foreground)] mb-3">
                                keywords:{" "}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {publication.keywords.map(
                                  (keyword, keywordIndex) => (
                                    <Badge key={keywordIndex} variant="default">
                                      {keyword}
                                    </Badge>
                                  )
                                )}
                              </div>
                            </div>
                            <span className="text-sm font-medium text-[var(--accent)] bg-[var(--background)] px-3 py-1 rounded-full border border-[var(--border)]">
                              {publication.year}
                            </span>
                          </CardContent>
                          <CardContent className="pt-0">
                            <Link
                              href={publication.link}
                              className="inline-flex items-center text-[var(--accent)] hover:underline font-medium"
                            >
                              Read Publication
                              <ArrowUpRight className="w-4 h-4 ml-1" />
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
