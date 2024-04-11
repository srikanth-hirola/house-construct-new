/* eslint-disable no-unused-vars */
import React from 'react'
import './assets/sass/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import PortfolioIndividual from './pages/PortfolioIndividual';

import ServicePage from './pages/ServicePage';
import Portfolio from './pages/Portfolio';
import Blogspage from './pages/Blogspage';
import Contactus from './pages/Contactus';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ConstructionandDesign from './components/blogSingle/ConstructionandDesign';
import ArchitecturalDesign from './components/blogSingle/ArchitecturalDesign';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/blogs' exact element={<Blogs/>}/>
        <Route path='/portfolio' exact element={<Portfolio/>}/>
        <Route path='/portfolio/:id' exact element={<PortfolioIndividual/>}/>
        <Route path='/services' exact element={<ServicePage/>}/>
        <Route path='/contact-us' exact element={<Contactus />}/>

        <Route path='/how-to-choose-the-right-floor-plan-for-your-dream-home' exact element={<Blogspage />}/>
        <Route path='/the-top-trends-in-home-construction-and-design-for-2023' exact element={<ConstructionandDesign />}/>
        <Route path='/the-role-of-architectural-design-in-creating-sustainable-homes' exact element={<ArchitecturalDesign />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App