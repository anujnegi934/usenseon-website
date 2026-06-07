import { useState } from "react";
import { Link } from "react-router-dom";
import usenseon from "../assets/usenseon.jpeg";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        const formDataObj = new FormData(e.target);
        
        // --- Web3Forms Configuration ---
        // Get your free access key from https://web3forms.com/ and paste it below
        formDataObj.append("access_key", "b446a5a9-102a-4456-8c3e-2ae2dc2be981");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
            } else {
                setSubmitError("Something went wrong. Please try again.");
                console.error("Form error:", data);
            }
        } catch (error) {
            setSubmitError("Network error. Please check your connection.");
            console.error("Fetch error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

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

                            {!submitted ? (
                                <>
                                    <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                        Send us a message
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-5">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                                    Your Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                                    Company / Organization
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                                                    placeholder="Your organization"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                                Subject *
                                            </label>
                                            <select
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all bg-white appearance-none"
                                            >
                                                <option value="">Select a topic</option>
                                                <option value="demo">Request a Demo</option>
                                                <option value="partnership">Partnership Inquiry</option>
                                                <option value="investment">Investment Inquiry</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="support">Technical Support</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                                                placeholder="Tell us about your needs..."
                                            />
                                        </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full bg-gray-900 text-white text-sm font-medium py-3.5 rounded-full transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                                            >
                                                {isSubmitting ? "Sending..." : "Send Message →"}
                                            </button>

                                            {submitError && (
                                                <p className="text-red-500 text-sm text-center mt-3">{submitError}</p>
                                            )}

                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                                        <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Message Sent
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-6">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" }); }}
                                        className="text-sm text-blue-500 font-medium hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            )}

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
