import { Heart, Building2, GraduationCap, Award } from "lucide-react";

const investors = [
  {
    icon: Heart,
    type: "Angel Investors",
    desc: "Early-stage investors passionate about backing new ideas and founders.",
    count: "50+",
  },
  {
    icon: Building2,
    type: "Venture Capital Firms",
    desc: "Institutional investors looking for high-growth startups to fund.",
    count: "30+",
  },
  {
    icon: GraduationCap,
    type: "Startup Mentors",
    desc: "Experienced entrepreneurs guiding the next generation of founders.",
    count: "40+",
  },
  {
    icon: Award,
    type: "Industry Experts",
    desc: "Domain specialists providing strategic insights and connections.",
    count: "25+",
  },
];

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Our Network
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Meet Investors Looking for the Next Big Startup
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {investors.map((inv) => (
            <div
              key={inv.type}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <inv.icon size={28} className="text-primary" />
              </div>
              <div className="font-display text-2xl font-bold text-accent mb-1">
                {inv.count}
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {inv.type}
              </h3>
              <p className="text-xs text-muted-foreground">{inv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
