"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MessageCircle,
    Phone,
    Send,
    User,
    MessageSquareText,
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const whatsappNumber = "919309940782";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleWhatsAppSend = (e) => {
        e.preventDefault();

        const text = `Hello Paras,%0A%0A` +
            `*New Portfolio Contact Request*%0A%0A` +
            `*Full Name:* ${formData.fullName}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Subject:* ${formData.subject}%0A` +
            `*Message:* ${formData.message}%0A%0A` +
            `Sent from your portfolio website.`;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <section id="contact" className="relative bg-black text-white py-20 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
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
                        Contact Me
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-5">
                        Let’s build something amazing together
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-8">
                        Have a project idea, internship opportunity, freelance work, or collaboration in mind?
                        Send your details directly to my WhatsApp.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 mt-12">
                    {/* Left Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                                    <Phone className="text-cyan-400" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone / WhatsApp</h3>
                                    <p className="text-gray-400">+91 9309940782</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-purple-400/10 flex items-center justify-center">
                                    <Mail className="text-purple-400" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-gray-400 break-all">parasvarankar01@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-green-400/10 flex items-center justify-center">
                                    <MessageCircle className="text-green-400" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Availability</h3>
                                    <p className="text-gray-400">Open for internships, freelance & full-time opportunities</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.form
                        onSubmit={handleWhatsAppSend}
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md space-y-5"
                    >
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-black/30 pl-11 pr-4 py-3 text-white outline-none focus:border-cyan-400"
                                />
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-black/30 pl-11 pr-4 py-3 text-white outline-none focus:border-cyan-400"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-black/30 pl-11 pr-4 py-3 text-white outline-none focus:border-cyan-400"
                                />
                            </div>

                            <div className="relative">
                                <MessageSquareText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-black/30 pl-11 pr-4 py-3 text-white outline-none focus:border-cyan-400"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none focus:border-cyan-400 resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 text-black font-semibold shadow-lg shadow-green-500/20"
                        >
                            <Send size={18} />
                            Send via WhatsApp
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}