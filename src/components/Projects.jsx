import React from "react";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="work" className="section container">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <a key={i} href={p.href} className="card overflow-hidden block">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover transition-transform duration-500 hover:scale-[1.04]" />
            <div className="p-3">
              <h3 className="text-brand font-semibold text-center">{p.title}</h3>
              <p className="text-sm text-center mt-1">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
