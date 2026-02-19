import { ScrollReveal } from "@/components/ScrollReveal";
import { CircleDot, Droplets, Gem, Wheat } from "lucide-react";
import { Link } from "react-router-dom";

const commodities = [
  { icon: Droplets, title: "Processed Shea Products", desc: "Premium shea butter and shea oil for cosmetics, food, and industrial applications." },
  { icon: Wheat, title: "Soya & Maize", desc: "High-quality grains for food processing, animal feed, and industrial use." },
  { icon: CircleDot, title: "Gold", desc: "Responsibly sourced gold from artisanal and small-scale mining operations." },
  { icon: Gem, title: "Rare Earth & Strategic Minerals", desc: "Critical minerals for the energy transition and advanced manufacturing." },
];

const CommodityCards = () => {
  return (
    <section className="section-padding bg-primary/10">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Commodities</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Africa's Commodities. Delivered with Integrity.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mx-auto">
          {commodities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <div className="bg-card rounded-xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              to="/commodities"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Commodities
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CommodityCards;
