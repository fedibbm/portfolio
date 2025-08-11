import React, { useEffect, useState } from "react";

const links = ["About", "Skills",  "Projects", "Contact"];

const NavBar: React.FC<{ className?: string }> = ({ className }) => {
    const [active, setActive] = useState<string>("");
    const [navbarToTop, setNavbarToTop] = useState<boolean>(false);
    // const [navbarFullWidth, setNavbarFullWidth] = useState<boolean>(false);
    // const [navbarItemsEnd, setNavbarItemsEnd] = useState<boolean>(false);

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

                    if (scrollPos >= top && scrollPos < top + height - 200) {
                        current = link.toLowerCase();
                        break;
                    }
                }
            }
            if (current !== active) {
                setActive(current);
            }
            if (
                window.scrollY + 10 >=
                document.getElementById("navbar-waypoint")!.offsetTop
            ) {
                setNavbarToTop(true);
            } else {
                setNavbarToTop(false);
            }
            // if (
            //     window.scrollY - 40 >=
            //     document.getElementById("navbar-waypoint")!.offsetTop
            // ) {
            //     setNavbarFullWidth(true);
            // } else {
            //     setNavbarFullWidth(false);
            // }
            // if (
            //     window.scrollY - 100 >=
            //     document.getElementById("navbar-waypoint")!.offsetTop
            // ) {
            //     setNavbarItemsEnd(true);
            // } else {
            //     setNavbarItemsEnd(false);
            // }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div id="navbar-waypoint" className="absolute top-[92vh]" />
            <div
                className={`hidden md:block  z-1000 h-16 left-1/2  -translate-x-1/2 rounded-md ${
                    navbarToTop
                        ? "top-0 fixed "
                        : "absolute top-[92vh] border-gray-900/50 border  border-t-white/10 border-x-gray-800/20 "
                }   ${className}`}
            >
                <div
                    className={`bg-gradient-to-b from-gray-800  via-transparent  h-full  rounded-sm  transition-all duration-200 ease-in  shadow-white/80 ${
                        navbarToTop ? "w-screen " : "w-86 "
                    } `}
                >
                    <ul
                        className={` flex transition-all duration-300 ease-in-out items-center  w-full h-full text-gray-600  ${
                            navbarToTop ? "justify-end" : "justify-center"
                        }`}
                    >
                        {links.map((label, index) => (
                            <React.Fragment key={index}>
                                <li
                                    className={`transition-all duration-300 ${
                                        label.toLowerCase() == "contact"
                                            ? "hidden md:block"
                                            : ""
                                    } `}
                                >
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
                                        className={`px-4 py-4 hover:bg-gray-600 hover:-translate-y-0.5 transition-all duration-400 cursor-pointer ${
                                            active === label.toLowerCase()
                                                ? `bg-gray-700 text-gray-100 ${
                                                      active === "about"
                                                          ? "rounded-l-sm"
                                                          : active === "contact"
                                                          ? "rounded-r-sm"
                                                          : ""
                                                  }`
                                                : "bg-transparent text-gray-300"
                                        }`}
                                    >
                                        {label}
                                    </a>
                                </li>
                                {/* {index < links.length - 1 && (
                                    <div
                                        className={`h-4/12 border-l border-gray-500 ${
                                            label.toLowerCase() == "skills"
                                                ? "hidden md:block"
                                                : ""
                                        } `}
                                    />
                                )} */}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
