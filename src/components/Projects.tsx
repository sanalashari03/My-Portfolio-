import React from "react";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  const projects = [
    { title: "Timer App", desc: "A React-based timer with a clean UI." },
    { title: "Blog Dashboard", desc: "Full-stack blog app built with PHP & MySQL." },
    { title: "Portfolio Website", desc: "Responsive personal portfolio made in React." },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
