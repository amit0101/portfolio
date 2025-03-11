import React, { useState } from 'react';
import { FaDatabase, FaCode, FaRobot, FaChartBar, FaImage, FaNetworkWired, FaFileAlt, FaMoneyBillWave, FaStream, FaBrain } from 'react-icons/fa';

function DemoApps() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  // Demo apps data with icons
  const demoApps = [
    {
      id: 1,
      title: 'LLM-Powered SQL Chatbot',
      description: 'A chatbot that converts natural language queries into SQL and runs them on a sample database (e.g., sales, healthcare, or finance).',
      tech: 'Python, OpenAI API (or LlamaIndex), SQLAlchemy, Streamlit',
      icon: <FaDatabase />
    },
    {
      id: 2,
      title: 'AI-Powered Image Recognition',
      description: 'Upload an image, and the app detects objects/products using a pre-trained model.',
      tech: 'FastAPI, Hugging Face Models, TensorFlow/PyTorch, Streamlit',
      icon: <FaImage />
    },
    {
      id: 3,
      title: 'Fraud Detection Dashboard',
      description: 'Displays real-time fraud detection insights using graph-based anomaly detection.',
      tech: 'NetworkX/iGraph, Flask, D3.js, PostgreSQL',
      icon: <FaNetworkWired />
    },
    {
      id: 4,
      title: 'Credit Risk Scoring Model',
      description: 'User inputs financial details, and the app predicts their credit risk score.',
      tech: 'Scikit-learn, Flask, React, PostgreSQL',
      icon: <FaMoneyBillWave />
    },
    {
      id: 5,
      title: 'Forecasting API for Time-Series Data',
      description: 'Upload time-series data (sales, stock prices, etc.), and the app predicts future trends.',
      tech: 'Prophet, Django REST API, Streamlit',
      icon: <FaChartBar />
    },
    {
      id: 6,
      title: 'Real-Time Data Pipeline Simulator',
      description: 'Showcases data streaming from PostgreSQL to a front-end dashboard with live updates.',
      tech: 'Apache Kafka, Spark Streaming, Flask, D3.js',
      icon: <FaStream />
    },
    {
      id: 7,
      title: 'Interactive Loan Portfolio Analysis Tool',
      description: 'Visualizes loan performance metrics with A/B testing insights.',
      tech: 'Dash/Plotly, Python, SQL',
      icon: <FaChartBar />
    },
    {
      id: 8,
      title: 'Medical Claims Fraud Detection App',
      description: 'Users input claim details, and the model flags potential fraud cases.',
      tech: 'Machine Learning (XGBoost), Flask, Pandas',
      icon: <FaFileAlt />
    },
    {
      id: 9,
      title: 'AI-Powered Resume Analyzer',
      description: 'Upload a resume, and the app scores it based on job descriptions.',
      tech: 'NLP (spaCy, BERT), Flask, React',
      icon: <FaRobot />
    },
    {
      id: 10,
      title: 'LLM-Based Business Insights Generator',
      description: 'Ask questions about business performance, and the LLM provides insights from structured data.',
      tech: 'OpenAI API, Pandas, Streamlit',
      icon: <FaBrain />
    }
  ];

  const handleDemoSelect = (demoId) => {
    setSelectedDemo(demoId);
  };

  // Function to render tech stack as pills
  const renderTechStack = (techString) => {
    const technologies = techString.split(', ');
    return (
      <div className="tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-pill">{tech}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="demo-apps-container">
      <div className="demo-sidebar">
        <h3>Demo Applications</h3>
        <ul className="demo-list">
          {demoApps.map(demo => (
            <li 
              key={demo.id} 
              className={`demo-item ${selectedDemo === demo.id ? 'active' : ''}`}
              onClick={() => handleDemoSelect(demo.id)}
            >
              <span className="demo-icon">{demo.icon}</span>
              <span className="demo-title">{demo.title}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="demo-content">
        {selectedDemo ? (
          <div className="demo-details">
            <h2>
              <span className="demo-icon large">
                {demoApps.find(d => d.id === selectedDemo)?.icon}
              </span>
              {demoApps.find(d => d.id === selectedDemo)?.title}
            </h2>
            
            <div className="demo-section">
              <h3>Demo</h3>
              <p>{demoApps.find(d => d.id === selectedDemo)?.description}</p>
            </div>
            
            <div className="demo-section">
              <h3>Technologies</h3>
              {renderTechStack(demoApps.find(d => d.id === selectedDemo)?.tech)}
            </div>
          </div>
        ) : (
          <div className="demo-placeholder">
            <h2>Interactive Demo Applications</h2>
            <p>Select a demo from the sidebar to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DemoApps; 