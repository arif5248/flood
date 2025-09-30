import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ResearchersSection } from "@/components/ResearchersSection";
import { GovernmentSection } from "@/components/GovernmentSection";
import { NGOSection } from "@/components/NGOSection";
import { ShelterMap } from "@/components/ShelterMap";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <ResearchersSection />
        <GovernmentSection />
        <NGOSection />
        <ShelterMap />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
