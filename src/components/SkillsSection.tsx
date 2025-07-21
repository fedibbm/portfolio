import { useState } from "react";
import SkillBlock from "./SkillBlock";
import AboutMe from "./AboutMe";
const SkillsSection: React.FC = () => {
    const skillsNames = ["frontend", "backend", "cloud"];
    const [selectedSkillTab, setSelectedSkillTab] =
        useState<string>("frontend");
    const skillsMap: Record<string, Record<string, number>> = {
        frontend: {
            "HTML/CSS": 99,
            Javascript: 90,
            Typescript: 80,
            React: 80,
            Redux: 80,
            Vuejs: 80,
        },
    };

    return (
        <div className="py-10 md:pt-30" id="skills">
            <AboutMe className="lg:hidden h-fit mx-auto mb-20" />

            <div className="rounded-md flex flex-col  gap-10 items-center relative ">
                <div className="w-[min(95%,900px)] flex flex-col gap-10 pt-10 items-center">
                    <h1 className="text-white font-bold text-3xl capitalize font-bebas px-4 self-start">
                        My Skills
                    </h1>
                    <div className="text-white  flex flex-row gap-2 justify-center w-full">
                        {skillsNames &&
                            skillsNames.map((skill: string, index: number) => (
                                <button
                                    key={index}
                                    className={`border border-white rounded-md p-2 cursor-pointer capitalize ${
                                        skill === selectedSkillTab &&
                                        "bg-white text-gray-800"
                                    }`}
                                    onClick={() => {
                                        setSelectedSkillTab(skill);
                                    }}
                                >
                                    {skill}
                                </button>
                            ))}
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-4 text-white">
                        {skillsMap[selectedSkillTab] &&
                            Object.entries(skillsMap[selectedSkillTab]).map(
                                ([skill, percentage], index: number) => (
                                    <SkillBlock
                                        key={index}
                                        name={skill}
                                        percentage={percentage}
                                    />
                                )
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
