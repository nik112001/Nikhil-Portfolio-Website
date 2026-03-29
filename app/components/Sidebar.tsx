"use client";

import { useEffect, useState } from "react";

const navItems = [
  { num: "00", label: "Home", href: "#hero" },
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Skills", href: "#skills" },
  { num: "03", label: "Experience", href: "#experience" },
  { num: "04", label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-logo">
          Nikhil <span>Kotta</span>
        </div>
        <div className="sidebar-role">Software Engineer</div>
      </div>

      <div className="sidebar-status">
        <div className="status-dot" />
        <span className="status-text">Open to work</span>
      </div>

      <div className="nav-label">Navigation</div>
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
            >
              <span className="nav-num">{item.num}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="sidebar-bottom">
        <a href="mailto:nikhilkotta20@gmail.com" className="sidebar-contact-link">
          ✉ nikhilkotta20@gmail.com
        </a>
        <a href="tel:6095981676" className="sidebar-contact-link">
          ✆ 609-598-1676
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-kotta-85872019b"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-contact-link"
        >
          in LinkedIn
        </a>
        <a
          href="https://github.com/nik112001"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-contact-link"
        >
          ⌥ GitHub
        </a>
      </div>
    </aside>
  );
}
