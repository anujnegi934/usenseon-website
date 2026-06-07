import { useEffect, useRef, useState } from "react";

function Benefits() {
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
            id="product"
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28"
        >
            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                <div
                    className="relative overflow-hidden rounded-2xl border border-gray-200/60"
                    style={{
                        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 40%, #f0f4ff 70%, #f8fafc 100%)",
                    }}
                >
                    {/* Dot grid background */}
                    <div
                        className="absolute inset-0 opacity-[0.35]"
                        style={{
                            backgroundImage: "radial-gradient(circle, #cbd5e1 0.8px, transparent 0.8px)",
                            backgroundSize: "24px 24px",
                        }}
                    />

                    {/* Animated glow orbs */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full transition-all duration-[3000ms] ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
                    />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full transition-all duration-[4000ms] delay-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)" }}
                    />

                    {/* Animated ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div
                            className={`w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full border transition-all duration-[2000ms] ${visible ? "scale-100 opacity-100 border-blue-200/50" : "scale-75 opacity-0 border-transparent"}`}
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div
                            className={`w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border transition-all duration-[2500ms] delay-300 ${visible ? "scale-100 opacity-100 border-gray-200/40" : "scale-75 opacity-0 border-transparent"}`}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 md:py-36 px-6">

                        {/* Pulsing center dot */}
                        <div className={`mb-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                            <div className="relative w-3 h-3 mx-auto">
                                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                                <div className="relative w-3 h-3 rounded-full bg-blue-500" />
                            </div>
                        </div>

                        <p className={`text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-blue-500 mb-6 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Our Products
                        </p>

                        {/* Coming Soon — shimmer */}
                        <h2
                            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight pb-2 mb-5 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                            style={{
                                background: "linear-gradient(90deg, #e2e8f0, #94a3b8, #3b82f6, #94a3b8, #e2e8f0)",
                                backgroundSize: "200% 100%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animation: visible ? "shimmer 3s ease-in-out infinite" : "none",
                            }}
                        >
                            Coming Soon
                        </h2>

                        {/* Subtle line */}
                        <div className={`w-10 h-px bg-gray-300 mb-5 transition-all duration-1000 delay-[900ms] ${visible ? "opacity-100 w-10" : "opacity-0 w-0"}`} />

                        <p className={`text-sm md:text-base text-gray-400 font-medium tracking-wide max-w-2xl mx-auto transition-all duration-700 delay-[1000ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            Discover the innovative healthcare technologies being developed by Usenseon Labs to improve patient safety, monitoring, and clinical efficiency.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Benefits;