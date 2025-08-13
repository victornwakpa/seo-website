import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import FeaturesSection from "@/components/features";
import MoreFeaturesSection from "@/components/more-features";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from '@/components/pricing-section';
import WaitlistSection from '@/components/waitlist-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="mt-[90px] bg-[#020103]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <MoreFeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  )
}
