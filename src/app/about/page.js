import AboutClient from "@/components/AboutClient";

export default function About() {
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

  const socialMediaData = [
    {
      name: "Facebook",
      url: "https://facebook.com/rizkyyusfian",
      iconName: "Facebook",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/rizkyyusfian",
      iconName: "Instagram",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rizkyyusfian",
      iconName: "Twitter",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@rizkyyusfian",
      iconName: "Video",
    },
    {
      name: "Ko-fi",
      url: "https://ko-fi.com/rizkyyusfian",
      iconName: "Coffee",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-6 mb-12 slide-up">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)]">
              <User className="w-10 h-10 text-[var(--accent)]" />
            </div> */}
            <h1 className="heading-1 text-center">About Me 👤</h1>
            <p className="text-xl text-[var(--muted-foreground)] text-center max-w-2xl">
              A short story about who i am, what do i do, and what i love.
            </p>
          </div>
        </div>
      </section>

      {/* Client Component for Interactive Features */}
      <AboutClient
        skills={skills}
        education={education}
        experience={experience}
        publications={publications}
        socialMediaData={socialMediaData}
      />
    </div>
  );
}
