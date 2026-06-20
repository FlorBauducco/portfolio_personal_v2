import { CustomDynamicBackground } from "./components/custom/CustomDynamicBackground";
import { Navigation } from "./views/nav/Navigation";
import { Hero } from "./views/hero/Hero";
import { About } from "./views/about/About";
import { Skills } from "./views/skills/Skills";
import { Projects } from "./views/projects/Projects";
import { Experience } from "./views/experience/Experience";

function PortfolioApp() {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <CustomDynamicBackground />

        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default PortfolioApp;
