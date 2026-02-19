import sustainBg from "@/assets/sustainability-bg.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, Eye, Globe, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { step: "01", title: "Source", desc: "We identify and partner with producers across Sub-Saharan Africa." },
  { step: "02", title: "Aggregate", desc: "Consolidate supply to meet volume and specification requirements." },
  { step: "03", title: "Process", desc: "Add value through processing to international standards." },
  { step: "04", title: "Export", desc: "Deliver reliably with full compliance and documentation." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${sustainBg})` }} />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative z-10 section-padding">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-foreground mt-3 mb-6">
              Connecting African Resources to Global Industry.
            </h1>
            <p className="max-w-2xl mx-auto text-dark-foreground/80 leading-relaxed">
              New Africa Commodities Limited is a Ghana-based trading company that sources, aggregates, processes, and exports hard and soft commodities from Sub-Saharan Africa to international markets.
            </p>
          </ScrollReveal>
        </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-10">
          <ScrollReveal>
            <div className="p-8 rounded-xl bg-primary/5">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build reliable, transparent, and sustainable commodity supply chains that connect African producers with global markets — creating value at every stage.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-xl bg-primary/5">
              <Eye className="text-primary mb-4" size={32} />
              <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Africa's most trusted commodity trading partner — known for quality, integrity, and positive impact on communities and environments where we operate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">How We Work</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 100}>
                <div className="relative p-6 bg-card rounded-xl border border-border h-full">
                  <span className="text-5xl font-heading font-bold text-primary/10">{s.step}</span>
                  <h3 className="font-heading font-bold text-lg mt-2 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "We operate with full transparency and ethical standards in every transaction." },
              { icon: Users, title: "Community Impact", desc: "Our trade creates direct benefits for farming communities across Africa." },
              { icon: Globe, title: "Global Standards", desc: "We meet and exceed international quality, compliance, and sustainability benchmarks." },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center p-6">
                  <v.icon className="mx-auto text-primary mb-4" size={32} />
                  <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-6">Ready to Work with Us?</h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
