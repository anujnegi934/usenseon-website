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
        >
            <div className={`max-w-3xl mx-auto text-center px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

                <p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-4">
                    Get in Touch
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
                    Ready to transform
                    <br />
                    <span className="text-blue-500">patient care?</span>
                </h2>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Schedule a quick call to learn how Usenseon Labs
                    can support your healthcare innovation journey.
                    We'd love to hear from you.
                </p>

                {/* CTA Button */}
                <div className="mb-12">
                    <Link
                        to="/contact"
                        className="bg-gray-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-blue-600 transition-colors duration-200 inline-block"
                    >
                        Contact Us →
                    </Link>
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