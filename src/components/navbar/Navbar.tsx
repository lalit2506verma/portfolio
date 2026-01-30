import { useState } from "react";

interface NavItem {
  label: string,
  url: string,
  active?: boolean
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Arhitecture", url: "/", active:true },
    { label: "Projects", url: "/projects" },
    { label: "Logs", url: "/logs" },
    { label: 'Contact', url: '#' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between ">
        {/* Logo and name */}

        <div className="flex items-center gap-2 lg:gap-3 group cursor-pointer">
          <div className="size-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover-primary/50 transition-colors">
            <span className="material-symbols-outlined text-2xl text-primary transition-colors">
              terminal
            </span>
          </div>

          <h2 className="text-xl font-bold tracking-tight">
            &lt;LalitKumarVerma/&gt;
          </h2>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex justify-items-center md:gap-8 lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`${item.active ? 'text-white hover:text-primary' : "text-slate-400 hover:text-primary"} transition-colors text-sm font-medium`}
              href={item.url}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Resume */}
        <button className="hidden md:flex items-center gap-2 px-5 py-2 ml-8 bg-white text-background-dark hover:bg-slate-200 transition-colors rounded text-sm font-bold">
          <span>Resume_V2.pdf</span>
          <span className="material-symbols-outlined">download</span>
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>

        {/* Mobile view - side menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background-dark border border-glass-border rounded-lg p-4 md:hidden mx-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={`${item.active ? 'text-white' : 'text-slate-400'} hover:text-primary transition-colors text-sm font-medium`}
                >
                  {item.label}
                </a>
              ))}
              
              <button className="flex items-center gap-2 px-5 py-2 bg-white text-background-dark hover:bg-slate-200 transition-colors rounded text-sm font-bold justify-center">
                <span>Resume_V2.pdf</span>
                <span className="material-symbols-outlined text-sm">download</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;