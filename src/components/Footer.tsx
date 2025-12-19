import { useState } from "react";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const navLinks = ["Home", "Services", "Projects", "Testimonials", "Contact"];
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/50 text-sm">
                Subscribe to:
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="h-10 pl-28 pr-4 w-64 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-6 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/60">
              All Rights Reserved 2024
            </p>

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors">
                <Home className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg">
                Real<span className="text-accent">Trust</span>
              </span>
            </a>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
