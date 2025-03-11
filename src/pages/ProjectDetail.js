import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // This component is no longer needed with our new project structure
  // Redirect to the projects page
  React.useEffect(() => {
    navigate('/projects');
  }, [navigate]);
  
  return (
    <div className="loading">
      Redirecting...
    </div>
  );
}

export default ProjectDetail;