import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 👤 Left Section */}
        <div className="footer-left">
          <h2 className="footer-name">Aliha Imran</h2>
          <p className="footer-tagline">💻 Full Stack Web Developer | Creative Designer</p>
          <p className="footer-location">
            <FaMapMarkerAlt className="footer-icon" /> Pakistan
          </p>
        </div>

        {/* ✉️ Middle Section */}
        <div className="footer-middle">
          <h3>Contact Info</h3>
          <p>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:alihaimran285@gmail.com" className="footer-link">
              alihaimran285@gmail.com
            </a>
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" />
            <span className="footer-phone">0327-4045102</span>
          </p>
        </div>

        {/* 🌐 Right Section */}
        <div className="footer-right">
          <h3>Follow Me</h3>
          <div className="footer-social">
            <a
              href="https://github.com/AlihaImran"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:alihaimran285@gmail.com"
              className="social-icon email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span>Aliha Imran</span> — Crafted with 💜 & 🧡
        </p>
      </div>
    </footer>
  );
};

export default Footer;