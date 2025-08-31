import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { INFO } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[hsl(224_56%_12%)] text-white text-center py-8">
      <p className="text-2xl font-semibold mb-4">{INFO.name}</p>
      <div className="flex items-center justify-center gap-6 mb-4">
        <a href={INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a href={INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github />
        </a>
        <a href={`mailto:${INFO.email}`} aria-label="Email">
          <Mail />
        </a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} {INFO.name}. All rights reserved.</p>
    </footer>
  );
}
