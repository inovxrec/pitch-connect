import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-display text-lg font-bold text-background mb-3">
              Karo<span className="text-accent">Pitch</span>
            </h3>
            <p className="text-sm text-background/50">
              India's platform for early-stage founders to pitch to investors.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "How It Works", "Startups", "Investors"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-background/50 hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-3 uppercase tracking-wider">
              Get Started
            </h4>
            <ul className="space-y-2">
              {["Apply to Pitch", "Partner With Us", "Contact Us"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-background/50 hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-background mb-3 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/50 hover:text-accent hover:bg-background/20 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} KaroStartup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
