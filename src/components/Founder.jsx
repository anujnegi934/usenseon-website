import { useEffect, useRef, useState } from "react";
import founderImage from "../assets/rangan_raj_ghosh.jpg";

function Founder() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="founder"
            ref={sectionRef}
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-10 text-center md:text-left ml-2">
                    Founder
                </h2>

                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 lg:gap-16 items-center hover:shadow-md transition-shadow duration-300">

                    {/* Left — Image Placeholder */}
                    <div className="w-full md:w-2/5">
                        <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center border border-gray-100 overflow-hidden relative group shadow-sm">
                            <img 
                                src={founderImage} 
                                alt="Rangan Raj Ghosh" 
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="w-full md:w-3/5">
                        <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-blue-500 mb-6">
                            A visionary for smarter healthcare.
                        </h3>

                        <div className="space-y-6">
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                Rangan Raj Ghosh is the Founder of Usenseon Labs and a B.Sc. Microbiology student at UPES, actively balancing his academic journey with building innovative technology solutions. A self-proclaimed technology enthusiast, he is passionate about exploring the intersection of healthcare and technology to address real-world challenges. His work brings together life sciences, embedded systems, connected sensing technologies, and cloud computing to develop practical, impact-driven innovations. Recognized for his commitment to sustainability and innovation, he received the Young Innovator Award in Sustainability from Graphic Era University. Through Usenseon Labs, Rangan is dedicated to transforming ideas into meaningful solutions that improve lives and contribute to a smarter, healthier future.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Founder;
