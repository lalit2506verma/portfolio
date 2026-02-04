import { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string,
  url: string,
  active?: boolean
}

interface HeaderProps {
  activeTab: string
}

const Navbar: React.FC<HeaderProps> = ({activeTab = 'Architecture'}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Architecture", url: "/", active: activeTab === "Architecture" },
    { label: "Projects", url: "/projects", active: activeTab === "Projects" },
    { label: "Logs", url: "/logs", active: activeTab === "Logs" },
    { label: "Contact", url: "/contact-me", active: activeTab === "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 nav-glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between ">
        {/* Logo and name */}

        <div className="flex items-center gap-2 lg:gap-3 group cursor-pointer">
          <div className="size-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-2xl text-primary transition-colors">
              terminal
            </span>
          </div>

          <h2 className="text-xl font-bold tracking-tight">
            &lt;LalitKumarVerma/&gt;
          </h2>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center md:gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className={`${item.active ? 'text-white hover:text-primary' : "text-slate-400 hover:text-primary"} transition-colors text-sm font-medium`}
              to={item.url}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Resume */}
        <button className="hidden md:flex items-center gap-2 px-5 py-2 ml-8 bg-white text-background-dark hover:bg-slate-200 transition-colors rounded text-sm font-bold">
          <span>Resume_v2.pdf</span>
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
                <Link
                  key={item.label}
                  to={item.url}
                  className={`${item.active ? 'text-white' : 'text-slate-400'} hover:text-primary transition-colors text-sm font-medium`}
                >
                  {item.label}
                </Link>
              ))}
              
              <button className="flex items-center gap-2 px-5 py-2 bg-white text-background-dark hover:bg-slate-200 transition-colors rounded text-sm font-bold justify-center">
                <span>Resume_v2.pdf</span>
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