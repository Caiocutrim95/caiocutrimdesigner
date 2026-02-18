import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroCarousel />
    <ServicesSection />
    <PricingSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
