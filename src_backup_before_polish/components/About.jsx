import { useEffect, useRef, useState } from "react";

const stats = [
    { value: "2025", label: "Founded" },
    { value: "2", label: "Patents Filed" },
    { value: "3", label: "Awards Won" },
];

function About() {
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
            id="about"
            ref={sectionRef}
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-4">
                    About Us
                </p>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Left — Mission */}
                    <div className="lg:w-3/5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
                            Building the future of
                            <br />
                            <span className="text-blue-500">patient safety.</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                Usenseon Labs is a healthcare technology startup founded in 2025 with a vision to improve patient safety through intelligent medical monitoring solutions. We focus on combining healthcare, engineering, and real-time data analytics to create products that help hospitals, clinics, and healthcare professionals deliver better outcomes.
                            </p>

                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                Our flagship innovation, IVX, is designed to transform intravenous fluid monitoring by providing accurate, real-time tracking and alerts. By reducing manual monitoring requirements and minimizing human error, our technology helps healthcare providers focus more on patient care.
                            </p>

                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                At Usenseon Labs, we believe healthcare innovation should be accessible, reliable, and impactful. Through continuous research, development, and collaboration with industry experts, we are building solutions that contribute to a smarter and safer healthcare ecosystem.
                            </p>
                        </div>
                    </div>

                    {/* Right — Stats */}
                    <div className="lg:w-2/5 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className={`
                                        bg-white border border-gray-100 rounded-3xl p-8
                                        hover:shadow-xl hover:-translate-y-1 hover:border-blue-100
                                        transition-all duration-300 flex flex-col justify-center items-center text-center
                                        ${i === 2 ? 'sm:col-span-2' : ''}
                                        ${visible ? "animate-fade-in" : "opacity-0"}
                                    `}
                                    style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                                >
                                    <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 tracking-tight">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
