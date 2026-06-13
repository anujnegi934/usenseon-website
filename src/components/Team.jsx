import { useEffect, useRef, useState } from "react";
import ctoImage from "../assets/sanjeet_maity.jpg";
import ishaanImage from "../assets/ishaan_narang.jpg";

const teamMembers = [
    {
        name: "Sanjeet Maity",
        role: "CTO",
        initials: "SM",
        image: ctoImage,
        imageClass: "object-center group-hover:scale-105",
        description: "Sanjeet Maity brings extensive experience in transport systems and product development, having led transport supply operations and reverse-engineered critical products for DMRC and Gujarat Metro. He previously headed R&D at Ezox, where he developed EV charging solutions for two-wheeler e-mobility. At Usenseon Labs, he contributes expertise in product engineering, system optimization, manufacturability, and the translation of innovative concepts into scalable, real-world solutions.",
    },
    {
        name: "Dr. Ishaan Narang",
        role: "Angel Investor",
        initials: "IN",
        image: ishaanImage,
        imageClass: "object-top scale-105 group-hover:scale-110",
        description: "Dr. Ishaan Narang serves as an Angel Investor and mentor to our team, bringing valuable industry expertise, strategic guidance, and a strong innovation-driven mindset. His support helps us refine our vision, strengthen our business approach, build meaningful industry connections, and accelerate the development and growth of our technology-driven healthcare solutions.",
    },
];

function TeamCard({ member }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
            {/* Image */}
            <div className="w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden border-b border-gray-100">
                {member.image ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${member.imageClass || "object-center group-hover:scale-105"}`}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-300">
                        <span className="transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-200">
                            {member.initials}
                        </span>
                    </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                {/* Role badge on image */}
                <span className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {member.role}
                </span>
            </div>

            {/* Info */}
            <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                </h3>
                <div className="relative">
                    <p className={`text-gray-500 text-xs leading-relaxed transition-all duration-300 ${expanded ? "" : "line-clamp-2"}`}>
                        {member.description}
                    </p>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-2 text-blue-500 hover:text-blue-600 text-xs font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                        {expanded ? "Read less" : "Read more"}
                        <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                            fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function Team() {
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
            id="team"
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-8 pt-2 pb-12 md:pb-16 min-h-[calc(100vh-70px)] flex flex-col justify-center"
            style={{ scrollMarginTop: '16px' }}
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black mb-1">
                    Our Team
                </h2>

                <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-500 mb-6">
                    The People Behind
                </h3>

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                    {teamMembers.map((member, i) => (
                        <TeamCard key={i} member={member} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Team;
