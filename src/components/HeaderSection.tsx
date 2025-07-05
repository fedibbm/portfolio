import { useEffect, useState } from "react";
import copyCursor from "../assets/img/png/copy.png";
import { logoGithub, logoLinkedin } from "ionicons/icons";
import SocialMediaIcon from "./SocialMediaIcon";
import HandDrawnArrowSvg from "../svg/HandDrawnSvg";

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
            className="bg-gray-200 rounded-md h-[900px] p-[1px] border border-white flex items-center justify-center relative "
            id="about"
        >
            {/* email */}
            <div className="absolute left-3/4 top-5 flex flex-col ">
                <div
                    onClick={handleCopy}
                    className="  flex items-center "
                    style={{ cursor: `url(${copyCursor}) 0 0, auto` }}
                >
                    <p className="text-gray-500 font-bold text-xl">{email}</p>
                    <p
                        className={` px-2 transition-all duration-300 text-gray-700 rounded-md  ${
                            copied ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        copied &#10003;
                    </p>
                </div>
                <div className="flex flex-col items-center text-sm text-gray-500 mt-1 w-30">
                    <HandDrawnArrowSvg className="h-10 w-10" />
                    <p className="pt-1 font-medium self-start">My e-mail</p>
                </div>
            </div>

            <div className="flex gap-10 items-start relative">
                <div className="flex flex-col items-center uppercase">
                    <p className="font-bold text-[70px] tracking-wider text-blue-900 font-bebas">
                        Fedi Ben Brahim
                    </p>
                    <p className="font-semibold text-gray-500 text-[25px] font- ">
                        <span className="underline">Full Stack</span>
                        <span className=" "> Web Devloper</span>
                    </p>
                    <div className="pt-8 flex gap-4">
                        <button className="px-4 py-2 bg-gray-300 rounded-sm border-gray-400 border transition-colors hover:border-gray-800 cursor-pointer text-gray-700 hover:text-black">
                            See Resume
                        </button>
                        <button className="px-4 py-2 bg-gray-300 rounded-sm border-gray-400 border transition-colors hover:border-gray-800 cursor-pointer text-gray-700 hover:text-black">
                            Get In Contact
                        </button>
                    </div>
                    <div className="flex gap-4 items-center pt-6 absolute -right-1/3 top-7 h-0">
                        {/* Glow */}
                        <div className="absolute h-3 w-3 rounded-full bg-green-500 opacity-70 blur-sm" />

                        {/* Solid dot */}
                        <div className="relative h-3 w-3 bg-green-500 rounded-full" />

                        <p className="text-gray-500 capitalize text-xl">Available</p>
                    </div>
                    
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 flex flex-col ">
                        <div className="flex items-center gap-4 relative">
                            <SocialMediaIcon
                                icon={logoGithub}
                                className="h-10 w-10"
                            />
                            <SocialMediaIcon
                                icon={logoLinkedin}
                                className="h-10 w-10 text-blue-800"
                            />
                        </div>
                    </div>
                    
            </div>
        </header>
    );
};

export default HeaderSection;
