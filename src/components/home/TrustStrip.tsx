import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, FileCheck, Route, FileText } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Responsible Sourcing" },
  { icon: FileCheck, label: "Compliance & Due Diligence" },
  { icon: Route, label: "Full Traceability" },
  { icon: FileText, label: "Export Documentation" },
];

const TrustStrip = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="flex items-center gap-3 text-primary-foreground justify-center">
                <item.icon size={22} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
