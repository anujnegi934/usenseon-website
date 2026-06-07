import { useEffect, useRef, useState } from "react";

const awards = [
    {
        title: "Healthcare Innovation Excellence Award",
        organization: "National Health Tech Summit",
        description: "Recognized for outstanding contribution to patient safety and intelligent monitoring solutions.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )
    },
    {
        title: "Emerging MedTech Startup Recognition",
        organization: "MedTech India Initiative",
        description: "Acknowledged as one of the most promising emerging startups in the medical technology sector.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Research & Technology Impact Award",
        organization: "Institute of Medical Engineering",
        description: "Awarded for significant technological advancements in non-contact sensor fusion.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
];

function Testimonials() {
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
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="awards"
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-4">
                    Recognition
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-14">
                    Awards & Recognition
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {awards.map((award, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mb-6 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors shadow-sm border border-gray-100">
                                {award.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                                {award.title}
                            </h3>
                            <p className="text-blue-500 text-sm font-medium mb-3">
                                {award.organization}
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {award.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonials;