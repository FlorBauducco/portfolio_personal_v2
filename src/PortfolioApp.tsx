import { useEffect, useRef, useState } from "react";
import { CustomDynamicBackground } from "./components/custom/CustomDynamicBackground";
import { Navigation } from "./views/nav/Navigation";
import { Hero } from "./views/hero/Hero";
import { About } from "./views/about/About";

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionRefs.current);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[sections[i]];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <CustomDynamicBackground />

        <div className="relative z-10">
          <Navigation
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
}

export default PortfolioApp;
