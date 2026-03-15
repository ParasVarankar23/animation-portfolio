"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Globe,
    Server,
    Smartphone,
    Github,
    Boxes,
    Layers3,
    Cpu,
    Workflow,
} from "lucide-react";

const techStack = [
    { icon: Globe, name: "Next.js" },
    { icon: Code2, name: "React.js" },
    { icon: Layers3, name: "Tailwind CSS" },
    { icon: Cpu, name: "JavaScript" },
    { icon: Code2, name: "HTML5" },
    { icon: Layers3, name: "CSS3" },
    { icon: Server, name: "Node.js" },
    { icon: Workflow, name: "Express.js" },
    { icon: Database, name: "MongoDB" },
    { icon: Database, name: "MySQL" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Database, name: "SQL Plus" },
    { icon: Code2, name: "Python" },
    { icon: Code2, name: "Java" },
    { icon: Code2, name: "PHP" },
    { icon: Code2, name: "C#" },
    { icon: Boxes, name: ".NET Framework" },
    { icon: Smartphone, name: "Flutter / Dart" },
    { icon: Github, name: "GitHub" },
    { icon: Boxes, name: "Docker" },
];

export default function Skills() {
    const repeated = [...techStack, ...techStack];

    return (
        <section id="skills" className="relative bg-black text-white py-8 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-10 top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute right-10 bottom-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
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
                        Skills & Technologies
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-5">
                        Tools & technologies I work with
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-8">
                        A strong mix of frontend, backend, databases, programming languages,
                        and development tools used in real-world projects.
                    </p>
                </motion.div>

                {/* Animated Marquee */}
                <div className="mt-12 overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        className="flex gap-5 w-max"
                    >
                        {repeated.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="min-w-[170px] rounded-3xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-md flex flex-col items-center justify-center gap-3 shadow-lg"
                                >
                                    <Icon className="text-4xl text-cyan-300" />
                                    <span className="text-sm text-gray-300 text-center">{tech.name}</span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Category Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-14">
                    {[
                        {
                            title: "Frontend Development",
                            items: [
                                "Next.js",
                                "React.js",
                                "Tailwind CSS",
                                "HTML5",
                                "CSS3",
                                "JavaScript",
                            ],
                        },
                        {
                            title: "Backend & Database",
                            items: [
                                "Node.js",
                                "Express.js",
                                "MongoDB",
                                "MySQL",
                                "PostgreSQL",
                                "SQL Plus",
                                "PHP",
                            ],
                        },
                        {
                            title: "Programming & Tools",
                            items: [
                                "Python",
                                "Java",
                                "C#",
                                ".NET Framework",
                                "Flutter / Dart",
                                "GitHub",
                                "Docker",
                            ],
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
                            <h3 className="text-xl font-semibold mb-5 text-white">{item.title}</h3>

                            <div className="flex flex-wrap gap-3">
                                {item.items.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}