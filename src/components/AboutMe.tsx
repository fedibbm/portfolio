import SocialMediaIcon from "./SocialMediaIcon";
import { logoGithub } from "ionicons/icons";
import { logoLinkedin } from "ionicons/icons";

const AboutMe : React.FC<{className: string}> = ({className}) => {
    return (
        <div className={`bg-gray-500/20 w-[min(95%,700px)] text-white normal-case p-8 text ${className}`}>
            <div className="flex w-full justify-between pb-4">
                <div className="flex gap-4 items-center">
                    <h1 className="md:text-2xl text-xl uppercase  italicfont-bold">About me</h1>

                    <div className="hidden md:flex gap-2 items-center ">
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
        </div>
    );
};

export default AboutMe;
