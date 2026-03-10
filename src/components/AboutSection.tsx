import { Target, Users, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Target, title: "Curated Pitches", desc: "Every startup is reviewed and shortlisted to ensure high-quality pitches." },
  { icon: Users, title: "Investor Access", desc: "Connect directly with angel investors, VCs, and industry mentors." },
  { icon: TrendingUp, title: "Scale Fast", desc: "Get visibility, mentorship, and funding to accelerate your growth." },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">About the Platform</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What is Karo Pitch?</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Karo Pitch is a curated startup pitch platform designed to connect promising founders with investors. Thousands of entrepreneurs across India are building amazing businesses but lack access to funding and visibility. Karo Pitch bridges this gap by enabling founders to pitch their startups in front of investors through structured pitch events and a discovery platform.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.12} direction="scale">
            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center group h-full">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <f.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
