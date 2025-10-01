import React from 'react';
import { projectData } from '../data';

const Projects = () => {
  return (
    <div className="bg-[#0e1925] text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">BuildClub Projects</h1>
      <ul className="space-y-4">
        {projectData.map((proj, i) => (
          <li key={i} className="text-lg">
            <a
              href={proj.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-600"
            >
              {proj.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
