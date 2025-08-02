"use client";

import Logo from "../components/Logo";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Clock,
} from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Home() {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack web application built with Next.js and PostgreSQL. Features include user authentication, real-time data updates, and responsive design.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Task Management App",
      description:
        "A productivity application with drag-and-drop functionality, built with React and Node.js. Includes team collaboration features and real-time notifications.",
      tech: ["React", "Node.js", "Socket.io"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  const latestPosts = [
    {
      title:
        "Building Scalable React Applications: Best Practices and Patterns",
      excerpt:
        "Learn how to structure and organize your React applications for scalability, maintainability, and team collaboration.",
      date: "January 15, 2025",
      readTime: "5 min read",
      slug: "building-scalable-react-apps",
    },
    {
      title: "Next.js Performance Optimization: Tips and Tricks",
      excerpt:
        "Discover advanced techniques to optimize your Next.js applications for better performance and user experience.",
      date: "January 8, 2025",
      readTime: "7 min read",
      slug: "nextjs-performance-optimization",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* /* Left Content */}
            <div className="space-y-8 slide-up">
              <div className="space-y-4">
                <h1 className="heading-1 whitespace-nowrap">
                  <TypingAnimation as="span" className="inline">
                    Hey, I&apos;m &nbsp;
                  </TypingAnimation>
                  <TypingAnimation
                    as="span"
                    className="text-blue-400 inline"
                    delay={1200}
                  >
                    Rizky Yusfian &nbsp;
                  </TypingAnimation>
                  <span className="wave">
                    <TypingAnimation as="span" className="inline" delay={2400}>
                      👋🏻
                    </TypingAnimation>
                  </span>
                </h1>
                <p className="text-xl text-[var(--muted-foreground)] ">
                  Welcome to my digital space 🚀.
                </p>
              </div>

              <p className="text-large max-w-lg">
                Hey there, I&apos;m a software engineer from Indonesia. I mostly
                using PHP, JS, and GO in my projects. When I&apos;m not immersed
                in my code, you&apos;ll find me exploring movies, music, books,
                and gaming.
              </p>

              <div className="flex gap-4 pt-4">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Projects
                </Link>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] slide-up">
                <Logo
                  width={300}
                  height={300}
                  priority={true}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-2 mb-6">About Me</h2>
            <div className="space-y-4">
              <p className="text-large">
                I&apos;m a software engineer based in Indonesia with a passion
                for creating elegant, efficient, and user-friendly web
                applications. I specialize in modern JavaScript frameworks,
                particularly React and Next.js, along with backend technologies
                like Node.js and Laravel.
              </p>
              <p className="text-large">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through writing and mentoring.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent)]/80 font-medium transition-colors"
                >
                  Learn more about me
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Projects */}
      {/* <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="heading-2 mb-2">Featured Projects</h2>
                <p className="text-large">
                  Here are some of the projects I&apos;ve been working on
                  recently.
                </p>
              </div>
              <Link
                href="/projects"
                className="btn-secondary hidden sm:inline-flex"
              >
                View All
              </Link>
            </div>

            <div className="grid gap-6">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="heading-3 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Link
                        href={project.links.demo}
                        className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <Link
                        href={project.links.github}
                        className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                        aria-label="View source"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/projects" className="btn-secondary">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Latest Blog Posts */}
      {/* <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="heading-2 mb-2">Latest Articles</h2>
                <p className="text-large">
                  Thoughts, tutorials, and insights from my development journey.
                </p>
              </div>
              <Link
                href="/blog"
                className="btn-secondary hidden sm:inline-flex"
              >
                View All
              </Link>
            </div>

            <div className="space-y-6">
              {latestPosts.map((post, index) => (
                <article
                  key={index}
                  className="group pb-6 border-b border-[var(--border)] last:border-b-0 last:pb-0"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="heading-3 mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/blog" className="btn-secondary">
                Read All Articles
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      {/* <section>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h2 className="heading-2 mb-4">Let&apos;s Work Together</h2>
            <p className="text-large mb-8">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s connect and discuss how we can bring your
              ideas to life.
            </p>
            <Link href="/contact" className="btn-accent">
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
