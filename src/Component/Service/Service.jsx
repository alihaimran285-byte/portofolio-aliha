import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <section className="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>

      <div className="service-container">
        <div className="service-box ">
          <h3>💻 Web Development</h3>
          <p>
            I create responsive and modern websites using HTML, CSS, JavaScript, and React.
          </p>
        </div>

        <div className="service-box ">
          <h3>🎨 UI / UX Design</h3>
          <p>
            I design beautiful and easy-to-use interfaces for websites and mobile apps.
          </p>
        </div>

        <div className="service-box ">
          <h3>⚙️ Backend Development</h3>
          <p>
            I build strong and secure server systems using Node.js and Express.
          </p>
        </div>

        <div className="service-box ">
          <h3>🌐 SEO Optimization</h3>
          <p>
            I help improve your website ranking and visibility on search engines.
          </p>
        </div>

        <div className="service-box ">
          <h3>📱 Responsive Design</h3>
          <p>
            I make sure your website looks great on all screen sizes and devices.
          </p>
        </div>

        <div className="service-box ">
          <h3>🧠 Content Strategy</h3>
          <p>
            I help create smart and engaging website content for your audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;