import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'LLM-based Text-to-SQL Model',
      overview: 'A generative model to convert natural language queries into SQL.'
    },
    {
      id: 2,
      title: 'Image Recognition API',
      overview: 'Detects products for a client app with 98% accuracy.'
    },
    {
      id: 3,
      title: 'Fraud Detection with Graph Analysis',
      overview: 'Reduced fraud by 25% for an app-based lending platform.'
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <h3>{project.title}</h3>
            <p>{project.overview}</p>
            <Link to={`/projects/${project.id}`} className="learn-more-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;