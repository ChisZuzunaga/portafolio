import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Importa los datos
import image_container from '../assets/Image_container.svg'; // Importa la imagen de contenedor
import Projects from './Projects'

const ProjectDetails = () => {
  const { id } = useParams(); // Obtiene el ID del proyecto desde la URL
  const project = projectsData.find((p) => p.id === parseInt(id)); // Busca el proyecto por ID

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  const { i18n, t } = useTranslation(); // Hook para traducciones
  const currentLang = i18n.language; // Obtén el idioma actual
  
  return (
    <>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-hero pb-bottom-50px plr-mobile-20px">
          <article className="bg-white-500 ml-230px-md sm-m-custom-5 mt-100px-md md:text-left text-center pt-custom-40px animate-fadeInRight">
              <header className="text-black text-3xl md:text-4xl font-regular">
                  <h1>
                      <span className="text-3xl md:text-5xl font-bold">{project.title[currentLang]}</span>
                      <div className='bar-custom'></div>
                      <span className='text-base md:text-lg font-light text-gray flex justify-end'>{project.date[currentLang]}</span>
                  </h1>
              </header>
              <p className="text-xl font-light pt-custom-9px text-justify">
                {project.description[currentLang]} 
              </p>
          </article>
          <article className="bg-white-500 p-4 row-span-2 mr-230px-md sm-m-custom-5 mt-80px-md animate-fadeInLeft pd-top-mobile-50px ml-30px-tablet">
            <div className="relative flex justify-center items-center">
              {/* Imagen contenedora en el fondo */}
              <img 
                src={project.image} 
                alt="Contenedor" 
                className="relative object-contain"
              />
            </div>
          </article>
        </section>
        <section className='bg-project-one bg-projects-custom plr-mobile-20px shadow-inner-top'>
          <article className='mr-230px-md ml-230px-md '>
            <h1 className='pt-80px pb-bottom-50px'>
              <span className='text-3xl md:text-5xl font-normal text-left pr-170px pl-170px'>{t('project_info.project')}</span>
              <p className='text-base md:text-lg pr-170px pl-170px text-justify pt-20px'>{project.project[currentLang]}</p>
            </h1>
          </article>
          <article className='mr-230px-md ml-230px-md '>
            <img src={project.image1} className='w-full pr-170px pl-170px'/>
          </article>
        </section>

        <section className='bg-project-one bg-projects-custom plr-mobile-20px'>
          <article className='mr-230px-md ml-230px-md '>
            <h1 className='pt-80px pb-bottom-50px'>
              <span className='text-3xl md:text-5xl font-normal text-left pr-170px pl-170px'>{t('project_info.challenges')}</span>
              <p className='text-base md:text-lg pr-170px pl-170px text-justify pt-20px'>{project.challenges[currentLang]}</p>
            </h1>
          </article>
          <article className='mr-230px-md ml-230px-md '>
            <img src={project.image2} className='w-full pr-170px pl-170px'/>
          </article>
        </section>

        <section className='bg-project-one bg-projects-custom pb-bottom-80px plr-mobile-20px'>
          <article className='mr-230px-md ml-230px-md '>
            <h1 className='pt-80px pb-bottom-50px'>
              <span className='text-3xl md:text-5xl font-normal text-left pr-170px pl-170px'>{project.extrainfo_tittle[currentLang]}</span>
              <p className='text-base md:text-lg pr-170px pl-170px text-justify pt-20px'>{project.extrainfo[currentLang]}</p>
            </h1>
          </article>
          <article className='mr-230px-md ml-230px-md '>
            <img src={project.image3} className='w-full pr-170px pl-170px'/>
          </article>
        </section>
        <Projects />
    </>
  );
};

export default ProjectDetails;