import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience  from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
