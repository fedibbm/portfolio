import React, { useEffect, useState } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

const NavBar: React.FC = ({className} : {className : string}) => {
    const [active, setActive] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            let current = "";

            for (const link of links) {
                const section = document.getElementById(link.toLowerCase());
                if (section) {
                    const top =
                        link.toLowerCase() === "about" ? 0 : section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPos >= top && scrollPos < top + height) {
                        current = link.toLowerCase();
                        break;
                    }
                }
            }
            if (current !== active) {
                setActive(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`hidden md:block fixed top-6 h-16 left-1/2 -translate-x-1/2 rounded-md z-10 ${className}`}>
            <div className="bg-white/10 h-full w-full rounded-full px-10 border  border-gray-900  shadow-white/80 shadow-[0_0_0px_rgba(0,0,0,0.3)] shadow-sp">
                <ul className="flex justify-between items-center w-full h-full text-gray-600 px-1">
                    {links.map((label, index) => (
                        <React.Fragment key={index}>
                            <li className={`px-2 mx-2 transition-all duration-300 ${
                                        label.toLowerCase() == "contact"
                                            ? "hidden md:block"
                                            : ""
                                    } `}>
                                <a
                                    href={
                                        label.toLowerCase() === "about"
                                            ? undefined
                                            : `#${label.toLowerCase()}`
                                    }
                                    onClick={
                                        label.toLowerCase() === "about"
                                            ? (e) => {
                                                  e.preventDefault();
                                                  window.scrollTo({
                                                      top: 0,
                                                      behavior: "smooth",
                                                  });
                                              }
                                            : undefined
                                    }
                                    className={` px-4 py-2  rounded-md hover:bg-gray-600 hover:-translate-y-0.5 transition-transform transition-colors duration-400 cursor-pointer ${
                                        active === label.toLowerCase()
                                            ? "bg-gray-500  text-gray-100"
                                            : "bg-transparent text-gray-300"
                                    } 
                                    `}
                                >
                                    {label}
                                </a>
                            </li>
                            {index < links.length - 1 && (
                                <div
                                    className={`h-8/12 border-l border-gray-300 ${
                                        label.toLowerCase() == "skills"
                                            ? "hidden md:block"
                                            : ""
                                    } `}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
