import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { EXPERIENCE, EDUCATION } from "../data";

export default function Education() {
  const [tab, setTab] = useState("experience");

  return (
    <section id="edu" className="section container">
      <SectionTitle>Education & Experience</SectionTitle>
      <div className="grid md:grid-cols-[34%_1fr] gap-8 items-center text-black">
        <div>
          <img
            src="images/edu.jpg"
            alt="education"
            className="rounded shadow-[0_0_9px_hsl(224_89%_60%)] border border-transparent hover:border-brand hover:shadow-brand transition-all"
          />
        </div>

        <div>
          <div className="flex gap-8 mb-6">
            <button
              onClick={() => setTab("experience")}
              className={`font-bold relative pb-2 ${
                tab === "experience" ? "text-brand" : ""
              }`}
            >
              Experience
              <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-brand transition-all ${
                  tab === "experience" ? "w-1/2" : "w-0"
                }`}
              />
            </button>
            <button
              onClick={() => setTab("education")}
              className={`font-bold relative pb-2 ${
                tab === "education" ? "text-brand" : ""
              }`}
            >
              Education
              <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-brand transition-all ${
                  tab === "education" ? "w-1/2" : "w-0"
                }`}
              />
            </button>
          </div>

          {tab === "experience" ? (
            <ul className="space-y-3">
              {EXPERIENCE.map((e, idx) => (
                <li key={idx}>
                  <span className="text-brand font-semibold">{e.period}</span>
                  <br />
                  <span className="font-semibold">{e.title}</span>{" "}
                  – {e.company}
                  <ul className="list-disc ml-5 mt-1 text-sm">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-3">
              {EDUCATION.map((ed, i) => (
                <li key={i}>
                  <span className="text-brand font-semibold">{ed.period}</span>
                  <br />
                  <span className="font-semibold">{ed.school}</span>
                  <br />
                  {ed.degree}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
