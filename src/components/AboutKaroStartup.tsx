import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const AboutKaroStartup = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Powered By
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            About KaroStartup
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            KaroStartup is one of India's fastest-growing startup storytelling
            platforms, sharing thousands of startup stories and building a strong
            community of founders, entrepreneurs, and innovators across the
            country.
          </p>

          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-muted-foreground hover:text-accent hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKaroStartup;
