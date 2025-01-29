import React from 'react';
import placeholderImg from '../assets/images/amit.jpg';

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <img
        src={placeholderImg}
        alt="Amit Kumar placeholder"
        style={{ width: '200px', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '1rem' }}>
        Data Scientist/Engineer with over 12 years of experience in credit risk,
        healthcare, and retail industries with organizations and teams from
        several geographies and diverse backgrounds. Adaptive personality,
        being a mix of team player, mentor and leader as a project demands.
      </p>
      <p>
        Mathematics major with a knack for problem solving. Expertise in
        Machine Learning with sound theoretical understanding of algorithms
        and application of Statistical methods to business problems.
        Consistently brought value to products, clients, and teams with
        a high ROI on projects of diverse nature. Currently looking for
        an opportunity for a long-term role.
      </p>
      <p>Values: Integrity, inclusiveness, professionalism, mutual respect, collaboration, learning and growth</p>
    </div>
  );
}

export default About;