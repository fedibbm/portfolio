import NavBar from "../components/NavBar";
import HeaderSection from "../components/HeaderSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Particles from "../blocks/Backgrounds/Particles/Particles";
import ContactSection from "../components/ContactSection";
const HomePage: React.FC = () => {
    return (

        <div className="p-0  ">
            <Particles
                className="absolute inset-0 "
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={800}
                particleSpread={10}
                speed={0.05}
                particleBaseSize={100}
                // moveParticlesOnHover={true}
                alphaParticles={false}
                
                disableRotation={false}
            />
            <NavBar />
                <div className="flex flex-col pb-40">
                   <HeaderSection /> 
                    <div className="flex flex-col gap-8 bg-[#1e2938]">
                        <SkillsSection />
                        <ProjectsSection />
                        <ContactSection />
                    </div>
                </div>
        </div>
    );
};

export default HomePage;
