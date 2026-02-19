import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="hidden sm:block">
                  <span className="font-display font-semibold text-sm tracking-[.25em] uppercase text-primary dark:text-white block">
                    NEW AFRICA
                  </span>
                  <span className="font-light text-gray-500 block text-xs tracking-[.27em]">
                    COMMODITIES
                  </span>
                </div>
            </Link>
            <p className="text-sm text-dark-foreground/70 leading-relaxed mt-3">
              Sourcing, aggregating, processing, and exporting hard and soft commodities from Sub-Saharan Africa to international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Commodities", "Sustainability", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                    className="text-sm text-dark-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Commodities</h4>
            <ul className="space-y-2">
              {["Processed Shea Products", "Soya & Maize", "Gold", "Rare Earth Minerals"].map((item) => (
                <li key={item}>
                  <Link
                    to="/commodities"
                    className="text-sm text-dark-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-dark-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-dark-foreground/70">
                <Mail size={16} className="shrink-0" />
                <span>info@newafricacommodities.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-dark-foreground/70">
                <Phone size={16} className="shrink-0" />
                <span>+233 XX XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-foreground/50">
            © {new Date().getFullYear()} New Africa Commodities Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-dark-foreground/50">
            <span className="hover:text-dark-foreground/80 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-dark-foreground/80 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
