import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Importa los datos
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { i18n, t } = useTranslation(); // Hook para traducciones
  const currentLang = i18n.language; // Obtén el idioma actual
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página al inicio al cargar el componente
  }, []);

  return (
    <section id="projects_full" className="bg-projects-custom py-10 pb-bottom-50px shadow-inner-top">
      {/* Contenedor principal */}
      <article className="text-center pt-custom-90px pb-custom-30px ml-230px-md mr-230px-md ml-mr-30px">
        <div className="flex items-center justify-center ">
          <div className="bar-custom"></div>
          <h1 className="type-body type-light color-muted txt-20-perc">
            {t('projects_container.tittle')}
          </h1>
          <div className="bar-custom"></div>
        </div>
      </article>
      <article className="ml-230px-md mr-230px-md ml-mr-60px">
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...projectsData].reverse().map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <Link to={`/project/${project.id}`} className="block">
                <div
                  className="aspect-video w-full overflow-hidden"
                  style={{ backgroundColor: project.thumbnailBackground }}
                >
                  <img
                    src={project.image}
                    alt={project.title[currentLang]}
                    className={`block h-full w-full object-center ${project.thumbnailFit === 'contain' ? 'object-contain' : 'scale-[1.02] object-cover'}`}
                  />
                </div>
                <div className="p-10px">
                  <h2 className="type-body type-regular">{project.title[currentLang]}</h2>
                  <p className="type-small type-light">{project.description[currentLang]} </p>
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
