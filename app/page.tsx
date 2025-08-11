import UnseoLandingPage from "./test";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";

export default function Home() {
  return (
    <div className="mt-[90px] bg-[#020103]">
      <Header />
      <HeroSection />
      <PartnersSection />
      {/* <UnseoLandingPage /> */}
    </div>
  )
}
