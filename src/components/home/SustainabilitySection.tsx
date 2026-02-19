import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import sustainBg from "@/assets/sustainability-bg.jpg";

const SustainabilitySection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sustainBg})` }}
      />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6">
              Sustainability
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-foreground mb-6">
              Trading That Improves Lives at the Source.
            </h2>
            <p className="max-w-2xl mx-auto text-dark-foreground/80 mb-10 leading-relaxed">
              We're committed to creating shared value across every link in our supply chain — from supporting women shea pickers and smallholder farmers to investing in mechanization and potable water access.
            </p>
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
            >
              Learn More
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
