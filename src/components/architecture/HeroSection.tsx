const HeroSection: React.FC = () => {
  return (
    <section className="mt-36 mb-16">
      <div className="glass-panel p-8 md:p-12 rounded-2xl border border-glass-border relative overflow-hidden group">
        {/* RIGHT SIDE GRADIENT */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20  w-80 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-75"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 font-mono text-xs mb-6 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span>SYSTEM_INITIALIZED</span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Lalit Kumar Verma
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-primary neon-text">
                A Software Tinkerer
              </span>
            </h1>

            {/* description */}
            <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
              Backend Engineer specializing in high-throughput microservices,
              distributed data consistency, and cloud-native infrastructure.
              Building the backbone of modern applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded font-medium transition-all shadow-[0_0_15px_rgba(19,91,236,0.3)] hover:shadow-[0_0_25px_rgba(19,91,236,0.5)] flex items-center gap-2">
                <span>Execute Protocol</span>
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </button>

              <button className="border border-glass-border hover:bg-white/5 text-slate-300 px-6 py-3 rounded font-medium transition-all flex items-center gap-2">
                <span>View Source</span>
                <span className="material-symbols-outlined text-xs">code</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block w-full max-w-md">
            <div className="glass-panel rounded-lg border border-glass-border p-4 font-mono text-xs text-slate-400 leading-relaxed shadow-2xl">
              {/* terminal */}
              <div className="flex items-center gap-1 5 mb-4 border-b border-glass-border pb-2">
                {/* MAC action symbol */}
                <div className="flex size-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="flex size-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="flex size-3 rounded-full bg-green-500/20 border border-green-500/50" />

                <span className="ml-2 text-slate-500">server.java</span>
              </div>

              {/* Code Content */}
              <div className="space-y-1">
                <p>
                  <span className="text-primary">package</span> core;
                </p>

                <p className="h-2"></p>

                <p>
                  <span className="text-purple-400">public class</span>{" "}
                  <span className="text-blue-400">Application</span> {"{"}
                </p>

                <p className="pl-4">
                  <span className="text-slate-500">
                    // Bootstrap core services
                  </span>
                </p>

                <p className="pl-4">
                  <span className="text-purple-400/50">public static void</span>{" "}
                  <span className="text-blue-400/50">main</span>(String[] args){" "}
                  {"{"}
                </p>

                <p className="pl-8">
                  <span className="text-blue-400/50">SystemConfig</span> config ={" "}
                  <span className="text-purple-400/50">new</span>{" "}
                  <span className="text-yellow-400/50">SystemConfig</span>();
                </p>

                <p className="pl-8">
                  config.<span className="text-blue-400/50">setMode</span>(
                  <span className="text-green-400/50">"PRODUCTION"</span>);
                </p>

                <p className="pl-8">
                  config.<span className="text-blue-400/50">setUptime</span>(
                  <span className="text-green-400/50">"99.99%"</span>);
                </p>

                <p className="pl-8">
                  <span className="text-blue-400/50">SystemCore</span> system ={" "}
                  <span className="text-purple-400/50">new</span>{" "}
                  <span className="text-yellow-400/50">SystemCore</span>(config);
                </p>

                <p className="pl-8">
                  system.<span className="text-blue-400/50">connect</span>();
                </p>

                <p className="pl-8">
                  <span className="text-purple-400/50">new</span>{" "}
                  <span className="text-blue-400/50">Thread</span>(() -&gt; system.
                  <span className="text-blue-400/50">serveTraffic</span>
                  ()).start();
                </p>

                <p className="pl-4">{"}"}</p>
                <p>{"}"}</p>

                {/* Blinking cursor */}
                <div className="mt-2 h-4 w-2 bg-primary animate-pulse duration-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;