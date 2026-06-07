import { useEffect, useRef, useState } from "react";

function LogoCloud() {
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
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20"
        >
            <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <p className="text-blue-500 text-xs font-medium uppercase tracking-widest mb-4">
                    Innovation in Healthcare
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Smarter Monitoring.
                    <br />
                    Better Patient Outcomes.
                </h2>

                <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-500 leading-relaxed">
                    Usenseon Labs is developing intelligent healthcare solutions
                    powered by real-time monitoring, smart alerts and clinical
                    innovation to improve patient safety and operational efficiency.
                </p>

            </div>
        </section>
    );
}

export default LogoCloud;