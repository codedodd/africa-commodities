import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/commodities", label: "Commodities" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();



  // const [scrolled, setScrolled] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 20);
  //   window.addEventListener('scroll', handleScroll);

  //   // Initial dark mode check
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setIsDark(true);
  //     document.documentElement.classList.add('dark');
  //   }

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const toggleDarkMode = () => {
  //   setIsDark(!isDark);
  //   document.documentElement.classList.toggle('dark');
  // };


  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container-narrow mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs hover:bg-primary/90 transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border/50 last:border-0 ${
                pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs text-center"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
