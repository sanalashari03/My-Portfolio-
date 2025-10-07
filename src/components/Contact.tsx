import React from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2>Contact Me</h2>
        <p>
          I’d love to connect! You can reach me directly through the details below.
        </p>

        <div className="contact-info">
          <p>
            📞 <strong>Phone:</strong> <a href="tel:+923001234567">+92 321 39266 74 </a>
          </p>
          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a href="mailto:sanalashari@gmail.com">sana.lashari03@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
