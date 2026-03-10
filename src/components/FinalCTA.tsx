import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 gradient-hero relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/5 blur-2xl" />

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Pitch Your Startup?
        </h2>
        <p className="text-lg text-primary-foreground/60 max-w-xl mx-auto mb-10">
          Join hundreds of founders who have gained visibility, mentorship, and
          funding through Karo Pitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg" className="text-base px-8 py-6">
            Apply Now
            <ArrowRight size={18} />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            <Handshake size={18} />
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
