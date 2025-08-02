"use client";

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

export default function About() {
  const theme = useTheme();
  const skills = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "HTML5",
          icon: "html5.svg",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          width: 32,
          height: 32,
        },
        {
          name: "CSS3",
          icon: "css.svg",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          width: 32,
          height: 32,
        },
        {
          name: "JavaScript",
          icon: "javascript.svg",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          width: 32,
          height: 32,
        },
        {
          name: "Bootstrap",
          icon: "bootstrap.svg",
          url: "https://getbootstrap.com",
          width: 32,
          height: 32,
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss.svg",
          url: "https://tailwindcss.com",
          width: 32,
          height: 32,
        },
        {
          name: "React",
          icon: "react.svg",
          url: "https://react.dev",
          width: 32,
          height: 32,
        },
        {
          name: "Next.js",
          icon: "nextdotjs.svg",
          url: "https://nextjs.org",
          width: 32,
          height: 32,
        },
      ],
    },
    {
      category: "Backend",
      technologies: [
        {
          name: "PHP",
          icon: "php.svg",
          url: "https://www.php.net",
          width: 32,
          height: 32,
        },
        {
          name: "Node.js",
          icon: "nodedotjs.svg",
          url: "https://nodejs.org",
          width: 32,
          height: 32,
        },
        {
          name: "Go",
          icon: "go.svg",
          url: "https://golang.org",
          width: 32,
          height: 32,
        },
        {
          name: "Laravel",
          icon: "laravel.svg",
          url: "https://laravel.com",
          width: 32,
          height: 32,
        },
        {
          name: "Code Igniter",
          icon: "codeigniter.svg",
          url: "https://codeigniter.com",
          width: 32,
          height: 32,
        },
        {
          name: "Express.js",
          icon: "express.svg",
          url: "https://expressjs.com",
          width: 32,
          height: 32,
        },
      ],
    },
    {
      category: "Database",
      technologies: [
        {
          name: "MySQL",
          icon: "mysql.svg",
          url: "https://www.mysql.com",
          width: 32,
          height: 32,
        },
        {
          name: "PostgreSQL",
          icon: "postgresql.svg",
          url: "https://www.postgresql.org",
          width: 32,
          height: 32,
        },
        {
          name: "SQLite",
          icon: "sqlite.svg",
          url: "https://www.sqlite.org",
          width: 64,
          height: 64,
        },
        {
          name: "MongoDB",
          icon: "mongodb.svg",
          url: "https://www.mongodb.com",
          width: 20,
          height: 20,
        },
        {
          name: "Prisma",
          icon: "prisma.svg",
          url: "https://www.prisma.io",
          width: 32,
          height: 32,
        },
        {
          name: "Supabase",
          icon: "supabase.svg",
          url: "https://supabase.com",
          width: 32,
          height: 32,
        },
        {
          name: "Railway",
          icon: "railway.svg",
          url: "https://railway.app",
          width: 32,
          height: 32,
        },
      ],
    },
    {
      category: "AI & Data Science",
      technologies: [
        {
          name: "Python",
          icon: "python.svg",
          url: "https://www.python.org",
          width: 32,
          height: 32,
        },
        {
          name: "TensorFlow",
          icon: "tensorflow.svg",
          url: "https://www.tensorflow.org",
          width: 32,
          height: 32,
        },
        {
          name: "PyTorch",
          icon: "pytorch.svg",
          url: "https://pytorch.org",
          width: 32,
          height: 32,
        },
        {
          name: "Jupyter",
          icon: "jupyter.svg",
          url: "https://jupyter.org",
          width: 32,
          height: 32,
        },
        {
          name: "PyTorch Geometric",
          icon: "pyg.svg",
          url: "https://pytorch-geometric.readthedocs.io",
          width: 32,
          height: 32,
        },
      ],
    },
    {
      category: "Tools",
      technologies: [
        {
          name: "Git",
          icon: "git.svg",
          url: "https://git-scm.com",
          width: 32,
          height: 32,
        },
        {
          name: "GitHub",
          icon: "github.svg",
          url: "https://github.com",
          width: 32,
          height: 32,
        },
        {
          name: "Vite",
          icon: "vite.svg",
          url: "https://vitejs.dev",
          width: 32,
          height: 32,
        },
        {
          name: "Docker",
          icon: "docker.svg",
          url: "https://www.docker.com",
          width: 32,
          height: 32,
        },
        {
          name: "Kubernetes",
          icon: "kubernetes.svg",
          url: "https://kubernetes.io",
          width: 32,
          height: 32,
        },
        {
          name: "Postman",
          icon: "postman.svg",
          url: "https://www.postman.com",
          width: 32,
          height: 32,
        },
      ],
    },
    {
      category: "Others",
      technologies: [
        {
          name: "Overleaf",
          icon: "overleaf.svg",
          url: "https://www.overleaf.com",
          width: 32,
          height: 32,
        },
        {
          name: "Figma",
          icon: "figma.svg",
          url: "https://www.figma.com",
          width: 28,
          height: 28,
        },
        {
          name: "Canva",
          icon: "canva.svg",
          url: "https://www.canva.com",
          width: 32,
          height: 32,
        },
      ],
    },
  ];

  const education = [
    {
      year: "2018-2022",
      title: "Bachelor's Degree",
      company: "Universitas Surabaya",
      description:
        "Informatics Engineering - Information Management and Enterprise Systems Program",
      gpa: "GPA: 3.52",
    },
    {
      year: "2023-2025",
      title: "Master's Degree",
      company: "Universitas Telkom, Bandung",
      description: "Master of Computing - Social Computing Program.",
      gpa: "GPA: 3.84",
    },
  ];

  const experience = [
    {
      year: "May - Sep 2023",
      title: "Fullstack Engineer Apprentice",
      company: "GoTo Impact Foundation",
      description:
        "Learning and working directly with professionals in the industry related to software engineering using the MERN Stack.",
    },
    {
      year: "Apr - Jul 2024",
      title: "IT Support Facilitator",
      company: "Digital Talent Scholarship x Google Career Certificates",
      description:
        "Providing mentorship, guiding participants through their online learning journey, and supporting certification completion.",
    },
    {
      year: "Jun - Dec 2024",
      title: "IT Support Facilitator",
      company: "Google Career Certificates x Telkom",
      description:
        "Providing mentorship, guiding participants through their online learning journey, and supporting certification completion.",
    },
    {
      year: "Jun 2025 - Current",
      title: "Civil Servant",
      company:
        "Regional Civil Service Agency of Sorong Regency, Papua Barat Daya",
      description:
        "Working as a civil servant in the Regional Civil Service Agency of Sorong Regency, focusing computer technician and IT support.",
    },
  ];

  const publications = [
    {
      title:
        "A Comparative Analysis of CNN and Vision Transformer Models for Smoker Identification",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10698664",
      keywords: ["Smoker", "Identification", "CNN", "Vision Transformer"],
    },
    {
      title:
        "Enhancing Drug-Target Affinity Prediction with Multi-scale Graph Attention Network",
      year: "2025",
      link: "https://journal.uad.ac.id/index.php/JITEKI/article/view/30425",
      keywords: [
        "Drug-target affinity",
        "Drug graph",
        "Protein sequences",
        "Graph attention network",
        "Attention mechanism",
      ],
    },
    {
      title:
        "Improving Drug-Target Affinity Prediction Using Dynamic Graph Attention Network",
      year: "2025",
      link: "https://inass.org/wp-content/uploads/2025/01/2025043036-2.pdf",
      keywords: [
        "Drug target affinity",
        "Drug graph",
        "Protein sequences",
        "Regression",
        "Dynamic graph attention network",
        "Attention mechanism",
      ],
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      url: "https://facebook.com/rizkyyusfian",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rizkyyusfian",
      icon: Instagram,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rizkyyusfian",
      icon: Twitter,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@rizkyyusfian",
      icon: Video,
    },
    {
      name: "Ko-fi",
      url: "https://ko-fi.com/rizkyyusfian",
      icon: Coffee,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section with Personal Story */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-6 mb-12 slide-up">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)]">
              <User className="w-10 h-10 text-[var(--accent)]" />
            </div> */}
            <h1 className="heading-1 text-center">About Me</h1>
            <p className="text-xl text-[var(--muted-foreground)] text-center max-w-2xl">
              A short story about who i am, what do i do, and what i love.
            </p>
          </div>
          <div className="grid lg:grid-cols-1 gap-12 items-start">
            {/* Personal Story with Image on Right */}
            <div className="card">
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
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-[var(--border)] flex-wrap mt-8">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="flex items-center mb-2">
              <CodeXml className="w-7 h-7 text-[var(--accent)] mr-3" />
              <h2 className="heading-2 text-left">Tech Stack</h2>
            </div>
            <p className="text-small text-[var(--muted-foreground)] mb-8">
              Here are some of the technologies and tools I work with.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <ShineBorder
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    shineColor={theme === "dark" ? "#60a5fa" : "#60a5fa"}
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
                      {skillGroup.technologies.map((tech, techIndex) => (
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
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="flex items-center mb-2">
              <School className="w-7 h-7 text-[var(--accent)] mr-3" />
              <h2 className="heading-2">Education</h2>
            </div>
            <p className="text-small text-[var(--muted-foreground)] mb-8">
              Here are my educational background.
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
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <BriefcaseBusiness className="w-7 h-7 text-[var(--accent)] mr-3" />
                <h2 className="heading-2">Experience</h2>
              </div>
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
            <p className="text-small text-[var(--muted-foreground)] mb-8">
              Here are my professional career journey.
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
        </div>
      </section>

      {/* Publications */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="flex items-center mb-2">
              <ScrollText className="w-7 h-7 text-[var(--accent)] mr-3" />
              <h2 className="heading-2">Publications</h2>
            </div>
            <p className="text-small text-[var(--muted-foreground)] mb-8">
              Here are some of my research publications and articles.
            </p>
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <ShineBorder
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    shineColor={theme === "dark" ? "#60a5fa" : "#60a5fa"}
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
                        {publication.keywords.map((keyword, keywordIndex) => (
                          <Badge key={keywordIndex} variant="default">
                            {keyword}
                          </Badge>
                        ))}
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
        </div>
      </section>

      {/* CTA Section */}
      {/* <section>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h2 className="heading-2 mb-4">Let&apos;s Connect</h2>
            <p className="text-large mb-8">
              Based in Sorong, Indonesia, I&apos;m always excited to collaborate
              on innovative projects, discuss AI/ML opportunities, or share
              knowledge about software engineering. Let&apos;s build something
              amazing together!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-primary">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
