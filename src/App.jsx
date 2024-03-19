import {Route, Routes} from "react-router-dom"
import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Company from "./components/Company";
import Team from "./components/Team";
import Contact from './components/Contact'
import Footer from "./components/Footer";


function App() {
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Company" element={<Company />} />
    <Route path="/Team/*" element={<Team />} />
    <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  )
  
}

export default App;