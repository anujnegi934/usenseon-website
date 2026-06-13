import { useState } from "react";
import { Link } from "react-router-dom";
import usenseon from "../assets/usenseon.jpeg";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
            <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">

                {/* Logo */}
                <a href="#">
                    <img
                        src={usenseon}
                        alt="Usenseon Labs"
                        className="h-11 w-auto rounded-lg hover:opacity-80 transition-opacity"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        About Us
                    </a>

                    <a href="#team" onClick={(e) => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        Team
                    </a>
                    <a href="#founder" onClick={(e) => { e.preventDefault(); document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        Founder
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        Contact
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-6 pt-4 space-y-4 animate-fade-in shadow-sm">
                    <a href="#about" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition">About Us</a>

                    <a href="#team" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition">Team</a>
                    <a href="#founder" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition">Founder</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition">Contact</a>
                </div>
            )}
        </header>
    );
}

export default Navbar;