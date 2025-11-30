import Sidebar from './components/layout/Sidebar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import SkillSection from './components/sections/SkillSection';
import ExperienceSection from './components/sections/ExperienceSection';
import WorkSection from './components/sections/WorkSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';

import FloatingContactButton from './components/ui/FloatingContactButton';

import PremiumRevealWrapper from './components/ui/PremiumRevealWrapper';

function App() {
  return (
    <div className="flex min-h-screen bg-bg-light">
      <Sidebar />
      <div className="flex-grow p-0 md:p-[40px_60px] md:ml-[290px] transition-all duration-300 w-full">
        <PremiumRevealWrapper><HeroSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><AboutSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><ServicesSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><SkillSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><ExperienceSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><WorkSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><BlogSection /></PremiumRevealWrapper>
        <PremiumRevealWrapper><ContactSection /></PremiumRevealWrapper>
      </div>
      <FloatingContactButton />
    </div>
  );
}

export default App;
