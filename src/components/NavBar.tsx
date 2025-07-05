import React, { useEffect, useState } from "react";

const links = ["About", "Projects", "Skills", "Contact"];

const NavBar: React.FC = () => {
    const [active, setActive] = useState<string>("");

    const [highlightStyle, setHighlightStyle] = useState<{ left: number; width: number }>({
        left: 0,
        width: 0,
    });

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
        <div className="fixed top-6 h-16 left-1/2 -translate-x-1/2 rounded-md z-10">
            <div className="bg-gray-100 h-full w-full rounded-md border border-gray-300">
                <ul className="flex justify-between items-center h-full text-gray-600 px-1">
                    {links.map((label, index) => (
                        <React.Fragment key={index}>
                            <li className="px-2 mx-2 transition-all duration-300 relative">
                              
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
                                    className={`block px-4 py-2 text-gray-600 rounded-md hover:bg-gray-300 hover:-translate-y-0.5 transition-transform transition-colors duration-400 cursor-pointer ${
                                        active === label.toLowerCase()
                                            ? "bg-gray-300  text-gray-700"
                                            : "bg-transparent"
                                    }`}
                                >
                                    {label}

                                </a>

                            </li>
                            {index < links.length - 1 && (
                                <div className="h-8/12 border-l border-gray-300" />
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
