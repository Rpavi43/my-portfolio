import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { INFO } from "../data";

export default function Hero() {
  return (
    <section id="home" className="home container relative grid gap-8 sm:grid-cols-2 pt-24 pb-16">
      <div className="self-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
          Hi,<br /> I’m <span className="text-brand"> {INFO.name}</span>
        </h1>
        <motion.a
          href={INFO.resumeUrl}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold shadow-md"
        >
          Resume / CV
        </motion.a>

        {/* Social + Resume icons */}
        <div className="flex gap-6 mt-6">
          <a
            href={INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            <Github size={28} />
          </a>
          <a
            href={INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            <Linkedin size={28} />
          </a>
          <a href={`mailto:${INFO.email}`} className="hover:text-brand">
            <Mail size={28} />
          </a>
          <a
            href={INFO.resumeUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand"
          >
            <FileText size={28} />
          </a>
        </div>
      </div>

      <div className="justify-self-end relative">
        <img
          src="images/default-profile.png"
          alt="profile"
          className="w-[260px] sm:w-[360px] rounded-[40%] shadow-[0_0_8px_hsl(224_89%_60%)] border-2 border-transparent hover:border-brand hover:shadow-brand transition-all"
        />
      </div>
    </section>
  );
}
