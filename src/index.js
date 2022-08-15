import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Intro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <div className='main'>
    <About />
    <Info />
    <Projects />
    <Contact />
    <Footer />
    <App />
    </div>
  </React.StrictMode>
);
