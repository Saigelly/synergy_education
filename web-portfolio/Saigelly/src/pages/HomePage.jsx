
import About from "../Components/Main/About/About";
import Contact from "../Components/Main/Contact/Contact";
import HeroSection from "../Components/Main/HeroSection/HeroSection";
import ProjectSection from "../Components/Main/ProjectSection/ProjectSection";
import SkillsSection from "../Components/Main/SkillsSection/SkillsSection";
// import "./style.css";

const HomePage = () => {

    return (
        <main className="main">
            <HeroSection />
            <About />
            <SkillsSection />
            <ProjectSection />
            <Contact />
        </main>
    )
}

export default HomePage;