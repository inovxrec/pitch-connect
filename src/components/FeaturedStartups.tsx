import { Leaf, Package, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const startups = [
  { name: "FarmFresh", category: "AgriTech", desc: "Connecting farmers directly to urban consumers through a tech-enabled supply chain.", icon: Leaf, color: "bg-green-50 text-green-600" },
  { name: "EcoPack", category: "Sustainable Packaging", desc: "Manufacturing biodegradable packaging solutions for India's e-commerce boom.", icon: Package, color: "bg-amber-50 text-amber-600" },
  { name: "SkillSpark", category: "EdTech", desc: "Upskilling youth from Tier-2 cities with industry-relevant vocational training.", icon: BookOpen, color: "bg-blue-50 text-blue-600" },
];

const FeaturedStartups = () => (
  <section id="startups" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Discover</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Featured Startups</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {startups.map((s, i) => (
          <ScrollReveal key={s.name} delay={i * 0.12} direction="up">
            <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full">
              <div className="h-2 gradient-accent" />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{s.category}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Startups
          <ArrowRight size={16} />
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default FeaturedStartups;
