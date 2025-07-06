import AboutMe from "./AboutMe";

const ProjectAndSkillsSection: React.FC = () => {
   
    return (
        <div className="rounded-md   border py-10   flex flex-col  gap-10 items-center relative bg-gradient-to-b from-gray-800 to-gray-900 md:pt-30" id="projects">
             <AboutMe className="md:hidden h-fit" />
             <div className= "w-[min(95%,900px)] flex flex-col gap-10">
                <p className="text-white font-bold text-3xl capitalize font-bebas px-4">My Projects</p>

                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
             </div>

             <div className= "w-[min(95%,900px)] flex flex-col gap-10" id="skills">
                <p className="text-white font-bold text-3xl capitalize font-bebas px-4">My Projects</p>

                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
             </div>


        </div>
        
    );
};

export default ProjectAndSkillsSection;
