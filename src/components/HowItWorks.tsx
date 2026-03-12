import { FileText, CheckCircle, Mic, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: FileText, title: "Submit Pitch Deck", desc: "Upload your vision and data to our secure founder portal." },
  { icon: CheckCircle, title: "Curated Selection", desc: "Our analysts identify high-potential ventures for the next cohort." },
  { icon: Mic, title: "Live Investor Pitch", desc: "Present directly to elite capital sources and industry veterans." },
  { icon: Rocket, title: "Capital & Growth", desc: "Secure funding and strategic support to dominate your market." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding bg-primary/5 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <ScrollReveal className="text-center mb-24">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">The Pathway</p>
        <h2 className="font-display text-4xl md:text-5xl font-black text-primary">Streamlined to Success</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />
        
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.15} direction="up">
            <div className="relative text-center group h-full flex flex-col items-center">
              <div className="relative z-10 w-28 h-28 rounded-[2.5rem] glass mx-auto mb-10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:bg-primary shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-2xl">
                <step.icon size={40} className="text-accent group-hover:text-white transition-colors" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-sm font-black text-white shadow-lg border-4 border-white dark:border-card">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-black text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium max-w-[200px]">{step.desc}</p>

              {/* Background Number Accent */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-display text-9xl font-black text-primary/[0.02] pointer-events-none group-hover:text-primary/[0.05 transition-colors duration-700">
                0{i + 1}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
