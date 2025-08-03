import { Code2 } from "lucide-react";
import ProjectsClient from "@/components/ProjectsClient";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="pt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 slide-up">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow-lg)] mb-6">
              <Code2 className="w-10 h-10 text-[var(--accent)]" />
            </div> */}
            <div className="space-y-4">
              <h1 className="heading-1">Projects 💻</h1>
              <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                A collection of projects from my GitHub repositories - from web
                apps to data science experiments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Component for Interactive Features */}
      <ProjectsClient projectsData={projectsData} />
    </div>
  );
}
