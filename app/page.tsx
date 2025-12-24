import Header from "@/components/layout/Header";
import CitationSection from "@/components/sections/CitationSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/PojectSection";
import SkillsSection from "@/components/sections/SkillsSection";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SkillsSection/>
      <ProjectSection/>
      <CitationSection/>~~
      <ContactSection/>
    </div>
   
  );
}


