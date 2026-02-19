import { ScrollReveal } from "@/components/ScrollReveal";
import { BarChart3, Leaf, MapPin, ShieldCheck, Truck } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Origin-Based Sourcing", desc: "Direct relationships with producers across Sub-Saharan Africa." },
  { icon: BarChart3, title: "Quality & Consistency", desc: "Rigorous quality control meeting international specifications." },
  { icon: ShieldCheck, title: "Compliance & Transparency", desc: "Full traceability and regulatory compliance in every shipment." },
  { icon: Leaf, title: "Sustainability & Impact", desc: "Trade that uplifts communities and protects the environment." },
  { icon: Truck, title: "Reliable Execution", desc: "Dependable logistics from origin to destination, every time." },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Trusted Supply Chains from Origin to Global Markets.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                New Africa Commodities combines deep local knowledge with international trade expertise to deliver consistent quality, compliant supply, and measurable impact across every commodity we handle.
              </p>

              {/* Diagram Visual */}
              <div className="relative w-full">
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-2xl blur-2xl transform rotate-3"></div>
                  <div className="relative bg-white dark:bg-nac-border p-1.5 rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-2xl">
                      <div className="aspect-video bg-gray-50 dark:bg-[#111] relative flex items-center justify-center rounded-xl overflow-hidden">
                          {/* Background Grid */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                          
                          {/* Process Flow */}
                          <div className="flex items-center justify-between w-full max-w-sm px-4 z-10 relative">
                              {/* Step 1 */}
                              <div className="flex flex-col items-center gap-3 group cursor-default">
                                  <div className="w-14 h-14 rounded-full bg-white dark:bg-nac-surface border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-500 group-hover:text-nac-green group-hover:border-nac-green transition-all duration-300 relative z-10">
                                      <iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
                                  </div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Site</span>
                              </div>

                              {/* Connector 1 */}
                              <div className="flex-1 h-[2px] bg-gray-200 dark:bg-white/10 relative mx-2 overflow-hidden">
                                  <div className="absolute inset-0 bg-primary w-full -translate-x-full animate-[slideRight_2s_infinite]"></div>
                              </div>

                              {/* Step 2 (Central) */}
                              <div className="flex flex-col items-center gap-3">
                                  <div className="w-20 h-20 rounded-full bg-primary text-white shadow-xl shadow-primary/30 flex items-center justify-center z-10 ring-4 ring-white dark:ring-nac-border">
                                      <span className="font-display font-bold text-xl tracking-tighter">NAC</span>
                                  </div>
                                  <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary block">New Africa</span>
                                  <span className="text-xs font-light uppercase text-gray-500 dark:text-gray-400 block -mt-2">Commodities</span>
                              </div>

                              {/* Connector 2 */}
                              <div className="flex-1 h-[2px] bg-gray-200 dark:bg-white/10 relative mx-2 overflow-hidden">
                                  <div className="absolute inset-0 bg-primary w-full -translate-x-full animate-[slideRight_2s_infinite]" style={{ animationDelay: '1s' }}></div>
                              </div>

                              {/* Step 3 */}
                              <div className="flex flex-col items-center gap-3 group cursor-default">
                                  <div className="w-14 h-14 rounded-full bg-white dark:bg-nac-surface border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-500 group-hover:text-nac-lime group-hover:border-nac-lime transition-all duration-300 relative z-10">
                                      <iconify-icon icon="solar:globus-linear" width="24"></iconify-icon>
                                  </div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Global</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 80}>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary/30 flex items-center justify-center">
                    <r.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">{r.title}</h4>
                    <p className="text-muted-foreground text-sm">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
