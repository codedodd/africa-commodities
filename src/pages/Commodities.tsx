import sustainBg from "@/assets/sustainability-bg.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle2, CircleDot, Droplets, Gem, Wheat } from "lucide-react";
import { Link } from "react-router-dom";

const commodities = [
  {
    id: "shea",
    icon: Droplets,
    title: "Processed Shea Products",
    overview: "We supply premium processed shea butter and shea oil sourced directly from women-led cooperatives across Northern Ghana and the wider West African shea belt.",
    options: ["Refined Shea Butter", "Unrefined Shea Butter", "Shea Olein & Stearin", "Shea Oil"],
    applications: ["Cosmetics & skincare", "Food & confectionery (CBE)", "Pharmaceuticals", "Industrial applications"],
    compliance: ["HACCP certified processing", "Organic & Fair Trade options", "Full traceability to village level"],
  },
  {
    id: "grains",
    icon: Wheat,
    title: "Soya & Maize",
    overview: "High-quality soya beans and maize sourced from smallholder and commercial farms across Ghana and the wider region, processed and graded to meet international feed and food-grade standards.",
    options: ["Whole Soya Beans", "Soya Meal", "Yellow & White Maize", "Maize Grits"],
    applications: ["Animal feed production", "Food processing", "Brewing & starch", "Export markets"],
    compliance: ["Phytosanitary certification", "Moisture & aflatoxin testing", "Export-grade grading"],
  },
  {
    id: "gold",
    icon: CircleDot,
    title: "Gold",
    overview: "Responsibly sourced gold from artisanal and small-scale mining (ASM) operations in Ghana and the broader Sub-Saharan African region, with full due diligence and traceability.",
    options: ["Gold Doré Bars", "Alluvial Gold", "Refined Gold"],
    applications: ["International refineries", "Jewelry manufacturing", "Central banks & investment", "Industrial applications"],
    compliance: ["LBMA-aligned due diligence", "Conflict-free sourcing", "Know Your Customer (KYC)", "Anti-money laundering compliance"],
  },
  {
    id: "minerals",
    icon: Gem,
    title: "Rare Earth & Strategic Minerals",
    overview: "Critical minerals essential for the global energy transition, sourced from emerging mining operations across Sub-Saharan Africa with responsible extraction practices.",
    options: ["Lithium", "Manganese", "Bauxite", "Other Strategic Minerals"],
    applications: ["Battery manufacturing", "Steel & alloys", "Aluminum production", "Advanced technology"],
    compliance: ["Environmental impact assessments", "Community engagement protocols", "International mining standards", "Full chain of custody"],
  },
];

const Commodities = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sustainBg})` }} />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Commodities</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-foreground mt-3 mb-6">
              Africa's Commodities. Delivered with Integrity.
            </h1>
            <p className="max-w-2xl mx-auto text-dark-foreground/80">
              From farm-gate to international markets, we provide consistent quality, reliable supply, and full traceability across our commodity portfolio.
            </p>
          </ScrollReveal>
        </div>
        </div>
      </section>

      {/* Commodity Sections */}
      {commodities.map((c, idx) => (
        <section
          key={c.id}
          id={c.id}
          className={`section-padding ${idx % 2 === 0 ? "bg-background" : "bg-primary/5"}`}
        >
          <div className="container-narrow mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="text-primary" size={24} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">{c.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">{c.overview}</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="font-heading font-semibold mb-4">Supply Options</h3>
                  <ul className="space-y-2">
                    {c.options.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0" /> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="font-heading font-semibold mb-4">Applications</h3>
                  <ul className="space-y-2">
                    {c.applications.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-secondary shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div>
                  <h3 className="font-heading font-semibold mb-4">Compliance & Traceability</h3>
                  <ul className="space-y-2">
                    {c.compliance.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Request Specifications <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Commodities;
