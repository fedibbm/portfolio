import { useEffect, useState } from "react";
import { logoGithub, logoLinkedin, arrowDownCircle } from "ionicons/icons";

import SocialMediaIcon from "./SocialMediaIcon";
import Particles from "../blocks/Backgrounds/Particles/Particles";
import StarBorder from "../blocks/Animations/StarBorder/StarBorder";
import AboutMe from "./AboutMe";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";

const HeaderSection: React.FC = () => {
    const rotatingWords = [
        "blogs",
        "e-commerce stores",
        "portfolios",
        "dashboards",
    ];

    return (
        <header
            className="bg-gradient-to-t from-gray-800 to-black/70 rounded-md  h-dvh  border  flex  pt-[20vh] md:pt-0 md:items-center items-start justify-center relative  select-none"
            id="about"
        >
            <Particles
                className="absolute inset-0"
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            {/* email */}
           
            

            <div className="flex md:justify-center gap-14 md:px-20 items-center">
                <AboutMe className="hidden md:block" />
                
                <div className="flex items-start md:relative ">
                    <div className="flex gap-9 flex-col items-center md:items-start uppercase">
                        <div className="font-bold  text-left uppercase text-white font-bebas">
                            <p className="md:text-[60px] text-[40px]">Hello, <span className="text-gray-50 text-[40px] md:text-[60px] ">
                                    I'm{" "}
                                </span></p>
                            <div className="   text-blue-700 font-bebas  text-[60px]/15 md:text-[90px]/20 flex flex-col md:flex-row gap-6 ">
                                <p className="text-gray-50 text-[50px] md:text-[60px] hidden md:block">
                                    I'm{" "}
                                </p>
                                <p className="bg-gradient-to-r from-violet-600  to-blue-500 text-transparent bg-clip-text">Fedi Ben Brahim</p>
                            </div>
                        </div>

                        {/* <p className="font-semibold text-gray-300/90 md:text-[25px] text-[22px]  ">
                            <span className="underline">Full Stack</span>
                            <span className=" "> Web Developer</span>
                        </p> */}
                        <p className="font-semibold text-gray-300/90 md:text-[25px] text-[4.2vw] flex capitalize antialiased md:self-start">
                            <span className="">I build </span>
                            <span className=" px-2">
                                <RotatingText
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.2}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1  "
                                    rotationInterval={9000}
                                    mainClassName="rounded-md bg-blue-200/20 px-2 "
                                    texts={rotatingWords}
                                />
                            </span>
                            <span className="">that </span>
                            <span className="pl-2 underline"> work </span>
                        </p>
                        <div className="flex gap-4">
                            <button className=" z-1 bg-gradient-to-b p-0 from-black to-gray-900 border border-gray-800 text-white text-center text-[16px]  px-[26px] rounded-[10px] cursor-pointer">
                                See Resume
                            </button>
                            {/* <button className="px-4 py-2 bg-gray-300 rounded-sm border-gray-400 border transition-colors hover:border-gray-800 cursor-pointer text-gray-700 hover:text-black">
                                Get In Contact
                            </button> */}
                            <StarBorder
                                as="button"
                                className="cursor-pointer "
                                color="rgba(255, 255, 255, 0.6)"
                                speed="2s"
                            >
                                Get In Contact
                            </StarBorder>
                        </div>
                        <div className="md:hidden flex flex-col ">
                            <div className="flex items-center gap-4 relative">
                                <SocialMediaIcon
                                    icon={logoGithub}
                                    className="h-10 w-10 text-white"
                                />
                                <SocialMediaIcon
                                    icon={logoLinkedin}
                                    className="h-10 w-10 text-blue-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a
                href="#projects"
                className="flex flex-col md:hidde  gap-5 absolute bottom-0 text-white items-center md:hidden"
            >
                <p>See Projects</p>
                <SocialMediaIcon
                    icon={arrowDownCircle}
                    className="h-10 w-10"
                    shake={true}
                />
            </a>
        </header>
    );
};

export default HeaderSection;
