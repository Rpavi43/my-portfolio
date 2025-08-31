import React from "react";
import SectionTitle from "./SectionTitle";
import { CERTS } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="section container">
      <SectionTitle>Certifications</SectionTitle>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CERTS.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card overflow-hidden block"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-44 object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
            <div className="p-3">
              <h3 className="text-brand font-semibold text-center">{cert.title}</h3>
              <p className="text-sm text-center mt-1">
                {cert.org} — {cert.year}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
