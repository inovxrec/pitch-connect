import { ShoppingBag, Users, Factory, Monitor, Cog, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  { icon: ShoppingBag, label: "D2C Brands", desc: "Direct-to-consumer product companies" },
  { icon: Users, label: "Consumer Startups", desc: "Solving everyday consumer problems" },
  { icon: Factory, label: "MSMEs", desc: "Micro, small & medium enterprises" },
  { icon: Monitor, label: "SaaS Startups", desc: "Software-as-a-service products" },
  { icon: Cog, label: "Manufacturing", desc: "Innovative manufacturing businesses" },
  { icon: MapPin, label: "Bharat-focused", desc: "Startups serving Tier-2 & Tier-3 India" },
];

const WhoCanApply = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Open for All</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Who Can Apply?</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={i * 0.08} direction="scale">
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group cursor-default h-full">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:gradient-accent transition-colors">
                <cat.icon size={22} className="text-primary group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{cat.label}</h3>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanApply;
