import { useEffect, useRef, useState } from "react";

const teamMembers = [
    {
        name: "Member One",
        role: "Founder & CEO",
        initials: "M1",
        description: "Driving the vision for smarter healthcare monitoring. Passionate about building technology that saves lives.",
    },
    {
        name: "Member Two",
        role: "CTO",
        initials: "M2",
        description: "Leading engineering and product development. Expertise in embedded systems, IoT architecture and sensor design.",
    },
    {
        name: "Member Three",
        role: "Design & Strategy Lead",
        initials: "M3",
        description: "Shaping the user experience and go-to-market strategy. Focused on making complex technology feel simple.",
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

                <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-4">
                    The People Behind
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-14">
                    Our Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-200 transition-all duration-300 group"
                        >
                            {/* Avatar */}
                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-sm font-bold text-gray-400 mb-6 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                                {member.initials}
                            </div>

                            {/* Info */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {member.name}
                            </h3>
                            <p className="text-blue-500 text-sm font-medium mb-4">
                                {member.role}
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Team;
