import React from "react";
import "../styles/Experience.css";

type Exp = {
  title: string;
  org: string;
  period: string;
  details?: string[];
};

const experiences: Exp[] = [
  {
    title: "Web Developer Intern",
    org: "Fidisor Software Company",
    period: "July 2025 — September 2025",
    details: [
      "Worked on front-end development using React and TypeScript.",
      "Assisted in integrating RESTful APIs and maintaining responsive UI.",
      "Collaborated with backend team to enhance PHP modules."
    ]
  },
  {
    title: "Web Developer (Internship)",
    org: "Hidaya Institute of Science & Technology",
    period: "Feb 2025 — May 2025",
    details: [
      "Developed responsive web pages using HTML, CSS, and Bootstrap.",
      "Implemented PHP backend modules for small-scale projects."
    ]
  },
  {
    title: "Web Developer (Internship)",
    org: "Digital Youth Empowerment Balochistan",
    period: "Jan 2025 — Feb 2025",
    details: [
      "Worked on front-end fundamentals and mini JavaScript projects.",
      "Assisted in website testing and deployment."
    ]
  },
  {
    title: "WordPress & PHP Intern",
    org: "NFTP - Mehran University",
    period: "Mar 2022 — May 2022",
    details: [
      "Customized WordPress themes and plugins.",
      "Improved website responsiveness and layout consistency."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2>Experience & Internships</h2>

        <div className="timeline">
          {experiences.map((e, i) => (
            <article className="timeline-item" key={i}>
              <div className="ti-left">
                <h3 className="ti-title">{e.title}</h3>
                <p className="ti-org">{e.org}</p>
                <span className="ti-period">{e.period}</span>
              </div>
              {e.details && (
                <ul className="ti-details">
                  {e.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
