import { TfiNewWindow } from "react-icons/tfi";

const ContactSection: React.FC = () => {
    return (
        <div className="py-10 md:pt-30" id="contact">
            <div className="rounded-md flex flex-col  gap-10 items-center relative pb-400">
                <div className="w-[min(95%,900px)] flex flex-col gap-10 pt-10 items-center">
                    <h1 className="text-white font-bold text-3xl capitalize font-bebas px-4 self-start">
                        Contact Me
                    </h1>
                    <div className="w-full bg-gradient-to-tl from-gray-900 via-gray-900/30 to-gray-900 rounded-md p-10 drop-shadow ">
                        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-lg text-white font-semibold">
                            <dt>E-mail:</dt>
                            <dd>fedibenbrahim4@gmail.com</dd>

                            <dt>Phone:</dt>
                            <dd>+216 58 941 719</dd>

                            <dt>Github:</dt>
                            <dd>
                                <a
                                    className="flex items-center gap-4 underline"
                                    href="https://github.com/fedibbm"
                                    target="blank"
                                >
                                    fedibbm <TfiNewWindow />
                                </a>
                            </dd>

                            <dt>Linkedin:</dt>
                            <dd>
                                <a
                                    href="https://www.linkedin.com/in/fedi-ben-brahim/"
                                    target="blank"
                                    className="flex items-center gap-4 underline"
                                >
                                    Fedi Ben Brahim <TfiNewWindow />
                                </a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
