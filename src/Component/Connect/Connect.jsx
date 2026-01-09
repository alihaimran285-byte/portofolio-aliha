import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <section className="connect-section">
      <h2 className="section-title">Connect with Me</h2>
      <p className="connect-text">
        Let's get in touch! You can reach me via email, phone, or follow me on social media.
      </p>

      <div className="connect-buttons">
        {/* ✅ Email */}
        <a
          href="mailto:alihaimran778@gmail.com"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>

        {/* ✅ Phone */}
        <a
          href="tel:+923274045102"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call Me
        </a>

        {/* ✅ LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aliha-imran-48077b394/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        {/* ✅ GitHub */}
        <a
          href="https://github.com/alihaimran285-byte"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Connect;
