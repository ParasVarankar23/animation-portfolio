"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black text-white px-6 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                >
                    <h3 className="text-2xl font-bold">
                        Paras<span className="text-cyan-400">.</span>
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                        Software Developer • MERN Stack Developer
                    </p>
                </motion.div>

                {/* Center - Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400"
                >
                    <a href="#about" className="hover:text-cyan-400 transition">
                        About
                    </a>
                    <a href="#skills" className="hover:text-cyan-400 transition">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-cyan-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-cyan-400 transition">
                        Contact
                    </a>
                </motion.div>

                {/* Right - Social / Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center gap-4"
                >
                    <a
                        href="https://www.linkedin.com/in/paras-varankar-8232872aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="https://github.com/ParasVarankar23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="mailto:parasvarankar01@gmail.com"
                        className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                    >
                        <Mail size={18} />
                    </a>

                    <a
                        href="tel:+919309940782"
                        className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition"
                    >
                        <Phone size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/10 text-center text-sm text-gray-500"
            >
                © {new Date().getFullYear()} Paras Varankar. All rights reserved.
            </motion.div>
        </footer>
    );
}