import { Leaf, Package, BookOpen, ArrowRight, ExternalLink, Globe, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const startups = [
  { 
    name: "FarmFresh", 
    category: "AgriTech", 
    desc: "AI-driven farm-to-table logistics reducing supply chain waste by 40%.", 
    icon: Leaf, 
    status: "Trending",
    color: "from-green-500/20 to-emerald-500/20 text-green-600",
    gradient: "from-emerald-400 to-cyan-400"
  },
  { 
    name: "EcoPack", 
    category: "Sustainability", 
    desc: "Biodegradable packaging scaling to replace plastics in 500+ cities.", 
    icon: Package, 
    status: "Rapid Growth",
    color: "from-orange-500/20 to-rose-500/20 text-orange-600",
    gradient: "from-orange-400 to-rose-400"
  },
  { 
    name: "SkillSpark", 
    category: "EdTech", 
    desc: "Vocational training marketplace empowering Bharat's digital economy.", 
    icon: BookOpen, 
    status: "New Selection",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-600",
    gradient: "from-blue-400 to-indigo-400"
  },
];

const FeaturedStartups = () => (
  <section id="startups" className="section-padding bg-background relative overflow-hidden">
    <div className="container relative mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <ScrollReveal className="max-w-2xl text-left" direction="left">
          <div className="flex items-center gap-2 text-accent mb-4">
            <Zap size={18} fill="currentColor" />
            <span className="text-sm font-bold uppercase tracking-[0.4em]">Live Discovery</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-primary mb-8 leading-tight">
            High Potential <br />
            <span className="text-gradient">Innovations.</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="right" className="lg:mb-6">
          <Button variant="outline" size="xl" className="btn-hover-effect rounded-2xl border-2 group px-12">
            Explore Repository
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {startups.map((s, i) => (
          <ScrollReveal key={s.name} delay={i * 0.1} direction="up">
            <div className="group relative glass p-1 rounded-[3rem] overflow-hidden transition-all duration-700 hover:translate-y-[-16px]">
              <div className="bg-white dark:bg-card rounded-[2.8rem] overflow-hidden flex flex-col h-full">
                {/* Visual Header */}
                <div className={`h-48 bg-gradient-to-br ${s.gradient} relative p-8 flex items-end overflow-hidden`}>
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    {s.status}
                  </div>
                  
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-2xl flex items-center justify-center -mb-16 border-4 border-white">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                      <s.icon size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-10 pt-16 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                        {s.category}
                      </span>
                      <h3 className="font-display text-3xl font-black text-primary mt-3 group-hover:text-accent transition-colors">{s.name}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl border border-primary/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed font-medium mb-10">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-primary/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="w-9 h-9 rounded-full border-4 border-white bg-secondary flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10" />
                          </div>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Featured</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary/40 font-black italic">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] uppercase tracking-tighter">Karo Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedStartups;
