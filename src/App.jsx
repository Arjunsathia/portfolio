import Sidebar from './components/layout/Sidebar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import SkillSection from './components/sections/SkillSection';
import ExperienceSection from './components/sections/ExperienceSection';
import WorkSection from './components/sections/WorkSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import './styles/main.css';
import './styles/sections.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillSection />
        <ExperienceSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
