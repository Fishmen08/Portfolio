import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import PtProjectPage from './PtProjectPage';
// import NavBar from './NavBar';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import Footer from './Footer';
// import Info from './Intro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pt-project' element={<PtProjectPage />} />
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
