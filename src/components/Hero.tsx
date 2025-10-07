import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hi, I’m <span className="accent">Sana Lashari</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
          <p>
            I build clean, responsive, and functional web applications using
            React, TypeScript, PHP, and Laravel.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="/profile.jpg" alt="Sana Lashari" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
