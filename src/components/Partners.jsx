import { useEffect, useRef, useState } from "react";
import graphic from "../assets/graphic.png";
import runway from "../assets/runway.png";
import meity from "../assets/meity.png";
import startup from "../assets/startup.jpg";
import quality from "../assets/quality.png";
import maklaw from "../assets/maklaw.png";
import commonbee from "../assets/commonbee.png";
import kobaat from "../assets/kobaat.png";
import plastipack from "../assets/plastipack.png";
import aws from "../assets/aws.svg";

const partners = [
    { name: "Graphic Era University", logo: graphic },
    { name: "Runway Incubator", logo: runway },
    { name: "MeitY Startup Hub", logo: meity },
    { name: "Startup Uttarakhand", logo: startup },
    { name: "Quality Solution India", logo: quality },
    { name: "MAK LAW", logo: maklaw },
    { name: "CommonBee", logo: commonbee },
    { name: "KoBaatNi", logo: kobaat },
    { name: "Plastipack", logo: plastipack },
    { name: "AWS", logo: aws },
];

function Partners() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="partners"
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black text-center mb-14">
                    Trusted and Supported by
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 place-items-center">
                    {partners.map((p, i) => (
                        <div
                            key={i}
                            className="
                                bg-white border border-gray-100 rounded-2xl
                                w-full aspect-square p-5 md:p-6
                                flex flex-col items-center justify-between
                                hover:shadow-md hover:-translate-y-0.5 hover:border-gray-200
                                transition-all duration-300
                                cursor-default
                            "
                        >
                            <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className={`max-h-[80px] md:max-h-[100px] w-full object-contain mix-blend-multiply ${
                                        p.name === "AWS" ? "scale-75" : 
                                        p.name === "Quality Solution India" ? "scale-[1.4]" : 
                                        p.name === "CommonBee" ? "scale-110 md:scale-[1.4]" :
                                        p.name === "Graphic Era University" ? "scale-110 md:scale-125" :
                                        ["Plastipack", "MeitY Startup Hub"].includes(p.name) ? "scale-125" : ""
                                    }`}
                                />
                            </div>
                            <span className="text-xs font-medium text-gray-400 text-center leading-tight mt-4">
                                {p.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Partners;