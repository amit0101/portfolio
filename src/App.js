import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Use a flex container with two main sections: the Nav on the left, content on the right */}
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            {/* “/” path → About Me (homepage) */}
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* Detail page for a single project */}
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;