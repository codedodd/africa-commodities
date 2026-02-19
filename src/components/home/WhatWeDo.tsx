import { ScrollReveal } from "@/components/ScrollReveal";
import { Package, Search, Settings, Truck } from "lucide-react";

const steps = [
  { icon: Search, title: "Sourcing", desc: "Direct from farms, mines, and communities across Sub-Saharan Africa." },
  { icon: Package, title: "Aggregation", desc: "Consolidating supply to meet international volume and quality requirements." },
  { icon: Settings, title: "Processing", desc: "Value-added processing to global specifications and standards." },
  { icon: Truck, title: "Exporting", desc: "Reliable logistics and documentation for seamless global delivery." },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              From Source to Shipment — Done Right.
            </h2>
             <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  At New Africa Commodities, we don't just trade; we build bridges. Operating out of Ghana with a footprint across West Africa, <br />  
                  we manage the entire value chain from farm gate and mine site to the final port of destination.
              </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center gap-16 items-center mt-14 mx-auto max-w-xl">
          
          

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
