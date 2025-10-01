import React from 'react';
import { projectData } from '../data';

const ProjectsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
  className="bg-blue-100 text-blue-900 rounded-xl shadow-lg p-4 w-full max-w-2xl relative border border-blue-900"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={e => { e.stopPropagation(); onClose(); }}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold shadow-md transition duration-200"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  <h1 className="text-2xl font-extrabold mb-4 text-center text-blue-700 drop-shadow">BuildClub Projects</h1>
        <ul className="space-y-3">
          {projectData.slice(0, 14).map((proj, i) => (
            <li key={i} className="text-base font-bold text-center">
              <a
                href={proj.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 rounded-lg bg-blue-200 text-blue-900 font-bold hover:bg-blue-300 hover:text-blue-800 transition duration-150 shadow-sm"
              >
                {proj.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsModal;