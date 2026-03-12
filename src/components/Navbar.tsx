import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Startups", href: "#startups" },
    { label: "Investors", href: "#investors" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}>
          <a href="#" className="font-display text-2xl font-black text-primary flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs">KP</div>
            Karo<span className="text-gradient">Pitch</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
              >
                {link.label}
                <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <Button size="lg" className="btn-hover-effect rounded-xl px-6 bg-primary text-white hover:bg-primary/90 flex gap-2">
              Apply Now 
              <ArrowUpRight size={16} />
            </Button>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/5 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[-1] bg-background/95 backdrop-blur-xl pt-24 px-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-primary border-b border-primary/5 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="xl" className="mt-4 w-full rounded-2xl h-14 bg-primary text-white">
              Apply to Pitch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
