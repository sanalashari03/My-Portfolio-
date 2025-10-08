import React from "react";
import "../styles/About-temp.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-img">
          <img src="/profile.jpg" alt="Sana Lashari" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a passionate Full Stack Developer skilled in React, TypeScript,
            PHP, and Laravel. I enjoy building clean and responsive web
            applications that focus on user experience and performance.
          </p>

          <h3>Skills</h3>
          <ul className="skills">
            <li>React & TypeScript</li>
            <li>PHP & Laravel</li>
            <li>HTML, CSS, JavaScript</li>
            <li>MySQL</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
