"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl"
                >
                    <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-3">
                        About Me
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Crafting modern digital experiences with performance and clean design.
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg leading-8">
                        I’m a Software Developer focused on building modern, responsive, and user-friendly web applications.
                        I’ve worked on real-world projects including a chatbot interface, clinic management panel, resort system,
                        college website, product expiry tracker, UPSC institute platform, and portfolio websites.
                    </p>
                </motion.div>

                {/* Highlight cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        {
                            title: "Frontend Focus",
                            desc: "Building modern UI with Next.js, React.js, Tailwind CSS and animation libraries.",
                        },
                        {
                            title: "Real Project Experience",
                            desc: "Worked on dashboards, management systems, portfolios, educational and utility-based platforms.",
                        },
                        {
                            title: "Performance Mindset",
                            desc: "Experienced with SEO, Google Analytics, optimization, bug fixing, and clean component architecture.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            whileHover={{ y: -8 }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400 leading-7">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}