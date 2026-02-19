import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Partner with a Reliable African Supply Partner.
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Whether you're sourcing shea, grains, gold, or strategic minerals — we deliver quality, compliance, and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-secondary/90 transition-colors"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
