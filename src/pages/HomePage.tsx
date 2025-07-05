import NavBar from "../components/NavBar";
import HeaderSection from "../components/HeaderSection";
import ProjectsSection from "../components/ProjectsSection";

const HomePage: React.FC = () => {
    return (

        <div className="p-0 h-[400vh]">
            <NavBar />
                <div className="flex flex-col gap-8">
                   <HeaderSection /> 
                    <ProjectsSection />
                </div>
        </div>
    );
};

export default HomePage;
