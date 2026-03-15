"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Chatbot Frontend",
        desc: "A WhatsApp-style fake messaging chatbot interface with a clean and interactive UI experience.",
        link: "https://chatbot-frontend-beta-six.vercel.app/",
        tag: "UI / Chat App",
    },
    {
        title: "Hospityx Clinic Panel",
        desc: "A management panel designed for a normal clinic with organized dashboard functionality and user flow.",
        link: "https://hospityx-frontend.vercel.app/",
        tag: "Dashboard / Clinic Panel",
    },
    {
        title: "Paras Resort Management",
        desc: "A resort management platform with booking-style UI and structured admin-like management features.",
        link: "https://paras-resort.vercel.app/",
        tag: "Management System",
    },
    {
        title: "Personal Portfolio",
        desc: "A modern portfolio website showcasing projects, experience, and frontend development skills.",
        link: "https://portfolio-vuiw.vercel.app/",
        tag: "Portfolio",
    },
    {
        title: "SNK College Website",
        desc: "A responsive and informative college website with multiple academic and institutional sections.",
        link: "https://snk-college.vercel.app/",
        tag: "Educational Website",
    },
    {
        title: "Product Expiry Tracker",
        desc: "A product expiry monitoring platform for tracking expiry-related data in an organized way.",
        link: "https://product-expiry-frontend.vercel.app/",
        tag: "Utility / Tracker",
    },
    {
        title: "UPSC Institute Platform",
        desc: "A platform designed for UPSC institute-like use cases with educational and structured content sections.",
        link: "https://upsc-frontend-rho.vercel.app/",
        tag: "Institute Platform",
    },
    {
        title: "SA Tours",
        desc: "A travel and tour management website designed for showcasing tour packages, destinations, and booking-style experiences.",
        link: "https://sa-tours.vercel.app/",
        tag: "Travel / Tour Management",
    },
    {
        title: "Animation Portfolio",
        desc: "A premium animated developer portfolio with modern UI, smooth interactions, and advanced visual effects, currently under development.",
        link: "https://animation-portfolio.vercel.app/",
        tag: "Animated Portfolio",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative bg-black text-white py-10 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-16 left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-16 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-3">
                        Featured Projects
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-5">
                        Real-world projects I’ve built
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-8">
                        A collection of live deployed projects covering management systems,
                        educational platforms, business dashboards, utility tools, travel platforms,
                        and modern portfolio experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-cyan-400/30 transition block"
                        >
                            {/* Top */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                                    {project.tag}
                                </span>
                                <ArrowUpRight
                                    className="text-gray-400 group-hover:text-cyan-400 transition"
                                    size={18}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-7">{project.desc}</p>

                            {/* Bottom Link Text */}
                            <div className="mt-5 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300">
                                View Live Project →
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}