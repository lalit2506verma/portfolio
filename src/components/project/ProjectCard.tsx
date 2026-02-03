import React from "react";

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  status: string;
  statusLabel: string;
  statusColor: string;
  description: string;
  language: string;
  glowColor: string;
  architecture: string;
  link: string;
}
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusIndicator = () => {
    const statusConfig: Record<
      string,
      {
        color: string;
        shadow: string;
        textColor: string;
      }
    > = {
      deployed: {
        color: "bg-blue-500",
        shadow: "shadow-[0_0_8px_#3b82f6]",
        textColor: "text-blue-400",
      },
      completed: {
        color: "bg-green-500",
        shadow: "shadow-[0_0_8px_#22c55e]",
        textColor: "text-green-400",
      },
      working: {
        color: "bg-amber-500",
        shadow: "shadow-[0_0_8px_#f59e0b]",
        textColor: "text-amber-500",
      },
    };

    const config = statusConfig[project.status];
    return (
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${config.color} ${config.shadow}`}
        ></span>
        <span className={`text-xs font-mono ${config.textColor}`}>
          {project.statusLabel}
        </span>
      </div>
    );
  };

  return (
    <article className="glass-panel p-0 rounded-xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col h-full card-hover">
      {/* Card Header */}

      <div className="px-6 py-3 border-b border-glass-border bg-black/40 flex justify-between items-center">
        {getStatusIndicator()}
        <span className="text-xs font-mono text-slate-600">
          {" "}
          ID: {project.id}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col h-full relative z-10">
        <div
          className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-all pointer-events-none ${project.glowColor}`}
        ></div>

        {/* Title and Description */}

        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm tracking-tight leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Body */}
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-glass-border border-dashed">
            {/* Col1 */}
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                Architecture
              </span>
              <span className="text-sm text-slate-200">
                {project.architecture}
              </span>
            </div>

            {/* Col2 */}
            <div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                Language
              </span>
              <span className="text-sm text-slate-200">
                {project.language}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className={`px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono ${
                index == 0 ? 'text-primary/80' : 'text-slate-400'
              }`}>
                {tech}
              </span>
            ))}
          </div>

          {/* Github repo */}
          <a
            className="w-full group/btn flex items-center justify-between bg-black/40 hover:bg-primary/10 border border-glass-border hover:border-primary/50 rounded px-4 py-3 transition-all"
            href={project.link}
            target="_blank"
          >
            <span className="font-mono text-sm text-primary group-hover/btn:text-white transition-colors">
              <span className="mr-2 text-slate-500 select-none">
                &gt;
              </span>git view_source

              <span className="animate-pulse inline-block w-1.5 h-3 bg-primary ml-4 align-middle opacity-0 group-hover/btn:opacity-100">
              </span>
            </span>
            <span className="material-symbols-outlined text-sm! text-slate-500 group-hover/btn:text-white transition-colors">code</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
