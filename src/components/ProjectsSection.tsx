
const ProjectsSection: React.FC = () => {
   
    return (
        <div className="rounded-md  py-10   flex flex-col  gap-10 items-center relative  md:pt-30" id="projects">
            

             <div className= "w-[min(95%,900px)] flex flex-col gap-10 pt-10" >
                <p className="text-white font-bold text-3xl capitalize font-bebas px-4">My Projects</p>

                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
                <div className="h-40 w-full bg-white/20 rounded-md" ></div>
             </div>


        </div>
        
    );
};

export default ProjectsSection;
