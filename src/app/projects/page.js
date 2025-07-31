"use client";

import Link from "next/link";
import { ExternalLink, Github, Code2, Calendar, Star } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js and PostgreSQL. Features include user authentication, payment integration, inventory management, and admin dashboard. Designed for scalability and performance.",
      longDescription:
        "This comprehensive e-commerce platform showcases modern web development practices with a focus on user experience and performance. Built with Next.js for the frontend and PostgreSQL for data persistence, it includes features like real-time inventory updates, secure payment processing, and an intuitive admin interface.",
      tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Stripe", "Prisma"],
      category: "Full-Stack",
      featured: true,
      year: "2024",
      status: "Completed",
      links: {
        demo: "https://ecommerce-demo.example.com",
        github: "https://github.com/username/ecommerce-platform",
        live: "https://shop.example.com",
      },
      image: "/images/projects/ecommerce.jpg",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application with drag-and-drop functionality, built with React and Node.js. Includes team collaboration features, real-time notifications, and project analytics.",
      longDescription:
        "A comprehensive task management solution designed for teams and individuals. Features include drag-and-drop task organization, real-time collaboration, time tracking, and detailed analytics to help teams stay productive.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "Full-Stack",
      featured: true,
      year: "2024",
      status: "Completed",
      links: {
        demo: "https://taskmanager-demo.example.com",
        github: "https://github.com/username/task-manager",
      },
      image: "/images/projects/taskmanager.jpg",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current conditions and forecasts. Built with React and integrates with multiple weather APIs for accurate data.",
      longDescription:
        "An intuitive weather dashboard that combines data from multiple sources to provide comprehensive weather information. Features include location-based weather, extended forecasts, and weather alerts.",
      tech: ["React", "TypeScript", "Chart.js", "Weather API"],
      category: "Frontend",
      featured: false,
      year: "2024",
      status: "Completed",
      links: {
        demo: "https://weather-dashboard.example.com",
        github: "https://github.com/username/weather-dashboard",
      },
      image: "/images/projects/weather.jpg",
    },
    {
      title: "API Gateway Service",
      description:
        "A high-performance API gateway built with Go. Handles request routing, authentication, rate limiting, and monitoring for microservices architecture.",
      longDescription:
        "A robust API gateway service designed to handle high-traffic microservices environments. Built with Go for optimal performance, it provides essential features like load balancing, circuit breakers, and comprehensive monitoring.",
      tech: ["Go", "Redis", "Docker", "Kubernetes", "Prometheus"],
      category: "Backend",
      featured: false,
      year: "2023",
      status: "Completed",
      links: {
        github: "https://github.com/username/api-gateway",
      },
      image: "/images/projects/api-gateway.jpg",
    },
    {
      title: "Blog CMS",
      description:
        "A headless CMS built with Laravel for content management. Features include markdown support, media management, and RESTful API for frontend consumption.",
      longDescription:
        "A flexible content management system designed for developers and content creators. Built with Laravel, it provides a clean admin interface and powerful API for building various frontend applications.",
      tech: ["Laravel", "PHP", "MySQL", "Vue.js", "Markdown"],
      category: "Backend",
      featured: false,
      year: "2023",
      status: "Completed",
      links: {
        demo: "https://cms-demo.example.com",
        github: "https://github.com/username/blog-cms",
      },
      image: "/images/projects/cms.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with Next.js and Tailwind CSS. Features dark mode, responsive design, and optimized performance.",
      longDescription:
        "This very website you&apos;re browsing! Built with modern web technologies to showcase my work and share my thoughts through the blog. Focuses on performance, accessibility, and clean design.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
      category: "Frontend",
      featured: false,
      year: "2024",
      status: "Ongoing",
      links: {
        live: "https://rizkyyusfian.com",
        github: "https://github.com/username/portfolio",
      },
      image: "/images/projects/portfolio.jpg",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, and group conversations. Built with React and Socket.io.",
      longDescription:
        "A feature-rich chat application that supports real-time messaging, file sharing, emoji reactions, and group conversations. Built with a focus on user experience and real-time performance.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "CloudStorage"],
      category: "Full-Stack",
      featured: false,
      year: "2023",
      status: "Completed",
      links: {
        demo: "https://chat-demo.example.com",
        github: "https://github.com/username/chat-app",
      },
      image: "/images/projects/chat.jpg",
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];
  const featuredProjects = projects.filter((project) => project.featured);
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <Code2 className="w-10 h-10 text-[var(--accent)]" />
            </div>
            <div className="space-y-4">
              <h1 className="heading-1">Projects</h1>
              <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                A collection of projects I&apos;ve built over the years. From
                full-stack applications to specialized tools, each project
                represents a learning journey and a solution to real-world
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-[var(--accent)]" />
              <h2 className="heading-2">Featured Projects</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <div key={index} className="card card-interactive group">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-md text-sm font-medium">
                            Featured
                          </span>
                          <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md text-sm">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="heading-3 group-hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {project.links.demo && (
                          <Link
                            href={project.links.demo}
                            className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                            aria-label="View demo"
                            target="_blank"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                        {project.links.github && (
                          <Link
                            href={project.links.github}
                            className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                            aria-label="View source"
                            target="_blank"
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-[var(--muted)] text-[var(--muted-foreground)] rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)] pt-4 border-t border-[var(--border)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Categories */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="space-y-6">
              <h2 className="heading-2">All Projects</h2>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                        : "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--muted)]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="card group">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md text-sm">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-md text-sm font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="heading-3 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <Link
                          href={project.links.demo}
                          className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                          aria-label="View demo"
                          target="_blank"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                      {project.links.live && (
                        <Link
                          href={project.links.live}
                          className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                          aria-label="View live site"
                          target="_blank"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                          aria-label="View source"
                          target="_blank"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-[var(--muted)] text-[var(--muted-foreground)] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)] pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <Github className="w-12 h-12 text-[var(--accent)] mx-auto mb-6" />
            <h2 className="heading-2 mb-4">More on GitHub</h2>
            <p className="text-large mb-8">
              Check out my GitHub profile for more projects, contributions, and
              code experiments.
            </p>
            <Link
              href="https://github.com/rizkyyusfian"
              className="btn-primary"
              target="_blank"
            >
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
