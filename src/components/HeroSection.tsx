import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { value: "5000+", label: "Startup Stories", icon: TrendingUp },
    { value: "500+", label: "Founders Pitched", icon: Users },
    { value: "100+", label: "Investors", icon: Target },
    { value: "50+", label: "Cities Covered", icon: Globe },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh section-padding pt-32">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/20 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-8 opacity-0 animate-fade-up shadow-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles size={16} className="text-accent" />
              <span>India's Premier Startup Ecosystem</span>
            </div>

            <h1
              className="font-display text-5xl sm:text-6xl lg:text-8xl font-black text-primary leading-[1.1] mb-8 opacity-0 animate-fade-up tracking-tight"
              style={{ animationDelay: "0.2s" }}
            >
              Fueling the Next{" "}
              <span className="text-gradient">Indian Unicorns.</span>
            </h1>

            <p
              className="text-xl text-muted-foreground max-w-xl mb-12 opacity-0 animate-fade-up leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              Karo Pitch is where ambitious founders connect with strategic investors 
              to transform bold ideas into global market leaders.
            </p>

            <div
              className="flex flex-wrap gap-5 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="xl" className="btn-hover-effect text-lg h-14 px-10 gap-2 rounded-2xl bg-primary text-white hover:bg-primary/90">
                Apply to Pitch
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="xl" className="btn-hover-effect text-lg h-14 px-10 rounded-2xl border-2 hover:bg-secondary">
                Explore Startups
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden opacity-0 animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-white/10 rotate-3 transition-transform hover:rotate-0 duration-700">
              <img src={heroBg} alt="Startup Pitching" className="w-full h-full object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-3xl max-w-[240px] shadow-2xl animate-float">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Monthly Growth</p>
                  <p className="text-xl font-bold">+124%</p>
                </div>
              </div>
              <div className="flex -space-x-3 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold">
                    ID
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Glassmorphism */}
        <div
          className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="glass p-8 rounded-[2rem] group hover:bg-primary/5 transition-all duration-500 hover:translate-y-[-8px]">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <stat.icon size={28} />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-md font-medium text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
