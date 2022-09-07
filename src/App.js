import React from "react";
// import {Routes, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Intro';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main'>
      <About />
      <Info />
      <Projects />
      <Contact />
      <Footer />
      {/* <App /> */}
      </div>
      
    </div>
  );
}

export default App;
