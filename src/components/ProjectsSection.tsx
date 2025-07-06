import AboutMe from "./AboutMe";

const ProjectsSection: React.FC = () => {
   
    return (
        <div className="rounded-md h-[900px]  border pt-10 md:pt-0  flex md:items-center justify-center relative bg-gradient-to-b from-gray-800 to-gray-900" id="projects">
             <AboutMe className="md:hidden h-fit" />
        </div>
    );
};

export default ProjectsSection;
