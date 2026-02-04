import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div className="w-full max-w-2xl">
      <div className="glass-panel p-8 md:p-12 rounded-xl border border-glass-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>

        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-2xl">
              sensors
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
            Initialize Handshake
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Establish a secure connection for collaboration. All fields are
            encrypted end-to-end.
          </p>
        </div>

        {/* Form */}
        <form action="" className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                Identity
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-lg">
                    person
                  </span>
                </div>
                <input
                  className="glass-input w-full rounded pl-10 pr-3 py-3 text-sm placeholder-slate-600 focus:ring-0"
                  id="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                Contact Point
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-lg">
                    alternate_email
                  </span>
                </div>
                <input
                  className="glass-input w-full rounded pl-10 pr-3 py-3 text-sm placeholder-slate-600 focus:ring-0"
                  id="email"
                  placeholder="email@domain.com"
                  type="email"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="message"
              className="text-xs font-mono text-primary/80 uppercase tracking-wider flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Payload
            </label>
            <textarea
              className="glass-input w-full rounded px-4 py-3 text-sm placeholder-slate-600 focus:ring-0 resize-none font-mono"
              name="message"
              id="message"
              placeholder="Enter message sequence..."
              rows={5}
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            className="mt-4 w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 px-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group shadow-neon"
            type="submit"
          >
            <span className="tracking-widest text-sm">
              EXECUTE TRANSMISSION
            </span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">
              send
            </span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-glass-border flex flex-col gap-4">
          <p className="text-xs font-mono text-slate-500 text-center">
            OR CONNECT VIA PROTOCOLS
          </p>
          <div className="flex justify-center gap-6">
            <a
              aria-label="Github"
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              aria-label="Twitter"
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
