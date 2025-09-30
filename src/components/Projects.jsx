import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../styles/Projects.css';

// Importa los componentes de detalle de cada proyecto
import Becas from './Becas';
import Teoria from './Teoria';
import Reconecta from './Reconecta';

import landingPageImage from '../img/Proyecto_Becas/Landingpage.png';
import simulacion from '../img/Proyecto_Teoria/Simulacion.png';
import logo from '../img/Proyecto_Reconecta/logo.png';

// Componente para la grilla de proyectos
const ProjectGrid = () => {
    const projectsData = [
        {
            id: 'becas',
            title: 'Plataforma de Control de Horas PASEE',
            description: 'Un sistema avanzado para la gestión de becarios, el seguimiento de horas, y la administración de pagos.',
            image: landingPageImage,
        },
        {
            id: 'teoria',
            title: 'Aplicación de Teoría',
            description: 'Aplicación para aprender y practicar conceptos básicos de programación a través de ejercicios interactivos.',
            image: simulacion,
        },
        {
            id: 'reconecta',
            title: 'Proyecto Reconecta',
            description: 'Un proyecto social para conectar a estudiantes y docentes de diferentes facultades para organizar eventos, foros, etc.',
            image: logo,
        },
    ];

    return (
        <div className="projects-section-wrapper">
            <div className="projects-container">
                <h2 className="projects-title">Proyectos</h2>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <Link
                            key={project.id}
                            to={project.id} // <-- Navega a la ruta dinámica (ej. /projects/becas)
                            className="project-card-link"
                        >
                            <div className="project-card">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Componente principal de Proyectos que define las rutas
const Projects = () => {
    return (
        <Routes>
            {/* Si la ruta es /projects, muestra la grilla */}
            <Route path="/" element={<ProjectGrid />} />
            {/* Las rutas para cada proyecto individual */}
            <Route path="becas" element={<Becas />} />
            <Route path="teoria" element={<Teoria />} />
            <Route path="reconecta" element={<Reconecta />} />
        </Routes>
    );
};

export default Projects;