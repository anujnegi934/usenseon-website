import { useEffect, useRef, useState } from "react";

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

                <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-6 text-center md:text-left ml-2">
                    Our Founder
                </p>

                <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 lg:gap-16 items-center hover:shadow-md transition-shadow duration-300">

                    {/* Left — Image Placeholder */}
                    <div className="w-full md:w-2/5">
                        <div className="aspect-[4/5] bg-gray-50 rounded-2xl flex items-center justify-center text-sm font-medium text-gray-400 border border-gray-100 overflow-hidden relative group">
                            <span className="relative z-10">Founder Image Placeholder</span>
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight mb-8">
                            A vision for <br className="hidden lg:block"/>
                            <span className="text-blue-500">smarter healthcare.</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                Usenseon Labs was founded by a passionate innovator dedicated to transforming healthcare through technology. With a strong background in research, engineering, and problem-solving, the founder envisioned a future where intelligent healthcare systems could improve patient outcomes and reduce operational challenges in hospitals.
                            </p>

                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                Under this vision, Usenseon Labs continues to develop impactful healthcare technologies that combine innovation, precision, and real-world usability.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Founder;
