import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DemoApps from './pages/DemoApps';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <Router basename="/portfolio">
      {/* Apply our theme class alongside "app-container" */}
      <div className={`app-container ${themeClass}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/demos" element={<DemoApps />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <ContactForm />
      </div>
    </Router>
  );
}

export default App;