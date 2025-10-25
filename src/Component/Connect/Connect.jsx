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
        <a href="alihaimran778@gmail.com" className="btn"target="_blank" rel="noopener noreferrer">Email Me</a>
        <a href="tel:+923274045102" className="btn"target="_blank" rel="noopener noreferrer">Call Me</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        <a href="https://github.com/alihaimran285" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
      </div>
    </section>
  );
};

export default Connect;