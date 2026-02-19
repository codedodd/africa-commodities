import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-secondary text-sm font-medium mb-6 animate-fade-up">
          Ghana-Based • Sub-Saharan Africa • Global Markets
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl/normal font-display font-bold tracking-wider text-gray-100 dark:text-white mb-8 leading-[1.2] animate-fade-up [animation-delay:150ms]">
          Responsible Trading.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600 dark:from-secondary dark:to-primary">African Origin.</span>
          <br />
          Global Reach.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 font-light mb-10 max-w-2xl mx-auto font-base leading-[1.8] animate-fade-up [animation-delay:300ms]">
          We source, aggregate, process, and export hard and soft commodities from Sub-Saharan Africa to international markets — connecting reliable supply with sustainable impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:450ms]">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-opacity-90 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2 text-gray-100"
          >
            Request a Quote
          </Link>
          <Link
            to="/commodities"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full font-bold text-lg transition-all active:scale-95 text-gray-100"
          >
            Explore Commodities
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-dark-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-secondary" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
