import React from 'react'
import './Home.css'
import About from '../About/About'
import Service from '../Service/Service';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';
import Connect from '../Connect/Connect';

const Home = () => {
  return (
    <>
    <section className="home">
      <div className="home-text">
        <h1>
          Hi, I'm <span className="purple">Aliha</span> <span className="orange">Imran</span>
        </h1>
        <h2 className="home-text">Full Stack Web Developer</h2>
        <p>
          I create modern, responsive and dynamic web applications using 
          <span className="orange"> React</span>, 
          <span className="purple"> Node.js</span>, 
          and the latest web technologies.
        </p>
        <a href="" className="btn">View My Resume</a>
      </div>

      <div className="home-image">
      
      </div>
    </section>
    <About/>
    <Service/>
    <Project/>
    <Skill/>
    <Connect/>
    </>
  
  )
}

export default Home