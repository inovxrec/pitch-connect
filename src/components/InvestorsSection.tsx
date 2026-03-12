import { Heart, Building2, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const investors = [
  { 
    icon: Heart, 
    type: "Angel Investors", 
    desc: "Visionary individuals backing the next wave of founders.", 
    count: "50+",
    color: "from-rose-500 to-pink-500"
  },
  { 
    icon: Building2, 
    type: "VC Firms", 
    desc: "Institutional capital seeking high-growth ventures.", 
    count: "30+",
    color: "from-blue-500 to-indigo-500"
  },
  { 
    icon: GraduationCap, 
    type: "Startup Mentors", 
    desc: "Seasoned legends providing the strategic war-chest.", 
    count: "40+",
    color: "from-amber-500 to-orange-500"
  },
  { 
    icon: Award, 
    type: "Industry Titans", 
    desc: "Heavyweight specialists offering deep connections.", 
    count: "25+",
    color: "from-emerald-500 to-teal-500"
  },
];

const InvestorsSection = () => (
  <section id="investors" className="section-padding bg-primary/5 relative overflow-hidden">
    {/* Decorative Linear Gradients */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

    <div className="container relative mx-auto px-4">
      <div className="flex flex-col items-center text-center mb-24">
        <ScrollReveal direction="up">
          <div className="px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold uppercase tracking-[0.4em] mb-6">
            Elite Network
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-tight mb-8">
            Access Bharat's Most <br />
            <span className="text-gradient">Strategic Capital.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            We've built a gated ecosystem of capital sources that don't just provide money, but provide a significant strategic moat.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {investors.map((inv, i) => (
          <ScrollReveal key={inv.type} delay={i * 0.1} direction="up">
            <div className="group relative glass p-1 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] h-full">
              {/* Card Inner */}
              <div className="bg-white dark:bg-card h-full rounded-[2.3rem] p-10 flex flex-col relative overflow-hidden">
                {/* Background Number Accent */}
                <div className="absolute -top-4 -right-4 font-display text-[12rem] font-black text-primary/[0.03] leading-none pointer-events-none">
                  {i + 1}
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${inv.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <inv.icon size={32} className="text-white" />
                </div>

                <div className="mb-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Verified Partner</span>
                    <CheckCircle2 size={14} className="text-accent" />
                  </div>
                  <h3 className="font-display text-4xl font-black text-primary mb-4">{inv.count}</h3>
                  <h4 className="font-display text-xl font-bold text-primary/80 mb-4">{inv.type}</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {inv.desc}
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-primary/5">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="w-10 h-10 rounded-full border-4 border-white bg-secondary flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                      +{inv.count}
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

export default InvestorsSection;
