import { useEffect, useState } from "react";
import copyCursor from "../assets/img/png/copy.png";
import { logoGithub, logoLinkedin, arrowDownCircle } from "ionicons/icons";

import SocialMediaIcon from "./SocialMediaIcon";
import HandDrawnArrowSvg from "../svg/HandDrawnSvg";
import Particles from "../blocks/Backgrounds/Particles/Particles";
import StarBorder from "../blocks/Animations/StarBorder/StarBorder";
import AboutMe from "./AboutMe";

const HeaderSection: React.FC = () => {
    const email = "fedibenbrahim4@gmail.com";
    const [copied, SetCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        SetCopied(true);
    };

    useEffect(() => {
        if (!copied) return;
        if (copied) {
            setTimeout(() => {
                SetCopied(false);
            }, 1500);
        }
    }, [copied]);
    return (
        <header
            className="bg-gradient-to-t from-gray-800 to-black/70 rounded-md  h-dvh  border  flex  pt-50 md:pt-0 md:items-center items-start justify-center relative  select-none"
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
            <div className="absolute left-3/4 top-10 md:flex flex-col hidden  ">
                <div
                    onClick={handleCopy}
                    className="  flex items-center "
                    style={{ cursor: `url(${copyCursor}) 0 0, auto` }}
                >
                    <p className="text-gray-300 font-bold text-xl">{email}</p>
                    <p
                        className={` px-2 transition-all duration-300 text-gray-100 rounded-md  ${
                            copied ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        copied &#10003;
                    </p>
                </div>
                <div className="flex flex-col items-center text-sm text-gray-400 mt-1 w-30">
                    <HandDrawnArrowSvg className="h-10 w-10" />
                    <p className="pt-1 font-medium self-start">My e-mail</p>
                </div>
            </div>

            <div className="flex items-start md:relative pt-30">
                <div className="flex gap-6 flex-col items-center uppercase ">
                    <p className="font-bold text-[60px] md:text-[100px] tracking-wider text-blue-700 font-bebas text-center">
                        Fedi Ben Brahim
                    </p>

                    <div className="md:hidden flex gap-4 items-center pt-6 absolute md:-right-1/3 md:top-7 right-4 top-0 h-0">
                        {/* Glow */}
                        <div className="absolute h-3 w-3 rounded-full bg-green-500 opacity-70 blur-sm" />

                        {/* Solid dot */}
                        <div className="relative h-3 w-3 bg-green-500 rounded-full" />

                        <p className="text-gray-300 capitalize md:text-xl text-md">
                            Available
                        </p>
                    </div>
                    {/* <p className="font-semibold text-gray-300/90 md:text-[25px] text-[22px]  ">
                        <span className="underline">Full Stack</span>
                        <span className=" "> Web Developer</span>
                    </p> */}
                    

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
                    <AboutMe className="hidden md:block"  />

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
            <a
                href="#projects"
                className="flex flex-col md:hidde  gap-5 absolute bottom-0 text-white items-center "
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
