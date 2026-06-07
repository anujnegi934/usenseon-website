import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative w-full overflow-hidden max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-20 md:pb-28 min-h-[calc(100vh-70px)] flex flex-col justify-center">

            {/* Ambient Animated Background */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="
                    text-5xl md:text-7xl lg:text-[88px]
                    leading-[1.02]
                    font-bold
                    tracking-tighter
                    max-w-5xl
                    text-black
                    animate-fade-in-delay-1
                ">
                    Revolutionizing healthcare,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        sustainably.
                    </span>
                </h1>

                <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed animate-fade-in-delay-2 font-medium">
                    Smarter IV monitoring for safer patient outcomes — powered by precision sensors and real-time intelligence.
                </p>

                {/* CTA Button */}
                <div className="mt-10 animate-fade-in-delay-3">
                    <a
                        href="mailto:contact@usenseonlabs.com"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 group-hover:opacity-60 transition duration-200 blur-sm"></div>
                        <span className="relative">Get in Touch →</span>
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Hero;