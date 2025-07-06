import NavBar from "../components/NavBar";
import HeaderSection from "../components/HeaderSection";
import ProjectsAndSkillsSection from "../components/ProjectsAndSkillsSection";

const HomePage: React.FC = () => {
    return (

        <div className="p-0 min-h-[300vh]">
            <NavBar />
                <div className="flex flex-col gap-8">
                   <HeaderSection /> 
                    <ProjectsAndSkillsSection />
                </div>
        </div>
    );
};

export default HomePage;
