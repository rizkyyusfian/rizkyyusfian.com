"use client";

import {
  Mail,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  CodeXml,
  Instagram,
  MessageCircle,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useTheme } from "@/components/ClientThemeProvider";

export default function ContactClient({
  socialLinksData,
  contactInfoData,
  services,
}) {
  const theme = useTheme();

  // Define icons in the client component
  const iconMap = {
    Instagram,
    Twitter,
    Github,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Gamepad2,
  };

  // Map the data with icons
  const socialLinks = socialLinksData.map((link) => ({
    ...link,
    icon: iconMap[link.iconName],
  }));

  const contactInfo = contactInfoData.map((info) => ({
    ...info,
    icon: iconMap[info.iconName],
  }));

  return (
    <>
      {/* Contact Methods and Social Links Combined */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-7 h-7 text-[var(--accent)] mr-3" />
            <h2 className="heading-2">Get In Touch</h2>
          </div>
          <p className="text-large mb-8">
            Feel free to reach out through any of these channels!
          </p>

          {/* Contact Information */}
          <div className="mb-8">
            {/* <h3 className="heading-3 mb-4">Contact Information</h3> */}
            <div className="grid gap-4 md:grid-cols-2">
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
                      <h4 className="font-semibold mb-1">{info.label}</h4>
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

          {/* Social Links */}
          <div>
            {/* <h3 className="heading-3 mb-4">Connect With Me</h3> */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="group relative p-4 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
                >
                  <ShineBorder
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    shineColor={theme === "dark" ? "#60a5fa" : "#60a5fa"}
                    borderWidth={2}
                    duration={8}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] group-hover:scale-110 transition-transform">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
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

      {/* Services */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <CodeXml className="w-7 h-7 text-[var(--accent)] mr-3" />
            <h2 className="heading-2">Services I Offer</h2>
          </div>
          <p className="text-large mb-8">
            Here are some of the services I provide to help bring your ideas to
            life.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-[var(--secondary)] hover:bg-[var(--muted)] transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0"></div>
                <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
