import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section className="section-padding bg-primary relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[60%] bg-orange-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

    <div className="container relative mx-auto px-4">
      <ScrollReveal className="max-w-4xl mx-auto text-center" direction="up">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white mb-8 backdrop-blur-md border border-white/10">
          <Handshake size={16} className="text-accent" />
          <span>Launch Your Journey Today</span>
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
          Ready to Scale Your <br />
          <span className="text-accent">Startup Story?</span>
        </h2>
        
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Join the elite league of Indian founders who have secured visibility, strategic mentorship, and the capital needed to define the future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="hero" size="xl" className="btn-hover-effect min-w-[220px]">
            Apply to Pitch
            <ArrowRight size={20} />
          </Button>
          <Button variant="hero-outline" size="xl" className="btn-hover-effect min-w-[220px]">
            Partner With Us
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
