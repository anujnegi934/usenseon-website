import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
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
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={ref}
            className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50"
            style={{ scrollMarginTop: '80px' }}
        >
            <div className={`max-w-3xl mx-auto text-center px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-2">
                    Contact Us
                </h2>

                <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest text-blue-500 mb-8">
                    Get in Touch
                </h3>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Whether you're a healthcare professional, researcher, investor, industry partner, or technology enthusiast, we'd be happy to connect and share more about our work at Usenseon Labs.
                </p>

                {/* CTA Button */}
                <div className="mb-12">
                    <a
                        href="mailto:contact@usenseonlabs.com"
                        className="bg-gray-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-blue-600 transition-colors duration-200 inline-block"
                    >
                        Contact Us →
                    </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
                    <span>contact@usenseonlabs.com</span>
                    <span className="hidden sm:inline text-gray-200">|</span>
                    <span>Dehradun, Uttarakhand, India</span>
                </div>

            </div>
        </section>
    );
}

export default Contact;