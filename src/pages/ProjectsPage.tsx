import type React from "react";
import Navbar from "../components/navbar/Navbar";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectGrid from "../components/project/ProjectGrid";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar */}
        <Navbar activeTab="Projects" />

        <div className="flex flex-col gap-8 pb-20 mt-32 mb-16">
          <ProjectHeader />
          <ProjectGrid />

          <div className="mt-12 flex justify-center">
            <a className="group flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold text-white transition-all hover:bg-white/10 hover:px-10 cursor-pointer">
              View All Projects
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage