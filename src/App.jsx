import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Footer from './Component/Footer/Footer';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import Connect from './Component/Connect/Connect';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
 <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Service" element={<Service />} />
  <Route path="/Project" element={<Project />} />
  <Route path="/Skill" element={<Skill />} />
  <Route path="/Connect" element={<Connect />} />
      </Routes>
      <Footer/>
     
    </>
  );
}

export default App;
