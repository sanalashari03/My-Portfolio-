import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          Sana<span>.</span>
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
          <a
            href="/Sana_Lashari Full_Stack_Web_Developer.pdf"
            className="cv-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
  href="/Sana_Lashari Full_Stack_Web_Developer.pdf"
  className="cv-btn"
  download="Sana_Lashari_Full_Stack_Web_Developer.pdf"
>
  Download CV
</a>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
