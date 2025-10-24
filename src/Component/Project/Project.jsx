import React, { useState } from "react";
import "./Project.css";
import atm from '../../assets/image/atm-img.jpg'
import form from '../../assets/image/form.png'
import todo from '../../assets/image/todo.png'
import digital from '../../assets/image/digital.PNG'
import school from '../../assets/image/school.PNG'
import result from '../../assets/image/result.PNG'
import trading from '../../assets/image/trading.PNG'
import daraz from '../../assets/image/daraz.PNG'
import calculator from '../../assets/image/image213.PNG'

const Project = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      name: "College Admission Form",
      category: "React",
      tags: ["React", "HTML", "CSS", "Form Validation"],
      img: form,
      github: "https://github.com/alihaimran285-byte/admission-form",
      livedemo: " https://alihaimran285-byte.github.io/admission-form/",
    },
    {
      name: "To-Do App",
      category: "React",
      tags: ["React", "JavaScript", "Local Storage"],
      img :todo,
      github: "https://github.com/alihaimran285-byte/todo-app",
      livedemo: "https://username.github.io/todo-app/",
    },
    {
      name: "school-form",
      category: "Frontend",
      tags: ["HTML", "CSS",  "Responsive Design"],
      img: school,
      github: "https://github.com/alihaimran285-byte/school-register",
      livedemo: " https://alihaimran285-byte.github.io/school-register/",
    },
    {
      name: "ATM Machine",
      category: "Frontend",
      tags: [ "JavaScript", "HTML", "CSS"],
      img: atm,
      github: "https://github.com/alihaimran285-byte/atm-machine",
      livedemo: "https://alihaimran285-byte.github.io/atm-machine/",
    },
    {
      name: "Digital-Impact-website",
      category: "Frontend",
      tags: ["React", "Styled Components", "Responsive"],
      img: digital,
      github: "https://github.com/alihaimran285-byte/The-Digital-Impacts",
      livedemo: "https://username.github.io/trading-app/",
    },
    {
      name: "Student-Result",
      category: "Frontend",
      tags: ["javascript", "Styled Components", "Responsive"],
      img: result,
      github: "https://github.com/alihaimran285-byte/result",
      livedemo: " https://alihaimran285-byte.github.io/result/",
    },
    {
      name: "Trading",
      category: "Frontend",
      tags: ["HTML", "CSS",  "Responsive Design"],
      img: trading,
      github: "https://github.com/alihaimran285-byte/trading",
      livedemo: " https://alihaimran285-byte.github.io/trading/",
    },
    {
      name: "Daraz-app",
      category: "Frontend",
      tags: ["HTML", "CSS",  "Responsive Design"],
      img: daraz,
      github: "https://github.com/alihaimran285-byte/daraz-app",
      livedemo: "  https://alihaimran285-byte.github.io/daraz-app/",
    },
   {
      name: "calculator",
      category: "Frontend",
      tags: [" NextReact", "javascript",  "Responsive Design"],
      img: calculator,
      github: "https://github.com/alihaimran285-byte/calculator",
      
    },
   
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const categories = ["All", "React", "Frontend"];

  return (
    <div className="projects-page">
      <section className="projects-header">
        <h2>Projects</h2>
        <p>
          A selection of my creative and technical work — built with clean code,
          modern design, and responsive layouts.
        </p>
      </section>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => {
              setFilter(cat);
              setShowAll(false);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((p, index) => (
          <div key={index} className="project-card">
            <img src={p.img} alt={p.name} className="project-img" />
            <div className="project-content">
              <h3>{p.name}</h3>
              <div className="project-tags">
                {p.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>
                <a
                  href={p.livedemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length > 6 && (
        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
