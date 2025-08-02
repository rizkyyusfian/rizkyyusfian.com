"use client";

import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  Instagram,
  CodeXml,
  Mailbox,
} from "lucide-react";
import Link from "next/link";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useTheme } from "@/components/ClientThemeProvider";

export default function Contact() {
  const theme = useTheme();
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/rizkyyusfian",
      icon: Instagram,
      description: "Follow my daily updates and behind-the-scenes",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rizkyyusfian",
      icon: Twitter,
      description: "Follow me for tech updates and thoughts",
    },
    {
      name: "GitHub",
      href: "https://github.com/rizkyyusfian",
      icon: Github,
      description: "Check out my code and open source projects",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rizkyyusfian",
      icon: Linkedin,
      description: "Connect with me professionally",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rizky.yusfian16@gmail.com",
      href: "mailto:rizky.yusfian16@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sorong, Indonesia",
      href: null,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 slide-up">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <MessageSquare className="w-10 h-10 text-[var(--accent)]" />
            </div> */}
            <div className="space-y-4">
              <h1 className="heading-1">Let&apos;s get in touch</h1>
              <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? I&apos;d love
                to hear from you. Let&apos;s discuss how we can work together to
                bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center mb-6">
              <Mail className="w-7 h-7 text-[var(--accent)] mr-3" />
              <h2 className="heading-2">Contact Information</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
                >
                  <ShineBorder
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    shineColor={theme === "dark" ? "#60a5fa" : "#60a5fa"}
                    borderWidth={2}
                    duration={8}
                  />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)]">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-1">{info.label}</h3>
                      {info.href ? (
                        <Link
                          href={info.href}
                          className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-[var(--muted-foreground)]">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center mb-6">
              <CodeXml className="w-7 h-7 text-[var(--accent)] mr-3" />
              <h2 className="heading-2">Services I Offer</h2>
            </div>
            <p className="text-large mb-8">
              Here are some of the services I provide to help bring your ideas
              to life.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  Full-Stack Web Development
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  Backend API Development
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  React & Next.js Applications
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  PHP, Laravel, CodeIgniter Applications
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  Database Design & Optimization
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  AI/ML Models Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-7 h-7 text-[var(--accent)] mr-3" />
              <h2 className="heading-2">Connect With Me</h2>
            </div>
            <p className="text-large mb-8">
              Let&apos;s connect on social media and stay in touch!
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
                >
                  <ShineBorder
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    shineColor={theme === "dark" ? "#60a5fa" : "#60a5fa"}
                    borderWidth={2}
                    duration={8}
                  />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] group-hover:scale-110 transition-transform">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="heading-3 group-hover:text-[var(--accent)] transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-sm">
                        {social.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
