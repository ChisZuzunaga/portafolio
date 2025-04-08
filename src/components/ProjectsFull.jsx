import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Importa los datos

const Projects = () => {
  return (
    <section id="projects_full" className="bg-projects-custom py-10 pb-bottom-50px shadow-inner-top">
      {/* Contenedor principal */}
      <article className="text-center pt-custom-90px pb-custom-30px ml-230px-md mr-230px-md ml-mr-30px">
        <div className="flex items-center justify-center ">
          <div className="bar-custom"></div>
          <h1 className="text-gray text-base font-light txt-20-perc">
            MY LATEST PROJECTS
          </h1>
          <div className="bar-custom"></div>
        </div>
      </article>
      <article className="ml-230px-md mr-230px-md ml-mr-60px">
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-xl overflow-hidden p-10px"
            >
              <Link to={`/project/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-lg"
                />
                <div className="pt-10px">
                  <h2 className="text-base font-normal">{project.title}</h2>
                  <p className="text-sm font-light">{project.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Projects;