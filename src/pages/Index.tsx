import HeroSection from "@/components/home/HeroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import CommodityCards from "@/components/home/CommodityCards";
import WhyUs from "@/components/home/WhyUs";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import GlobalMarkets from "@/components/home/GlobalMarkets";
import TrustStrip from "@/components/home/TrustStrip";
import Industries from "@/components/home/Industries";
import StatsSection from "@/components/home/StatsSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <WhatWeDo />
      <CommodityCards />
      <WhyUs />
      <SustainabilitySection />
      <TrustStrip />
      <GlobalMarkets />
      <Industries />
      <StatsSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
