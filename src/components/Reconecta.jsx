import React from 'react';
import '../styles/DetalleProyecto.css';

// Se importan todas las imágenes por sus nombres de archivo exactos
import logoImage from '../img/Proyecto_Reconecta/logo.png';
import imagen1 from '../img/Proyecto_Reconecta/1.png';
import imagen2 from '../img/Proyecto_Reconecta/2.png';
import imagen3 from '../img/Proyecto_Reconecta/3.png';
import imagen4 from '../img/Proyecto_Reconecta/4.png';
import imagen5 from '../img/Proyecto_Reconecta/5.png';
import imagen6 from '../img/Proyecto_Reconecta/6.png';
import fodaImage from '../img/Proyecto_Reconecta/FODA.png';
import edtImage from '../img/Proyecto_Reconecta/EDT.png';
import cronogramaImage from '../img/Proyecto_Reconecta/Cronograma.jpg';

const Reconecta = () => {
    return (
        <div className="projects-container detail-view">
            <div className="project-detail-content">
                <h2>Reconecta: Plataforma para la Reintegración del Migrante</h2>
                <img src={logoImage} alt="Logo de Reconecta" className="project-detail-image logo-reconecta" />
                
                <section>
                    <h3>La Idea de Negocio</h3>
                    <p>
                        Frente a la crisis migratoria, Reconecta nace como una plataforma digital que brinda formación, empleo y apoyo emocional a migrantes retornados y personas en riesgo de migrar, conectándolos con cursos certificados, oportunidades laborales y mentorías para facilitar su reinserción.
                    </p>
                </section>
                
                <section>
                    <h3>Definición del Producto</h3>
                    <p>
                        Reconecta es una plataforma digital diseñada para apoyar la reintegración socioeconómica de migrantes hondureños retornados. La plataforma conecta a los usuarios con cursos certificados adaptados al mercado laboral, acceso a una bolsa de empleo inclusiva y sesiones de apoyo psicológico accesibles. También facilita la conexión entre migrantes capacitados y empleadores solidarios.
                    </p>
                </section>

                <section>
                    <h3>Mi Rol en el Proyecto</h3>
                    <p>
                        Este proyecto fue un análisis profundo y un plan de negocio completo. Mi rol principal fue el diseño conceptual de la plataforma, la investigación del mercado, la definición del producto, la planificación de costos y la elaboración de las estrategias de operación y finanzas. Fue una iniciativa para demostrar la aplicación de conocimientos de gestión de proyectos y análisis de negocio para resolver un problema social.
                    </p>
                </section>

                <section>
                    <h3>Análisis de Viabilidad (FODA)</h3>
                    <p>Se realizó un análisis FODA para determinar las fortalezas, oportunidades, debilidades y amenazas del proyecto, asegurando un enfoque estratégico y un plan de acción viable.</p>
                    <img src={fodaImage} alt="Análisis FODA del proyecto Reconecta" className="project-detail-image" />
                </section>

                <section>
                    <h3>Tecnologías y Enfoque de Desarrollo</h3>
                    <ul className="technology-list">
                        <li>Diseño Conceptual: Figma</li>
                        <li>Base de Datos: MySQL</li>
                        <li>Servidor: Azure Functions</li>
                    </ul>
                    <p>Aunque el proyecto no se programó en su totalidad, el plan de negocio incluyó la conceptualización y desarrollo de la base de datos en MySQL y la selección de tecnologías para una infraestructura escalable y robusta, utilizando servicios en la nube de Microsoft Azure.</p>
                </section>
                
                <section>
                    <h3>Planificación del Proyecto</h3>
                    <div className="image-grid">
                        <img src={cronogramaImage} alt="Cronograma del Proyecto" />
                        <img src={edtImage} alt="Estructura de Desglose de Trabajo (EDT)" />
                    </div>
                </section>

                <section>
                    <h3>Vistas del Sistema</h3>
                    <div className="image-grid">
                        <img src={imagen1} alt="Vista de la Landing Page del proyecto" />
                        <img src={imagen2} alt="Página de inicio de sesión" />
                        <img src={imagen3} alt="Página de donaciones" />
                        <img src={imagen4} alt="Portada de la sección de psicología" />
                        <img src={imagen5} alt="Sección de empleos disponibles" />
                        <img src={imagen6} alt="Sección de cursos disponibles" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Reconecta;