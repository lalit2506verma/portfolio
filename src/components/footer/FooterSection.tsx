import React from 'react'

const FooterSection:React.FC = () => {
  return (
    <footer className="mt-auto px-7 py-8 border-t border-glass-border glass-panel">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
        <p>© 2024 DEV/PORTFOLIO. All systems operational.</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-primary transition-colors" href="#">
            PRIVACY_PROTOCOL
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            TERMS_OF_SERVICE
          </a>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>API STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection