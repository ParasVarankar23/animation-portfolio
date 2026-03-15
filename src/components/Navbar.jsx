"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold tracking-wide"
                >
                    Paras<span className="text-cyan-400">.</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            className="relative text-sm font-medium text-gray-300 transition hover:text-cyan-400 group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}

                    {/* Resume Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        href="/resume.pdf"
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 backdrop-blur-md hover:bg-cyan-400 hover:text-black transition"
                    >
                        <Download size={16} />
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-md"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
                    >
                        <div className="px-6 py-5 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-400/20 transition"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black"
                            >
                                <Download size={16} />
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}