import { Instagram, Linkedin, Youtube, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#" className="font-display text-4xl font-black text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary text-sm">KP</div>
              Karo<span className="text-accent">Pitch</span>
            </a>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              India's premier high-impact platform for early-stage founders to connect with elite capital.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-8 uppercase tracking-[0.2em] text-accent">
              Platform
            </h4>
            <ul className="space-y-4">
              {["About KaroPitch", "Success Stories", "Featured Startups", "Investor Network"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-lg text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-8 uppercase tracking-[0.2em] text-accent">
              Resources
            </h4>
            <ul className="space-y-4">
              {["Apply to Pitch", "Partner With Us", "Pitch Deck Guide", "FAQ"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-lg text-white/50 hover:text-white transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-white mb-8 uppercase tracking-[0.2em] text-accent">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent border border-white/10">
                  <Mail size={18} />
                </div>
                <span className="text-lg font-medium">hello@karostartup.com</span>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent border border-white/10">
                  <MapPin size={18} />
                </div>
                <span className="text-lg font-medium">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 font-medium">
            © {new Date().getFullYear()} KaroStartup Platform — All Rights Reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
