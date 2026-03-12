import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-[#0077B5]" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-[#FF0000]" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-[#1DA1F2]" },
];

const AboutKaroStartup = () => (
  <section className="section-padding bg-primary/5 relative overflow-hidden">
    <div className="container relative mx-auto px-4">
      <ScrollReveal className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent mb-8 border border-accent/20">
          <span>The Powerhouse</span>
        </div>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 leading-tight">
          Fueled by <span className="text-gradient">KaroStartup</span>
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
          India's leading platform for startup storytelling, empowering thousands of founders to share their vision and connect with a massive ecosystem of entrepreneurs and innovators.
        </p>
        
        <div className="flex items-center justify-center gap-6">
          {socials.map((s) => (
            <a 
              key={s.label} 
              href={s.href} 
              aria-label={s.label} 
              className={`w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary transition-all duration-300 hover:-translate-y-2 hover:text-white ${s.color} hover:border-transparent group shadow-xl`}
            >
              <s.icon size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutKaroStartup;
