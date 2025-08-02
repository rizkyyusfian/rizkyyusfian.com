import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rizkyyusfian",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/xxmryyx",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rizkyyusfian",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:rizkyyusfian16@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6 py-12 max-md:px-4 max-md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-[var(--muted-foreground)] text-sm">
            © {currentYear} MRYY. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-200"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Navigation Links */}
          {/* <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Terms
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
