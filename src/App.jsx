import {Route, Routes} from "react-router-dom"
import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Company from "./components/Company";
import Team from "./components/Team";
import Contact from './components/Contact'
import Projects from "./components/Projects";
import Gallery from "./components/Gallery"; 
import Footer from "./components/Footer";
import ProjectsList from "./components/ProjectDetails"; 
import Section from "./components/Sectionalplans";


function App() {
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Company" element={<Company />} />
    <Route path="/Team/*" element={<Team />} />
    <Route path="/Contact" element={<Contact />} />
    <Route  path="/Projects" element={<Projects />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/Projectslist" element={<ProjectsList/>} />
    <Route path="/Sectionalplans" element={<Section/>} />
    </Routes>
    <Footer/>
    </>
  )
  
}

export default App;

