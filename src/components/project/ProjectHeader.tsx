import React from "react";

const ProjectHeader = () => {
  return (
    <>
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Deployment Records
          </h1>
          <p className="text-slate-400 font-mono text-sm max-w-2xl">
            Active full-Stack projects currently running in production
            environments.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono px-4 py-2 text-slate-500 bg-black/60 rounded border border-glass-border">
          <span className="flex items-center gap-2">
            NODES: <span className="text-white">4</span>
          </span>
          <span className="w-0.5 h-4 bg-glass-border"></span>

          <span className="flex items-center gap-2 text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex rounded-full h-full w-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-green-500 rounded-full"></span>
            </span>
            SYS_ONLINE
          </span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <button className="bg-primary/10 border border-primary/40 text-primary px-3 py-1.5 rounded text-xs font-mono hover:bg-primary/20 transition-colors whitespace-nowrap">ALL_SYSTEMS</button>
        <button className="bg-black/40 border border-glass-border text-slate-400 px-3 py-1.5 rounded text-xs font-mono hover:border-slate-500 hover:text-white transition-colors whitespace-nowrap">CLOUD</button>
        <button className="bg-black/40 border border-glass-border text-slate-400 px-3 py-1.5 rounded text-xs font-mono hover:border-slate-500 hover:text-white transition-colors whitespace-nowrap">FINTECH</button>
      </div>
    </>
  );
};

export default ProjectHeader;
