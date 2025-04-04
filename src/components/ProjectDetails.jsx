import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Importa los datos

const ProjectDetails = () => {
  const { id } = useParams(); // Obtiene el ID del proyecto desde la URL
  const project = projectsData.find((p) => p.id === parseInt(id)); // Busca el proyecto por ID

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <section className="bg-white p-6">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover mt-4" />
      <p className="text-lg mt-4">{project.description}</p>
    </section>
  );
};

export default ProjectDetails;