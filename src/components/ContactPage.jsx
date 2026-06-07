import { Link } from "react-router-dom";
import usenseon from "../assets/usenseon.jpeg";

function ContactPage() {

    return (
        <div className="min-h-screen bg-[#FAFAFA]">

            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
                    <Link to="/">
                        <img src={usenseon} alt="Usenseon Labs" className="h-9 w-auto rounded-lg" />
                    </Link>
                    <Link
                        to="/"
                        className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                    {/* Left Column — Info */}
                    <div className="lg:col-span-2">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-4">
                            Contact Us
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                            Let's start a
                            <br />
                            conversation.
                        </h1>

                        <p className="text-gray-500 text-base leading-relaxed mb-10">
                            Whether you're a hospital, distributor, investor, or
                            healthcare professional — we'd love to hear from you.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-gray-400">
                                    01
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                                    <a href="mailto:contact@usenseonlabs.com" className="text-sm text-gray-500 hover:text-blue-500 transition-colors">
                                        contact@usenseonlabs.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-gray-400">
                                    02
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Location</h3>
                                    <p className="text-sm text-gray-500">
                                        Dehradun, Uttarakhand
                                        <br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold text-gray-400">
                                    03
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Social</h3>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-sm text-gray-500 hover:text-blue-500 transition-colors">LinkedIn</a>
                                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">X / Twitter</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Right Column — Form */}
                    <div className="lg:col-span-3">

                        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10">

                            <div className="flex flex-col items-center justify-center text-center h-full min-h-[300px] py-10">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                    Send us an Email
                                </h2>

                                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                                    We prefer direct communication. Click the button below to open your email client and message us directly.
                                </p>

                                <a
                                    href="mailto:contact@usenseonlabs.com"
                                    className="bg-gray-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-blue-600 transition-colors duration-200 inline-block shadow-sm"
                                >
                                    contact@usenseonlabs.com →
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Simple footer */}
            <footer className="border-t border-gray-100 py-6">
                <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} Usenseon Labs. All rights reserved.</p>
                    <Link to="/" className="hover:text-gray-900 transition-colors">← Back to Home</Link>
                </div>
            </footer>

        </div>
    );
}

export default ContactPage;
