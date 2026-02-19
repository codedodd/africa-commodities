import sustainBg from "@/assets/gold.jpg";
import { CountUp } from "@/components/CountUp";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 5000, suffix: "+", label: "Farmers Supported" },
  { value: 4, suffix: "", label: "Continents Served" },
  { value: 100, suffix: "%", label: "Quality-Driven Supply" },
  { value: 12, suffix: "+", label: "Commodities Traded" },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sustainBg})` }} />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 section-padding">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Impact</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-foreground mt-3">
                Sustainable Trade. Measurable Impact.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100} className="border-r border-white/10 last:border-0">
                <div className="text-center">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-dark-foreground/70 text-sm font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
