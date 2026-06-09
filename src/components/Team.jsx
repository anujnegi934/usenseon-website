import { useEffect, useRef, useState } from "react";
import ctoImage from "../assets/sanjeet_maity.jpg";
import ishaanImage from "../assets/ishaan_narang.jpg";

const teamMembers = [
    {
        name: "Member One",
        role: "Founder & CEO",
        initials: "M1",
        description: "Driving the vision for smarter healthcare monitoring. Passionate about building technology that saves lives.",
    },
    {
        name: "Sanjeet Maity",
        role: "CTO",
        initials: "SM",
        image: ctoImage,
        imageClass: "object-center group-hover:scale-105",
        description: "As CTO, Sanjeet Maity leads hardware engineering, leveraging expertise in transport systems, product development, and EV charging technologies to drive innovation.",
    },
    {
        name: "Dr. Ishaan Narang",
        role: "Angel Investor",
        initials: "IN",
        image: ishaanImage,
        imageClass: "object-top scale-105 group-hover:scale-110",
        description: "Assistant Director at QSI India Pvt. Ltd., serves as an Angel Investor, providing strategic guidance, industry insights, and support for our growth journey.",
    },
];

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
            className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24"
        >
            <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-2">
                    Our Team
                </h2>

                <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-blue-500 mb-14">
                    The People Behind
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 group flex flex-col"
                        >
                            {/* Large Image Header */}
                            <div className="w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-3xl font-bold text-gray-300 relative overflow-hidden border-b border-gray-100">
                                {member.image ? (
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className={`w-full h-full object-cover transition-transform duration-500 ${member.imageClass || "object-center group-hover:scale-105"}`} 
                                    />
                                ) : (
                                    <span className="transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-200">
                                        {member.initials}
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>

                            {/* Info */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Team;
