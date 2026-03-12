import { ShoppingBag, Users, Factory, Monitor, Cog, MapPin, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { 
    icon: ShoppingBag, 
    label: "D2C Brands", 
    desc: "Scale your product directly to millions of Indian consumers.",
    className: "lg:col-span-2 lg:row-span-1",
    bg: "bg-blue-500/10",
    color: "text-blue-500"
  },
  { 
    icon: Users, 
    label: "Consumer Tech", 
    desc: "Solving massive pain points.",
    className: "lg:col-span-1 lg:row-span-1",
    bg: "bg-accent/10",
    color: "text-accent"
  },
  { 
    icon: Monitor, 
    label: "SaaS & AI", 
    desc: "Building global tools with Indian engineering.",
    className: "lg:col-span-1 lg:row-span-2",
    bg: "bg-purple-500/10",
    color: "text-purple-500"
  },
  { 
    icon: Cog, 
    label: "DeepTech", 
    desc: "Next-gen engineering moats.",
    className: "lg:col-span-1 lg:row-span-1",
    bg: "bg-emerald-500/10",
    color: "text-emerald-500"
  },
  { 
    icon: MapPin, 
    label: "Bharat-First", 
    desc: "Targeting the next trillion-dollar market in Tier-2/3 cities.",
    className: "lg:col-span-1 lg:row-span-1",
    bg: "bg-orange-500/10",
    color: "text-orange-500"
  },
  { 
    icon: Factory, 
    label: "MSME Moats", 
    desc: "Tech-enabling the engine of India.",
    className: "lg:col-span-2 lg:row-span-1",
    bg: "bg-rose-500/10",
    color: "text-rose-500"
  },
];

const WhoCanApply = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    {/* Floating Elements */}
    <div className="absolute top-[20%] right-[-5%] w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
    <div className="absolute bottom-[20%] left-[-5%] w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

    <div className="container relative mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <ScrollReveal className="max-w-2xl text-left" direction="left">
          <div className="flex items-center gap-2 text-accent mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-bold uppercase tracking-[0.3em]">Inclusive Growth</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-[1.1]">
            A Stage Built for <br />
            <span className="text-gradient">Every Visionary.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="right" className="lg:mb-4">
          <p className="text-lg text-muted-foreground font-medium max-w-xs border-l-4 border-accent pl-6">
            We don't just fund tech. We fund transformation across every industry in Bharat.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
        {categories.map((cat, i) => (
          <ScrollReveal 
            key={cat.label} 
            delay={i * 0.05} 
            direction="up" 
            className={`${cat.className} h-full`}
          >
            <div className="glass p-8 rounded-[2.5rem] hover:bg-white dark:hover:bg-primary transition-all duration-700 hover:translate-y-[-8px] group h-full flex flex-col relative overflow-hidden">
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${cat.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className={`w-14 h-14 rounded-2xl ${cat.bg} flex items-center justify-center mb-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                <cat.icon size={28} className={`${cat.color} group-hover:scale-110 transition-transform`} />
              </div>

              <div className="mt-8 transition-transform duration-500 group-hover:translate-x-2">
                <h3 className="font-display text-2xl font-black text-primary mb-2 whitespace-nowrap">{cat.label}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium line-clamp-2 md:line-clamp-none">
                  {cat.desc}
                </p>
              </div>
              
              <div className="absolute top-8 right-8 text-primary/5 font-display text-6xl font-black transition-opacity group-hover:opacity-20 pointer-events-none">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanApply;
