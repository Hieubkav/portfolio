"use client";

import { useMemo, useState } from "react";
import ProjectCards from "@/components/ProjectsCard";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  link: string;
};

const tabs = ["Tất cả", "SaaS VietAdmin", "Laravel", "Công nghệ khác"];

export default function ProjectsTabs({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredProjects = useMemo(() => {
    if (activeTab === "Tất cả") {
      return projects;
    }

    return projects.filter((project) => project.category === activeTab);
  }, [activeTab, projects]);

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const count = tab === "Tất cả"
            ? projects.length
            : projects.filter((project) => project.category === tab).length;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeTab === tab
                  ? "border-blue-500 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white/80 text-slate-700 hover:border-blue-300 hover:text-blue-700"
              )}
            >
              {tab} ({count})
            </button>
          );
        })}
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {filteredProjects.map((project, index) => (
          <ProjectCards key={`${project.category}-${project.title}`} value={project} num={index} />
        ))}
      </div>
    </div>
  );
}
