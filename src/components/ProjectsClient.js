"use client";

import Link from "next/link";
import {
  ExternalLink,
  Github,
  Code2,
  Calendar,
  Star,
  GitFork,
  Eye,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { useTheme } from "@/components/ClientThemeProvider";

// Language to category mapping
const getLanguageCategory = (language) => {
  const frontendLanguages = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Vue",
    "React",
  ];
  const backendLanguages = [
    "Go",
    "PHP",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "Rust",
  ];
  const dataLanguages = ["Jupyter Notebook", "Python", "R", "SQL"];
  const mobileLanguages = ["Swift", "Kotlin", "Dart", "React Native"];

  if (!language) return "Other";
  if (frontendLanguages.includes(language)) return "Frontend";
  if (backendLanguages.includes(language)) return "Backend";
  if (dataLanguages.includes(language)) return "Data Science";
  if (mobileLanguages.includes(language)) return "Mobile";
  return "Other";
};

export default function ProjectsClient({ projectsData }) {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectsData = () => {
      try {
        setLoading(true);

        // Use the passed projects data
        const staticProjects = projectsData.projects.map((project) => ({
          title: project.title,
          description: project.description,
          tech: project.tech,
          category: project.category,
          year: project.year,
          status: project.status || "Completed", // Default status if not provided
          links: project.links,
          stats: project.stats,
          topics: project.topics || [], // Default empty array if topics not provided
        }));

        setProjects(staticProjects);
      } catch (err) {
        console.error("Error loading projects data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjectsData();
  }, [projectsData]);

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Fullstack",
    "Data Science",
    "Mobile",
    "Other",
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  if (loading) {
    return (
      <section>
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Loading projects...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            <p className="text-xl text-red-500 max-w-2xl mx-auto">
              Error loading projects: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Filter Categories */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="card">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="heading-2">All Projects</h2>
                <Badge variant="outline">
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1 ? "project" : "projects"}
                </Badge>
              </div>
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
                    <span className="ml-2 text-xs opacity-70">
                      (
                      {category === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === category)
                            .length}
                      )
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group relative">
                <Card className="relative h-full bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] shadow-[var(--shadow-lg)] transition-all duration-300 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 overflow-hidden">
                  <ShineBorder
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    shineColor={theme === "dark" ? "#60a5fa" : "#60a5fa"}
                    borderWidth={2}
                    duration={8}
                  />
                  <CardContent className="pt-2 pb-2 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary">{project.category}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {project.links.live && (
                          <Link
                            href={project.links.live}
                            className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-lg hover:bg-[var(--muted)]"
                            aria-label="View live site"
                            target="_blank"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </Link>
                        )}
                        <Link
                          href={project.links.github}
                          className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-lg hover:bg-[var(--muted)]"
                          aria-label="View source"
                          target="_blank"
                        >
                          <Github className="w-6 h-6" />
                        </Link>
                      </div>
                    </div>

                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {project.description}
                    </p>

                    {project.tech.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)] pt-4 border-t border-[var(--border)]">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        {project.stats.stars > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                        {project.stats.forks > 0 && (
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{project.stats.forks}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-xs">
                            {new Date(
                              project.stats.lastUpdated
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      {/* <section>
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <Github className="w-12 h-12 text-[var(--accent)] mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">More on GitHub</h2>
            <p className="text-lg text-[var(--muted-foreground)] mb-8">
              Explore my complete GitHub profile for more projects,
              contributions, and code experiments. You&apos;ll find additional
              repositories and collaborative work.
            </p>
            <Link
              href="https://github.com/rizkyyusfian"
              className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-[var(--accent-foreground)] rounded-lg font-medium hover:opacity-90 transition-opacity"
              target="_blank"
            >
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
