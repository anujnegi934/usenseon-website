import { Link } from "react-router-dom";
import usenseon from "../assets/usenseon.jpeg";

function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white">

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <img
                            src={usenseon}
                            alt="Usenseon Labs"
                            className="h-10 w-auto rounded-lg mb-4"
                        />
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            Revolutionizing healthcare technology through
                            innovation, research and intelligent solutions.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4">
                            Product
                        </h3>
                        <ul className="space-y-2.5">
                            <li><a href="#product" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Features</a></li>
                            <li><a href="#product" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Specifications</a></li>
                            <li><Link to="/contact" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2.5">
                            <li><a href="#about" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#awards" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Awards</a></li>
                            <li><a href="#partners" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="mailto:contact@usenseonlabs.com" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                                    contact@usenseonlabs.com
                                </a>
                            </li>
                            <li className="text-sm text-gray-400">
                                Dehradun, Uttarakhand, India
                            </li>
                            <li className="flex gap-3 pt-2">
                                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-gray-900 transition-colors" aria-label="X (Twitter)">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Usenseon Labs. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Terms & Conditions</a>
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Cookie Policy</a>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;