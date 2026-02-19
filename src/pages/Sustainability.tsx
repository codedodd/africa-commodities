import sustainBg from "@/assets/sustainability-bg.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Cog, Droplets, Heart, Leaf, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  { icon: Heart, title: "Livelihoods", desc: "Supporting women shea pickers, smallholder farmers, and mining communities with fair prices and stable income." },
  { icon: Cog, title: "Mechanization", desc: "Investing in processing equipment and technology to increase productivity and reduce physical burden." },
  { icon: Droplets, title: "Potable Water", desc: "Improving access to clean water in sourcing communities as part of our social impact commitment." },
  { icon: TrendingUp, title: "Resilience & Income Stability", desc: "Building year-round income opportunities and diversified livelihood programs." },
  { icon: Leaf, title: "ESG Alignment", desc: "Tracking and reporting our environmental, social, and governance impact against international benchmarks." },
];

const Sustainability = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sustainBg})` }} />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 section-padding">
          <div className="container-narrow mx-auto text-center">
            <ScrollReveal>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Sustainability</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-foreground mt-3 mb-6">
                Trading That Improves Lives at the Source.
              </h1>
              <p className="max-w-2xl mx-auto text-dark-foreground/80">
                We believe trade should create shared value — improving livelihoods, protecting environments, and building resilient communities across Sub-Saharan Africa.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Sustainability Pillars</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="p-6 rounded-xl border border-border hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future KPI */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Impact Tracking — Coming Soon</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We're building a transparent KPI dashboard to track our environmental, social, and governance impact in real time.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Partner with Us <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
