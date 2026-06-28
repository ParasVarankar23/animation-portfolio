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
        link: "https://animation-portfolio-azure.vercel.app/",
        tag: "Animated Portfolio",
    },
    {
        title: "Puzzle Game",
        desc: "A modern sliding puzzle game with timer, move counter, best score tracking, and a clean responsive interface built with Next.js and Tailwind CSS.",
        link: "https://puzzle-sandy-kappa.vercel.app/",
        tag: "Game / Puzzle",
    },
    {
        title: "Rock Paper Scissors",
        desc: "An interactive Rock Paper Scissors game where players challenge the computer with a smooth and responsive experience.",
        link: "https://rockerpaperscissor.vercel.app/",
        tag: "Game / Fun",
    },
    {
        title: "Snake Game",
        desc: "A classic Snake game featuring score tracking, responsive controls, and a modern web interface.",
        link: "https://snake-game-one-orcin.vercel.app/",
        tag: "Game / Arcade",
    },
    {
        title: "Tic Tac Toe",
        desc: "A simple and enjoyable Tic Tac Toe game with a clean design and two-player gameplay.",
        link: "https://tictactoe-games-eight.vercel.app/",
        tag: "Game / Board",
    },
    {
        title: "Sister Birthday Website",
        desc: "A personalized birthday website with beautiful animations and interactive elements for memorable celebrations.",
        link: "https://sanvi-ivory.vercel.app/",
        tag: "Creative Website",
    },
    {
        title: "CodeSync Merge",
        desc: "A modern diff and merge editor with syntax highlighting, comparison tools, merge actions, copy functionality, and dark/light themes.",
        link: "https://codesyncmerge.vercel.app/",
        tag: "Developer Tool",
    },
    {
        title: "CodeVault Editor",
        desc: "A versatile online editor where users can paste, write, and manage code, notes, or any text with a clean and developer-friendly interface.",
        link: "https://codevault-blue.vercel.app/",
        tag: "Developer Tool / Editor",
    },
    {
        title: "Agastya Park",
        desc: "A modern website showcasing park information, facilities, and visitor-friendly content with an elegant interface.",
        link: "https://agastya-park.vercel.app/",
        tag: "Business Website",
    },
    {
        title: "Shree Morya",
        desc: "A professionally designed responsive website built to showcase services and information with modern layouts.",
        link: "https://shreemorya.vercel.app/",
        tag: "Business Website",
    },
    {
        title: "Girlfriend Birthday Wishes",
        desc: "A beautifully designed romantic website featuring heartfelt messages, interactive elements, and elegant animations.",
        link: "https://girlfriend-wishes.vercel.app/",
        tag: "Love / Creative Website",
    },
    {
        title: "Shravan Portfolio",
        desc: "A modern and responsive personal portfolio website showcasing skills, projects, and experience with clean layouts and interactive sections.",
        link: "https://shravan-portfolio-mu.vercel.app/",
        tag: "Portfolio Website",
    },
    {
        title: "Vision Academy",
        desc: "An educational platform designed for students and institutes, providing organized content, resources, and a user-friendly learning experience.",
        link: "https://visionacademy-iota.vercel.app/",
        tag: "Educational Platform",
    },
    {
        title: "Gym Management Platform",
        desc: "A modern fitness and gym management website designed to provide workout plans, fitness information, and a smooth user experience with responsive layouts.",
        link: "https://gym-two-puce.vercel.app/",
        tag: "Fitness / Gym Website",
    },
    {
        title: "PCACS Website",
        desc: "A modern and responsive website inspired by Pillai College of Arts, Commerce & Science, featuring academic sections, course information, and an organized user experience.",
        link: "https://pcacs.vercel.app/",
        tag: "Educational Website",
    }, {
        title: "Janhavi Beer Shop",
        desc: "A modern and elegant personal portfolio website showcasing skills, projects, achievements, and professional experience with responsive layouts and smooth interactions.",
        link: "https://janhavi-tau.vercel.app/",
        tag: "Portfolio Website",
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
