import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
   <div className="about">
      <div className="about-container">

        
        <div className="about-header">
          <img src='' alt="" className="about-img" />
          <h1 className="about-title">About Me</h1>
          <p className="intro">
            Hi, I’m <span className="highlight">Aliha Imran</span> — a passionate
            <span className="highlight"> Full Stack Web Developer</span> who loves
            creating modern, interactive, and responsive web experiences.
          </p>
        </div>

        
        <div className="about-section">
          <h2 className="section-title"> What I Do</h2>
          <p>
            I design and build complete web applications — from front-end user
            interfaces to back-end servers. I enjoy working with both
            <span className="highlight"> React</span>,
            <span className="highlight">Node.js</span>, and
            <span className="highlight">MongoDB</span>. My goal is to write clean,
            efficient, and scalable code that brings ideas to life.
          </p>
        </div>

        
        <div className="about-section">
          <h2 className="section-title"> My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">HTML5</div>
            <div className="skill-card">CSS3</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Express</div>
            <div className="skill-card">MongoDB</div>
            <div className="skill-card">Git & GitHub</div>
          </div>
        </div>

        
        <div className="about-section">
          <h2 className="section-title"> My Goals</h2>
          <p>
            My dream is to become one of the top full stack developers, working
            on projects that impact lives globally. I aim to keep learning new
            technologies and contribute to open-source communities.
          </p>
        </div>

        <a href="" className="btn">
          Contact Me
        </a>
      </div>
    </div>
    </>
  )
}

export default About