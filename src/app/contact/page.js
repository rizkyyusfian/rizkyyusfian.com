"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rizkyyusfian",
      icon: Github,
      description: "Check out my code and projects",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rizkyyusfian",
      icon: Linkedin,
      description: "Connect with me professionally",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rizkyyusfian",
      icon: Twitter,
      description: "Follow me for tech updates",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@rizkyyusfian.com",
      href: "mailto:hello@rizkyyusfian.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Usually within 24 hours",
      href: null,
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 slide-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <MessageSquare className="w-10 h-10 text-[var(--accent)]" />
            </div>
            <div className="space-y-4">
              <h1 className="heading-1">Get In Touch</h1>
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
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-3 mb-2">{info.label}</h3>
                {info.href ? (
                  <Link
                    href={info.href}
                    className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <p className="text-[var(--muted-foreground)]">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="card">
              <h2 className="heading-2 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--secondary)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-lg">
                    Thanks for your message! I&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-lg">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="card">
                <h3 className="heading-3 mb-4">Why Work With Me?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-1">Full-Stack Expertise</h4>
                      <p className="text-[var(--muted-foreground)] text-sm">
                        From frontend to backend, I can handle your entire
                        project with modern technologies.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-1">Quality Focus</h4>
                      <p className="text-[var(--muted-foreground)] text-sm">
                        I believe in writing clean, maintainable code and
                        delivering high-quality solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-1">
                        Collaborative Approach
                      </h4>
                      <p className="text-[var(--muted-foreground)] text-sm">
                        I work closely with clients to understand their needs
                        and deliver solutions that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-4">Services I Offer</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                    <span className="text-[var(--muted-foreground)]">
                      Full-Stack Web Development
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                    <span className="text-[var(--muted-foreground)]">
                      React & Next.js Applications
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                    <span className="text-[var(--muted-foreground)]">
                      Backend API Development
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                    <span className="text-[var(--muted-foreground)]">
                      Database Design & Optimization
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                    <span className="text-[var(--muted-foreground)]">
                      Code Review & Consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>
                    <span className="text-[var(--muted-foreground)]">
                      Performance Optimization
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-[var(--accent)]" />
                      <div>
                        <div className="font-medium group-hover:text-[var(--accent)] transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-[var(--muted-foreground)]">
                          {social.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="heading-2 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="heading-3">
                  What&apos;s your typical response time?
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  I usually respond to emails within 24 hours, often sooner. For
                  urgent matters, please mention it in the subject line.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="heading-3">
                  Do you work on freelance projects?
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  Yes! I&apos;m available for freelance work and consulting.
                  Let&apos;s discuss your project requirements.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="heading-3">
                  What technologies do you specialize in?
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  I specialize in React, Next.js, Node.js, Laravel, Go, and
                  modern web technologies. Check out my projects page for
                  examples.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="heading-3">
                  Can you help with existing projects?
                </h3>
                <p className="text-[var(--muted-foreground)]">
                  Absolutely! I can help with code reviews, performance
                  optimization, feature additions, and maintenance of existing
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
