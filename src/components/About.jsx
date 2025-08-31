import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { INFO } from "../data";

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle>About</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        <div className="justify-self-center">
          <img
            src="/images/about.png"
            alt="about"
            className="w-[300px] md:w-[420px] rounded shadow-[0_0_10px_hsl(224_89%_60%)] border border-transparent hover:border-brand hover:shadow-brand transition-all"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-3">I’m {INFO.name}</h3>
          <p className="leading-relaxed">{INFO.summary}</p>
        </motion.div>
      </div>
    </section>
  );
}
