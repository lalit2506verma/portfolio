import type React from "react";

interface Skill {
  name: string;
  level: "primary" | "secondary" | "tertiary";
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}
const SkillPanel: React.FC = () => {
  const skillsCategory: SkillCategory[] = [
    {
      title: "Languages",
      icon: "code",
      skills: [
        { name: "Java", level: "primary" },
        { name: "JavaScript (Node.js)", level: "secondary" },
        { name: "HTML/CSS", level: "secondary" },
        { name: "SQL", level: "tertiary" },
        { name: "Python", level: "tertiary" },
      ],
    },
    {
      title: "Frameworks and Cloud",
      icon: "cloud",
      skills: [
        { name: "Spring Boot", level: "primary" },
        { name: "React.js", level: "secondary" },
        { name: "Express.js", level: "secondary" },
        { name: "AWS S3", level: "secondary" },
        { name: "FastAPI", level: "tertiary" },
        { name: "AWS Lambda", level: "tertiary" },
      ],
    },
    {
      title: "Databases",
      icon: "database",
      skills: [
        { name: "MySQL", level: "primary" },
        { name: "MongoDB", level: "primary" },
        { name: "Redis", level: "secondary" },
        { name: "ElastiSearch", level: "tertiary" }
      ],
    },
  ];

  // ClassName based on skill level
  const getClassName = (level: string) => {
    switch (level) {
      case "primary":
        return 'px-4 py-2 rounded-md text-sm font-medium bg-primary/10 border border-primary/40 text-white shadow-[0_0_10px_rgba(19,91,236,0.15)] hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(19,91,236,0.3)] transition-all cursor-default';
      case "secondary":
        return "px-4 py-2 rounded-md text-sm font-medium bg-primary/5 border border-primary/30 text-slate-200 hover:border-primary/50 transition-all cursor-default";
      default:
        return "px-4 py-2 rounded-md text-sm font-medium bg-white/5 border border-glass-border text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-default";
    }
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-8">
      <div className="lg:sticky lg:top-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-glass-border pb-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              memory
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Installed Modules
            </h2>
          </div>

          <div className="text-mono text-xs text-slate-500">DEPENDENCIES</div>
        </div>

        <div className="flex flex-col gap-8">
          {skillsCategory.map((category, index) => (
            // Skill Cards
            <div
              key={index}
              className="glass-panel p-6 rounded-xl border border-glass-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-mono text-sm text-slate-500 uppercase tracking-wider">
                  {category.title}
                </h4>

                <span className="material-symbols-outlined text-sm! text-slate-600">
                  {category.icon}
                </span>
              </div>

              {/* Skills button */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={getClassName(skill.level)}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Status Card */}
          <div className="mt-4 p-6 rounded-xl border border-primary/50 relative overlow-hidden bg-linear-to-br from-primary/20 to-transparent">
            <div className="relative z-10">
              <h4 className="text-white font-bold text-lg mb-2">
                System Status
              </h4>
              <div className="flex items-center gap-2 mb-4">
                <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                <div className="text-xs text-green-400 font-mono tracking-wider">
                  OPTIMAL PERFORMANCE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">UPTIME</div>
                  <div className="text-xl font-mono text-white">99.8%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">PROJECTS</div>
                  <div className="text-xl font-mono text-white">4+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPanel;
