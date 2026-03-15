"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{ x: [0, 70, -40, 0], y: [0, -30, 20, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -50, 30, 0], y: [0, 30, -20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-7"
                >
                    <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
                        Software Developer • MERN Stack Developer
                    </div>

                    <div className="space-y-4">
                        <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm">
                            Hello, I’m
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Paras{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                Varankar
                            </span>
                        </h1>

                        <h2 className="text-lg md:text-2xl text-gray-300 font-medium max-w-2xl">
                            Building modern web apps with clean UI, smooth animations & real-world solutions.
                        </h2>
                    </div>

                    <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl">
                        I create responsive, scalable, and visually engaging web applications using
                        Next.js, React.js, Tailwind CSS, Node.js, and modern development tools.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-black font-semibold"
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md"
                        >
                            <Download size={18} />
                            Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Avatar Round Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                    className="flex justify-center lg:justify-end"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative flex items-center justify-center w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px]"
                    >
                        {/* Outer rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-cyan-400/20"
                        />

                        {/* Inner rotating ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-6 rounded-full border border-purple-500/20"
                        />

                        {/* Glow behind avatar */}
                        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-purple-500/20 blur-3xl" />

                        {/* Avatar container round */}
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 180 }}
                            className="relative z-10 w-[240px] h-[240px] sm:w-[290px] sm:h-[290px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.12)]"
                        >
                            <Image
                                src="/avatar.png"
                                alt="Paras Varankar"
                                fill
                                priority
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Floating mini glow dots */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-8 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
                        />

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-12 left-6 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}