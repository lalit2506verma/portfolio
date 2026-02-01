interface Experience {
  id: string;
  title: string;
  company: string;
  isEducation: boolean;
  location: string;
  isCurrent: boolean;
  version: string;
  achievements: string[];
}
const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "HCL Technologies Ltd.",
      location: "Noida, India",
      isCurrent: true,
      isEducation: false,
      version: "v3.0.1",
      achievements: [
        "Architected a real-time event streaming pipeline processing 10k+ events/sec using Kafka and Go.",
        "Reduced database query latency by 45% through advanced PostgreSQL indexing and Redis caching layers.",
        "Led the migration of legacy monolith to microservices on Kubernetes.",
      ],
    },
    {
      id: "2",
      title: "Bachelor's Of Computer Application",
      company: "Amity University Online",
      location: "",
      isCurrent: false,
      isEducation: true,
      version: "v2.0.0",
      achievements: [
        "Architected a real-time event streaming pipeline processing 10k+ events/sec using Kafka and Go.",
        "Reduced database query latency by 45% through advanced PostgreSQL indexing and Redis caching layers.",
        "Led the migration of legacy monolith to microservices on Kubernetes.",
      ],
    },
    {
      id: "3",
      title: "HCL Techbee Scholar",
      company: "HCL Training & Staffing",
      location: "Noida, India",
      isEducation: false,
      isCurrent: false,
      version: "v1.0.0",
      achievements: [
        "Architected a real-time event streaming pipeline processing 10k+ events/sec using Kafka and Go.",
        "Reduced database query latency by 45% through advanced PostgreSQL indexing and Redis caching layers.",
        "Led the migration of legacy monolith to microservices on Kubernetes.",
      ],
    },
  ];
  return (
    <div className="lg:col-span-7 flex flex-col gap-8">
      <div className="flex items-center justify-between border-b-2 border-glass-border pb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            history
          </span>
          <h2 className="text-white text-2xl font-bold tracking-tight">
            Version History
          </h2>
        </div>

        <div className="font-mono text-xs text-slate-500">CHANGELOG.md</div>
      </div>

      {/* Timeline */}

      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:inset-y-0 before:left-2.75 sm:before:left-4.75 before:w-0.5 before:bg-glass-border">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* TimeLine Dots */}
            <span
              className={`absolute size-4 rounded-full border-2 top-6 -left-7.25 sm:-left-9.25 ${exp.isCurrent ? "border-primary bg-background-dark shadow-[0_0_10px_rgba(19,91,236,0.8)]" : "border-slate-600 bg-background-dark group-hover:border-primary transition-colors"} z-10`}
            ></span>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl border hover:border-primary! transition-all duration-300 group">
              {/* Title and Version */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>

                <span
                  className={`font-mono text-xs rounded-full border px-3 py-1 ${exp.isCurrent ? "text-primary bg-primary/10 border-primary/20" : "text-slate-400 bg-white/5 border-white/10"}`}
                >
                  {exp.version}
                  {exp.isCurrent && <span> (Current) </span>}
                </span>
              </div>

              {/* Company */}
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-mono">
                {exp.isEducation ? (
                  <span className="material-symbols-outlined text-sm!">
                    school
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-sm!">
                    apartment
                  </span>
                )}
                <span>{exp.company}</span>
                {exp.location && (
                  <>
                    <span className="text-slate-600">•</span>
                    <span>{exp.location}</span>
                  </>
                )}
              </div>

              {/* Achievements */}
              {exp.achievements.length > 1 ? (
                <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className={`material-symbols-outlined text-sm! mt-0 5 ${exp.isCurrent ? "text-primary" : "text-slate-600 group-hover:text-primary transition-colors"}`}
                      >
                        check_circle
                      </span>

                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400 text-sm">{exp.achievements[0]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
