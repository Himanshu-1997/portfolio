import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience  from './components/Experience/Experience';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Experience/>
      <Education/>
    </div>
  );
}

export default App;
