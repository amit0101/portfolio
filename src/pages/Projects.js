import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  // Project categories and their projects
  const projectCategories = [
    {
      id: 1,
      title: 'LLM & Generative AI Applications',
      projects: [
        { id: '1-1', title: 'Text-to-SQL Generative Model & Chatbot', description: 'Developed an LLM-based model for text-to-SQL generation, enabling a chatbot to interface with a database and provide game statistics to users for a sports website.' },
        { id: '1-2', title: 'Image Recognition API for Product Detection', description: 'Created an Image Recognition API to detect products with 98% accuracy. This involved data collection, model training, and deployment for real-time inference.' },
        { id: '1-3', title: 'LLM-based POC Applications', description: 'Built proof-of-concept applications leveraging large language models for various business use cases, demonstrating practical applications of generative AI.' }
      ]
    },
    {
      id: 2,
      title: 'Machine Learning & AI Solutions',
      projects: [
        { id: '2-1', title: 'Automated Forecasting API for Time-Series Data', description: 'Developed an API that automates forecasting for time-series data, enabling businesses to make data-driven decisions based on predictive analytics.' },
        { id: '2-2', title: 'Predictive Models for Credit Risk & Loan Portfolio', description: 'Built predictive models to assess credit risk and optimize loan portfolios, improving decision-making processes for financial institutions.' },
        { id: '2-3', title: 'Regression & Time Series Models for Pharmacy Pricing', description: 'Implemented regression and time series models to optimize pharmacy pricing strategies, resulting in improved profit margins and competitive positioning.' },
        { id: '2-4', title: 'Medical Claims Prediction & Fraud Detection', description: 'Created predictive models for medical claims and fraud detection, helping healthcare providers reduce costs and improve operational efficiency.' },
        { id: '2-5', title: 'Decision Trees for Credit Underwriting Without History', description: 'Developed decision tree models for credit underwriting in scenarios with limited or no credit history, expanding financial access to underserved populations.' }
      ]
    },
    {
      id: 3,
      title: 'Fraud Detection & Risk Modeling',
      projects: [
        { id: '3-1', title: 'Fraud Detection using Network Analysis & Graph Theory', description: 'Innovated approaches to detect fraud using Network Analysis and Graph Theory, achieving a significant reduction in fraud cases for a lending platform.' },
        { id: '3-2', title: 'Medical Claims Fraud Detection (Payment Integrity Models)', description: 'Built sophisticated models to identify fraudulent medical claims, saving millions in healthcare costs through improved payment integrity.' },
        { id: '3-3', title: 'Credit Risk KPIs & Portfolio Management', description: 'Developed key performance indicators and management tools for credit risk assessment and portfolio optimization.' }
      ]
    },
    {
      id: 4,
      title: 'Big Data & ETL Pipelines',
      projects: [
        { id: '4-1', title: 'Data Pipeline Development with Hadoop, Hive, and Spark', description: 'Designed and implemented data pipelines using Hadoop, Hive, and Spark to process and analyze large-scale datasets efficiently.' },
        { id: '4-2', title: 'Real-time Data Flow Automation', description: 'Created automated systems for real-time data flow, enabling immediate insights and responsive business intelligence.' },
        { id: '4-3', title: 'Data Collection & Interactive Interfaces for Machine Learning Demos', description: 'Built data collection systems and interactive interfaces to showcase machine learning capabilities through engaging demonstrations.' }
      ]
    },
    {
      id: 5,
      title: 'Data Visualization & Dashboards',
      projects: [
        { id: '5-1', title: 'Interactive Dashboards for Senior Leadership', description: 'Developed interactive dashboards that provide senior leadership with real-time insights into key business metrics and performance indicators.' },
        { id: '5-2', title: 'Real-time Visualization using Python & iGraph', description: 'Created real-time data visualization tools using Python and iGraph, enabling dynamic representation of complex data relationships.' },
        { id: '5-3', title: 'Scalable Reporting Tools using R & Tableau', description: 'Built scalable reporting solutions using R and Tableau, providing businesses with comprehensive and accessible data insights.' }
      ]
    },
    {
      id: 6,
      title: 'Cloud & DevOps',
      projects: [
        { id: '6-1', title: 'Machine Learning Deployment on AWS & GCP', description: 'Deployed machine learning models on AWS and GCP, leveraging cloud infrastructure for scalable and reliable AI solutions.' },
        { id: '6-2', title: 'Dockerized ML & Data Processing Pipelines', description: 'Containerized machine learning and data processing pipelines using Docker, ensuring consistency and portability across environments.' },
        { id: '6-3', title: 'CI/CD & Kubernetes for Scalable AI Solutions', description: 'Implemented CI/CD pipelines and Kubernetes orchestration for scalable AI solutions, enabling efficient development and deployment workflows.' }
      ]
    },
    {
      id: 7,
      title: 'Healthcare & Financial Analytics',
      projects: [
        { id: '7-1', title: 'Utilization & Pharmacy Claims Prediction for Clinical and Financial Risk', description: 'Developed predictive models for utilization and pharmacy claims to assess clinical and financial risks in healthcare settings.' },
        { id: '7-2', title: 'Impactable Medical Conditions Prediction', description: 'Created models to predict impactable medical conditions, enabling proactive healthcare interventions and improved patient outcomes.' },
        { id: '7-3', title: 'Savings Optimization in Healthcare Procurement', description: 'Implemented analytics solutions to optimize savings in healthcare procurement, reducing costs while maintaining quality standards.' }
      ]
    },
    {
      id: 8,
      title: 'Software Development & APIs',
      projects: [
        { id: '8-1', title: 'Django & Celery-based API Development', description: 'Built robust APIs using Django and Celery, providing scalable backend solutions for complex applications.' },
        { id: '8-2', title: 'Backend Services for AI/ML Workflows', description: 'Developed backend services specifically designed to support AI/ML workflows, enabling seamless integration of machine learning capabilities.' },
        { id: '8-3', title: 'Real-time Decision Support Systems', description: 'Created real-time decision support systems that leverage data analytics to provide actionable insights for critical business decisions.' }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    // Reset expanded projects when changing categories
    setExpandedProjects({});
  };

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="projects-page">
      <h2>Project Categories</h2>
      
      {/* Grid of project categories */}
      <div className="category-grid">
        {projectCategories.map(category => (
          <div 
            key={category.id}
            className={`category-box ${selectedCategory === category.id ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
      
      {/* Project list for selected category */}
      {selectedCategory && (
        <div className="project-list-container">
          <h3>{projectCategories.find(c => c.id === selectedCategory)?.title} Projects</h3>
          <div className="project-list">
            {projectCategories
              .find(c => c.id === selectedCategory)
              ?.projects.map(project => (
                <div key={project.id} className="project-item">
                  <div className="project-header" onClick={() => toggleProject(project.id)}>
                    <span className="expand-icon">
                      {expandedProjects[project.id] ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                    <h4>{project.title}</h4>
                  </div>
                  
                  {expandedProjects[project.id] && (
                    <div className="project-details">
                      <p>{project.description}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;