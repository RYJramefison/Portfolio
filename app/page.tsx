import Header from "@/components/layout/Header";
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
      <ContactSection/>
    </div>
   
  );
}


