import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import WhoCanApply from "@/components/WhoCanApply";
import InvestorsSection from "@/components/InvestorsSection";
import FeaturedStartups from "@/components/FeaturedStartups";
import AboutKaroStartup from "@/components/AboutKaroStartup";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <WhoCanApply />
      <InvestorsSection />
      <FeaturedStartups />
      <AboutKaroStartup />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
