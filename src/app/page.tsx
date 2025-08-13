// In your main page file (e.g., page.tsx)
import HeroSection from "@/app/component/HeroSection";
import SubheaderSection from "@/app/component/SubheaderSection";
import ServiceSection from "@/app/component/ServiceSection";
import ReferencesSection from "@/app/component/ReferencesSection";
import FooterSection from "@/app/component/FooterSection";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SubheaderSection />
      <ServiceSection />
      <ReferencesSection />
      <FooterSection />


      
    </>
  );
}