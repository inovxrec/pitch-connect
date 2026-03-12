import { Target, Users, TrendingUp, Sparkles, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-[10%] left-[-5%] text-[20rem] font-black text-primary/[0.02] select-none pointer-events-none whitespace-nowrap leading-none">
        IMPACT INNOVATION
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <ScrollReveal direction="left" className="relative">
            <div className="relative group">
              {/* Main Visual Image/Card */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden glass p-4 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
                <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                  {/* Decorative Mesh inside card */}
                  <div className="absolute inset-0 bg-mesh opacity-20" />
                  
                  <Quote size={64} className="text-accent mb-8 opacity-50" />
                  <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    "Bridging the gap between visionary founders and the capital that fuels them."
                  </h3>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-px bg-white/20" />
                    <span className="text-sm font-bold uppercase tracking-widest">The KaroPitch Mission</span>
                    <div className="w-12 h-px bg-white/20" />
                  </div>
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 glass rounded-[2.5rem] p-8 flex flex-col items-center justify-center shadow-2xl animate-slow-spin hidden md:flex">
                <Sparkles size={40} className="text-accent mb-2" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Excellence</span>
              </div>
              
              <div className="absolute -bottom-12 -left-12 w-64 h-32 glass rounded-3xl p-8 flex items-center gap-6 shadow-2xl hidden md:flex">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-white shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-primary leading-none mb-1">100+</div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Startups Funded</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 text-accent mb-6">
                <span className="w-12 h-1px bg-accent/30" />
                <span className="text-sm font-black uppercase tracking-[0.4em]">The Core Thesis</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-primary mb-8 leading-[1.1]">
                Democratizing <br />
                <span className="text-gradient">Indian Capital.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-12">
                India is thriving with innovation, but accessing top-tier capital remains a gated privilege. KaroPitch is here to tear down those gates and build a transparent bridge for the next generation of titans.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "Precision", desc: "We only source high-conviction, verified ventures." },
                  { icon: Users, title: "Direct Access", desc: "No middle-men. No gatekeepers. Just founders & capital." }
                ].map((item, i) => (
                  <div key={i} className="glass p-8 rounded-3xl group hover:bg-white transition-all duration-500 hover:translate-y-[-4px]">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={26} className="text-primary" />
                    </div>
                    <h4 className="font-display text-xl font-black text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
