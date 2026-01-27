'use client';

import React from 'react';
import '../styles/ProjectMap.css';
type ProjectMapProps = {
  lat: number;
  lng: number;
  title: string;

};

const ProjectMap: React.FC<ProjectMapProps> = ({ lat, lng, title }) => {
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <section className="project-map-section">
      <iframe
        src={mapUrl}
        width="80%"
        height="100%"
        className="project-map-iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="project-map-overlay">
        <h3>{title}</h3>
 
      </div>
    </section>
  );
};

export default ProjectMap;
