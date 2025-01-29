import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams();

  // For demo, define project details here. In a real app, you might fetch from an API.
  const projectData = {
    1: {
      title: 'LLM-based Text-to-SQL Model',
      description: `Developed an LLM-based model for text-to-SQL generation,
      enabling a chatbot to interface with a database and provide
      game statistics to users for a sports website.`
    },
    2: {
      title: 'Image Recognition API',
      description: `Created an Image Recognition API to detect products
      for a client app with 98% accuracy. This involved data
      collection, model training, and deployment for real-time inference.`
    },
    3: {
      title: 'Fraud Detection with Graph Analysis',
      description: `Innovated approaches to detect fraud using Network Analysis
      and Graph Theory, achieving a 25% reduction in fraud cases for
      an app-based lending platform.`
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add screenshots, more details, etc. */}
    </div>
  );
}

export default ProjectDetail;