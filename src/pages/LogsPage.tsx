import BlogSection from "../components/log/BlogSection";
import Navbar from "../components/navbar/Navbar";

interface GitHubActivity {
  title: string;
  branch: string;
  timePassed: string;
}

const LogsPage = () => {
  const gitHubEvent: GitHubActivity[] = [
    {
      title: "Hotfix: API Rate Limiting",
      branch: "feat/middleware",
      timePassed: "2h ago",
    },
    {
      title: "Optimized DB queries",
      branch: "fix/performance",
      timePassed: "5h ago",
    },
    {
      title: "Updated documentation",
      branch: "docs/readme",
      timePassed: "1d ago",
    },
  ];
  return (
    <>
      <div className="relative z-10 flex flex-col grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar activeTab="Logs" />

        {/* Blog and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-36 gap-12 pb-20">
          <BlogSection />

          <div className="lg:col-span-5 flex flex-col mt-20">
            <div className="glass-panel p-6 rounded-xl border border-glass-border">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-mono text-sm text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg!">
                    code
                  </span>
                  Git Activity
                </h3>

                <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded border border-primmary/20">
                  master
                </span>
              </div>

              <div className="space-y-6 relative ml-1">
                <div className="absolute left-1 top-2 bottom-2 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent"></div>
                {gitHubEvent.map((gitEvent, idx) => (
                  <div key={ idx} className="relative pl-6 group">
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(19,91,236,0.8)] border border-background-dark z-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex flex-col ">
                      <span className="text-sm text-white font-medium group-hover:text-primary transition-colors">
                        {gitEvent.title}
                      </span>
                      <div className="flex items-center justify-between text-xs text-slate-500 font-mono mt-1">
                        <span>{gitEvent.branch}</span>
                        <span>{ gitEvent.timePassed }</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogsPage;
