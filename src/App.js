import React from 'react';
//import './App.css';
import "./index.css"

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project  from './routes/Project';
import Resume from './routes/Resume';
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/Project" element={<Project/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Resume" element={<Resume/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;
