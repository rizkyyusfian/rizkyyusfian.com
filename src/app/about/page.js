"use client";

import { User, Code2, Heart, Coffee } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "PHP",
        "Laravel",
        "Go",
        "Express.js",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "Linux", "VS Code", "Postman", "Figma"],
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Senior Software Engineer",
      company: "Tech Company",
      description:
        "Leading full-stack development projects and mentoring junior developers.",
    },
    {
      year: "2023",
      title: "Software Engineer",
      company: "Startup",
      description:
        "Developed scalable web applications using React, Node.js, and Laravel.",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description:
        "Built responsive websites and web applications for various clients.",
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "Local Company",
      description:
        "Started my professional journey learning modern web development.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <User className="w-10 h-10 text-[var(--accent)]" />
            </div>
            <div className="space-y-4">
              <h1 className="heading-1">About Me</h1>
              <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                Get to know more about my journey, skills, and what drives me as
                a software engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-2 mb-6">My Story</h2>
            <div className="space-y-6">
              <p className="text-large">
                Hello! I&apos;m Rizky Yusfian, a passionate software engineer
                based in Indonesia. My journey into the world of programming
                started during my university years when I first discovered the
                magic of turning ideas into functional applications.
              </p>
              <p className="text-large">
                What began as curiosity quickly evolved into a deep passion for
                creating digital solutions that make a difference. I specialize
                in full-stack web development, with expertise in modern
                JavaScript frameworks like React and Next.js, backend
                technologies including Node.js and Laravel, and emerging
                languages like Go.
              </p>
              <p className="text-large">
                When I&apos;m not immersed in code, you&apos;ll find me
                exploring the latest tech trends, contributing to open-source
                projects, or enjoying movies, music, books, and gaming. I
                believe in continuous learning and sharing knowledge with the
                developer community.
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[var(--accent)]" />
                  <span className="font-medium">Clean Code Advocate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[var(--accent)]" />
                  <span className="font-medium">Open Source Contributor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-[var(--accent)]" />
                  <span className="font-medium">Coffee Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-2 mb-8">Skills & Technologies</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="heading-3 text-[var(--accent)]">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-3 py-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-2 mb-8">Career Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] shadow-lg"></div>
                    {index < timeline.length - 1 && (
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
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-2 mb-8">Fun Facts About Me</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="heading-3">🎬 Entertainment</h3>
                <p className="text-[var(--muted-foreground)]">
                  I&apos;m a huge fan of sci-fi movies and series. From Marvel
                  to complex narratives like Inception, I love stories that make
                  you think.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="heading-3">🎵 Music</h3>
                <p className="text-[var(--muted-foreground)]">
                  My coding sessions are powered by everything from lo-fi beats
                  to progressive rock. Music helps me stay in the flow.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="heading-3">📚 Reading</h3>
                <p className="text-[var(--muted-foreground)]">
                  Always learning through technical books, programming blogs,
                  and the occasional fantasy novel for a mental break.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="heading-3">🎮 Gaming</h3>
                <p className="text-[var(--muted-foreground)]">
                  Gaming isn&apos;t just entertainment for me—it&apos;s also
                  inspiration for UI/UX design and understanding user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h2 className="heading-2 mb-4">Let&apos;s Connect</h2>
            <p className="text-large mb-8">
              Interested in working together or just want to say hi? I&apos;d
              love to hear from you!
            </p>
            <div className="flex gap-4 justify-center">
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
      </section>
    </div>
  );
}
