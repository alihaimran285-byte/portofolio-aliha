import React, { useEffect } from "react";
import "./Skill.css";

const skillsData = [
  {
    category: "Frontend",
    status: "Completed ✅",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind", level: 70 },
    ],
  },
  {
    category: "Backend",
    status: "Currently learning ",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "SQL", level: 60 },
      { name: "Firebase", level: 55 },
    ],
  },
  {
    category: "Languages",
    status: "Fluent ",
    skills: [
      { name: "English", level: 90 },
      { name: "Urdu", level: 100 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    status: "In Progress ",
    skills: [
      { name: "Git", level: 75 },
      { name: "VS Code", level: 80 },
      { name: "Figma", level: 60 },
      { name: "Postman", level: 65 },
      { name: "Chrome DevTools", level: 70 },
    ],
  },
];

const Skill = () => {
  useEffect(() => {
    
    const bars = document.querySelectorAll(".skill-level");
    bars.forEach((bar) => {
      const width = bar.getAttribute("data-level");
      bar.style.width = width + "%";
    });
  }, []);

  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-columns">
        {skillsData.map((item, index) => (
          <div key={index} className="skills-column">
            <h3>{item.category}</h3>
            <p className="skill-status">{item.status}</p>
            {item.skills.map((skill, i) => (
              <div key={i} className="skill-badge">
                <span>{skill.name}</span>
                <div
                  className="skill-level"
                  data-level={skill.level}
                ></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;