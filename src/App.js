import React from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id='home'/>
      <About id='about'/>
      <Skill id='skill'/>
      <Project id='project'/>
      <Contact id='contact'/>

    </div>
  );
}

export default App;
