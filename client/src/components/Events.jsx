import React, { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eventData, { projectData } from '../data';

const Events = forwardRef(({ eventRef }, ref) => {
  const [showEvents, setShowEvents] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEvents(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0e1925] text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-8" ref={eventRef}>EVENTS</h1>
      </div>
      
      <div className="w-full flex flex-row overflow-x-auto gap-12 py-8 px-4 md:px-16 lg:px-24 scroll-smooth">
        {eventData.map((event, index) => {
          const isProjectCard = event.title === 'BuildClub Projects';
          return (
            <div
              key={index}
              className={`flex-shrink-0 w-80 md:w-96 p-6 rounded-lg shadow-lg bg-gray-900 
                ${showEvents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
                transition-all duration-500 transform
                ${isProjectCard ? 'cursor-pointer hover:shadow-xl hover:scale-105' : 'hover:shadow-xl hover:scale-105'} transition-transform duration-300`}
              onClick={isProjectCard ? () => setShowProjects(!showProjects) : null}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {isProjectCard ? event.title : event.link ? (
                      <Link to={event.link} className="hover:text-blue-400">
                        {event.title}
                      </Link>
                    ) : (
                      event.title
                    )}
                  </h2>
                  <p className="mt-1 text-gray-400">{event.date}</p>
                  {isProjectCard && showProjects && (
                    <ul className="mt-4 list-disc list-inside space-y-2">
                      {projectData.map((project, projIndex) => (
                        <li key={projIndex}>
                          <a
                            href={project.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-300 hover:text-blue-500 underline"
                          >
                            {project.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
              {event.img && (
                <div className="mt-4 w-full">
                  <img src={event.img} alt={event.title} className='w-full h-48 object-cover rounded-lg' />
                </div>
              )}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
});

Events.displayName = 'Events';

export default Events;