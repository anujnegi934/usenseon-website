import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-16 pb-16 md:pb-20">

            <h1 className="
                text-4xl md:text-6xl lg:text-[82px]
                leading-[1.05]
                font-semibold
                tracking-tight
                max-w-4xl
                text-gray-900
                animate-fade-in-delay-1
            ">
                Revolutionizing healthcare,
                <br />
                <span className="text-blue-500">sustainably.</span>
            </h1>

            <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed animate-fade-in-delay-2">
                Smarter IV monitoring for safer patient outcomes — powered by precision sensors and real-time intelligence.
            </p>

            {/* CTA Button */}
            <div className="mt-8 animate-fade-in-delay-3">
                <Link
                    to="/contact"
                    className="inline-block bg-gray-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-blue-600 transition-colors duration-200 text-center shadow-sm hover:shadow-md"
                >
                    Get in Touch →
                </Link>
            </div>

        </section>
    );
}

export default Hero;