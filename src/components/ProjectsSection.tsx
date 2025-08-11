import ProjectCard, { type projectType } from "./ProjectCard";
import projects from "../../projects.json";

const ProjectsSection: React.FC = () => {
    return (
        <div
            className="rounded-md  py-10   flex flex-col  gap-10 items-center relative  md:pt-30"
            id="projects"
        >
            <div className="w-[min(95%,900px)] flex flex-col gap-10 pt-10">
                <p className="text-white font-bold text-3xl capitalize font-bebas px-4">
                    My Projects
                </p>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-6  items-center">
                    {projects.data.map((project:projectType, index:number)=>(
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
           
            </div>

            {}
        </div>
    );
};

export default ProjectsSection;
