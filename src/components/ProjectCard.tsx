import { useState } from "react";
import { Link } from "react-router-dom"

export interface projectType {
    name: string;
    description: string;
    cover: string;
    technologies: string[];
    live?: string;
    source?: string;
    details?: string;
}

export default function ProjectCard({ project }: { project: projectType }) {
    const [projectHovered, setProjectHovered] = useState<boolean>(false);
    return (
        <div
            className="relative overflow-hidden w-[min(500px,95%)] bg-gray-900 rounded-md text-gray-200 h-115  justify-self-center shadow-white/10 shadow-sm bo/rder border-gray-200/40 "
            onMouseLeave={() => {
                setProjectHovered(false);
            }}
            onMouseEnter={() => {
                setProjectHovered(true);
            }}
        >
            <img src={project.cover} alt="project cover" />
            <div className="px-4 pt-4 pb-14 flex flex-col gap-2"> 
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <div className="flex flex-row gap-2 overflow-x-scroll no-scrollbar">
                    {project.technologies.map(
                        (technology: string, index: number) => (
                            <div key={index} className="bg-sky-900 capitalize py-1 text-indigo-00 px-2 text-sm rounded-md">{technology}</div>
                        )
                    )}
                </div>
                <p className="line-clamp-3 ">{project.description}</p>
            </div>
            <div
                className={`absolute flex w-full justify-start gap-4 -bottom-20 pb-1 tansition-all duration-300 px-2 ${
                    projectHovered ? "bottom-0" : "-bottom-0"
                }`}
            >
                {project.live && <a className="block cursor-pointer bg-gray-200 text-gray-900 px-4  py-2 rounded-md" target="blank" href={project.live}>LIVE</a>}
                {project.source && <a className="block cursor-pointer bg-gray-200 text-gray-900 px-4  py-2 rounded-md" target="blank" href={project.source}>SOURCE</a>}
                {project.details && <Link className="block cursor-pointer bg-gray-200 text-gray-900 px-4  py-2 rounded-md" to={project.details}>DETAILS</Link>}
            </div>
        </div>
    );
}
