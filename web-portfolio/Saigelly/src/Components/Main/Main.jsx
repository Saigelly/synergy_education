
import About from "./About/About";
import HeroSection from "./HeroSection/HeroSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import "./style.css";

const Main = () => {

    return (
        <main className="main">
            <HeroSection />
            <About />
            <SkillsSection />
            <ProjectSection />
        </main>
    )
}

export default Main;