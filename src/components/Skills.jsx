import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionTitle>Skills</SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-lg font-semibold mb-3">Professional Skills</h3>
          <p className="mb-6">
            I specialize in Java, Python, React, Spring Boot, Flask, and MySQL with strong DSA fundamentals and system design.
          </p>

          <div className="space-y-4">
            {SKILLS.map((s) => (
              <div key={s.name} className="relative p-3 rounded shadow-soft">
                <div className="flex justify-between font-semibold">
                  <span className="text-brand">{s.name}</span>
                  <span>{s.pct}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded mt-2">
                  <motion.div
                    className="h-2 bg-brand rounded"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="justify-self-center">
          <img
            src="images/skills.png"
            alt="skills"
            className="rounded shadow-[0_0_10px_hsl(224_89%_60%)] border border-transparent hover:border-brand hover:shadow-brand transition-all w-[90%] max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
