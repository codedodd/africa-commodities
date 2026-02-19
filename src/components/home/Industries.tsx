import { ScrollReveal } from "@/components/ScrollReveal";
import { CircleDot, Sparkles, Utensils, Zap } from "lucide-react";

const industries = [
  { icon: Utensils, title: "Food & Feed", desc: "Manufacturers seeking reliable African grain and oilseed supply." },
  { icon: Sparkles, title: "Cosmetics & Personal Care", desc: "Premium shea-based ingredients for global beauty brands." },
  { icon: CircleDot, title: "Precious Metals & Refining", desc: "Responsibly sourced gold for refiners and jewelers." },
  { icon: Zap, title: "Energy Transition", desc: "Strategic minerals powering the clean energy revolution." },
  { icon: Zap, title: "Industrial Technology", desc: "Critical minerals for electronics and energy storage." },
];

const Industries = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Powering Global Industries from African Origins
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 100}>
              <div className="text-center p-6 rounded-xl hover:bg-muted transition-colors h-full">
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <ind.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{ind.title}</h3>
                <p className="text-muted-foreground text-sm">{ind.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
