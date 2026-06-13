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
            className="max-w-7xl mx-auto px-6 md:px-8 pt-2 pb-12 md:pb-16 min-h-[calc(100vh-70px)] flex flex-col justify-center"
            style={{ scrollMarginTop: '16px' }}
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-5 text-center md:text-left ml-2">
                    Founder
                </h2>

                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-8 lg:gap-10 items-center hover:shadow-md transition-shadow duration-300">

                    {/* Left — Image Placeholder */}
                    <div className="w-full md:w-1/3">
                        <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden relative group shadow-sm">
                            <img 
                                src={founderImage} 
                                alt="Rangan Raj Ghosh" 
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-blue-500 mb-4">
                            A visionary for smarter healthcare.
                        </h3>

                        <div className="space-y-4">
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
