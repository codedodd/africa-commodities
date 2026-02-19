import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe } from "lucide-react";

const regions = [
  { name: "Africa", desc: "Ghana, West Africa, Sub-Saharan Africa" },
  { name: "Europe", desc: "UK, Netherlands, Germany, France" },
  { name: "Asia", desc: "India, China, Southeast Asia" },
  { name: "North America", desc: "United States, Canada" },
];

const GlobalMarkets = () => {
  return (
    <section className="section-padding bg-primary/10">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Global Presence</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Connecting African Resources to Global Industry.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 100}>
              <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all h-full">
                <Globe className="mx-auto text-primary mb-3" size={32} />
                <h3 className="font-heading font-bold text-lg mb-1">{r.name}</h3>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;
