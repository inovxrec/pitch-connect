import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80 mb-8 opacity-0 animate-fade-up"
          >
            <Sparkles size={14} />
            <span>By KaroStartup — India's Startup Storytelling Platform</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Pitch Your Startup to India's{" "}
            <span className="text-gradient">Top Investors.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Karo Pitch is a platform where early-stage founders from across India
            can present their startups to investors, gain visibility, and raise
            funding.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <Button variant="accent" size="lg" className="text-base px-8 py-6">
              Apply to Pitch
              <ArrowRight size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Explore Startups
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "5000+", label: "Startup Stories" },
            { value: "500+", label: "Founders Pitched" },
            { value: "100+", label: "Investors" },
            { value: "50+", label: "Cities Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/50 mt-1">
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
