import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const LINKS = ["home", "about", "skills", "certifications", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      sections.forEach((sec) => {
        const h = sec.offsetHeight;
        const top = sec.offsetTop - 58;
        const id = sec.getAttribute("id");
        if (scrollY > top && scrollY <= top + h) setActive(id);
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-soft z-50">
      <nav className="container h-12 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg">Rasuri Pavithra</a>
        <button className="sm:hidden" onClick={() => setOpen((s) => !s)}>
          <Menu />
        </button>
        <ul className="hidden sm:flex items-center gap-6 font-semibold">
          {LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${active === id ? "active" : ""}`}
              >
                {id === "work" ? "Projects" : id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden bg-[hsl(224_56%_12%)] text-white px-6 py-4 space-y-4">
          {LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block"
                onClick={() => setOpen(false)}
              >
                {id === "work" ? "Projects" : id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
