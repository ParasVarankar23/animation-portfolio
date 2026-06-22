import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paras Varankar | Portfolio",
  description:
    "Personal portfolio of Paras Varankar, a Full Stack Developer specializing in Next.js, React, Node.js, and modern web applications.",
  keywords: [
    "Paras Varankar",
    "Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
  ],
  authors: [{ name: "Paras Varankar" }],
  creator: "Paras Varankar",
  applicationName: "Paras Varankar Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}