import { FileText, CheckCircle, Mic, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: FileText, title: "Apply with Your Pitch Deck", desc: "Submit your startup details and pitch deck through our simple application form." },
  { icon: CheckCircle, title: "Get Shortlisted by KaroStartup", desc: "Our team reviews applications and shortlists the most promising startups." },
  { icon: Mic, title: "Pitch Live to Investors", desc: "Present your startup directly to a panel of investors and mentors." },
  { icon: Rocket, title: "Raise Funding and Scale", desc: "Get funded, receive mentorship, and take your startup to the next level." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Simple Process</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.15} direction="up">
            <div className="relative text-center group">
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-card shadow-card mx-auto mb-6 flex items-center justify-center group-hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
                <step.icon size={32} className="text-accent" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">{i + 1}</span>
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
