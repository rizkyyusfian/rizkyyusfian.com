import ContactClient from "@/components/ContactClient";

export default function Contact() {
  const socialLinksData = [
    {
      name: "Instagram",
      href: "https://instagram.com/rizkyyusfian",
      iconName: "Instagram",
      description: "Follow my daily updates and behind-the-scenes",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rizkyyusfian",
      iconName: "Twitter",
      description: "Follow me for tech updates and thoughts",
    },
    {
      name: "GitHub",
      href: "https://github.com/rizkyyusfian",
      iconName: "Github",
      description: "Check out my code and open source projects",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/rizkyyusfian",
      iconName: "Linkedin",
      description: "Connect with me professionally",
    },
  ];

  const contactInfoData = [
    {
      iconName: "Mail",
      label: "Email",
      value: "rizky.yusfian16@gmail.com",
      href: "mailto:rizky.yusfian16@gmail.com",
    },
    {
      iconName: "MapPin",
      label: "Location",
      value: "Sorong, Indonesia",
      href: null,
    },
  ];

  const services = [
    "Full-Stack Web Development",
    "Backend API Development",
    "React & Next.js Applications",
    "PHP, Laravel, CodeIgniter Applications",
    "Database Design & Optimization",
    "AI/ML Models Development",
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
              <h1 className="heading-1">Let&apos;s get in touch 📫</h1>
              <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? I&apos;d love
                to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Component for Interactive Features */}
      <ContactClient
        socialLinksData={socialLinksData}
        contactInfoData={contactInfoData}
        services={services}
      />
    </div>
  );
}
