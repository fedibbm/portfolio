import SocialMediaIcon from "./SocialMediaIcon";
import { logoGithub } from "ionicons/icons";
import { logoLinkedin } from "ionicons/icons";
import copyCursor from "../assets/img/png/copy.png";
import HandDrawnArrowSvg from "../svg/HandDrawnSvg";
import { useState, useEffect } from "react";

const AboutMe: React.FC<{ className: string }> = ({ className }) => {
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
        <div
            className={`bg-gray-800 w-[min(95%,500px)] text-white normal-case p-8 text relative ${className}`}
        >
            <div className="flex w-full justify-between pb-4">
                <div className="flex gap-4 items-center">
                    {/* <h1 className="md:text-2xl text-xl uppercase  italicfont-bold">About me</h1> */}

                    <div className="flex gap-2 items-center ">
                        {/* Glow */}
                        <div className="absolute h-3 w-3 rounded-full bg-green-500 opacity-70 blur-sm" />

                        {/* Solid dot */}
                        <div className="relative h-3 w-3 bg-green-500 rounded-full" />

                        <p className="text-green-600 capitalize font-roboto">
                            Available for work
                        </p>
                    </div>
                </div>
                <div className="asolute left-1/2  flex flex-col ">
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
            <p className="italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, cupiditate optio reiciendis repudiandae quidem mollitia
                eligendi incidunt eveniet facere quisquam. Quis, nobis eveniet?
                Sint, perspiciatis? Excepturi error tempore necessitatibus
                doloribus.
            </p>
            <div className="absolute  top-full xl:flex flex-col hidden pt-4 -right-10  ">
                <div
                    onClick={handleCopy}
                    className="  flex items-center "
                    style={{ cursor: `url(${copyCursor}) 0 0, auto` }}
                >
                    <p className="text-gray-300 font- italic text-xl">{email}</p>
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
        </div>
    );
};

export default AboutMe;
