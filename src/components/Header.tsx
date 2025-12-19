import { Home } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Services", href: "#services" },
    { name: "About / Projects", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Home className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-xl">
              Real<span className="text-accent">Trust</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  link.active
                    ? "text-accent"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 bg-accent text-accent-foreground rounded-lg font-medium text-sm shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
