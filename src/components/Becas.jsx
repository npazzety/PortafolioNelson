import React from 'react';
import '../styles/DetalleProyecto.css';

import landingpageImage from '../img/Proyecto_Becas/Landingpage.png';
import actividadesImage from '../img/Proyecto_Becas/actividades.png';
import actualizadasImage from '../img/Proyecto_Becas/actrealizadas.png';
import agregaractividadImage from '../img/Proyecto_Becas/agregaractividad.png';
import cambioContrasenaImage from '../img/Proyecto_Becas/cambiocontraseña.png';
import comunicadosImage from '../img/Proyecto_Becas/Comunicados.png';
import infobecaImage from '../img/Proyecto_Becas/infobeca.png';
import inicioSesionImage from '../img/Proyecto_Becas/iniciosesion.png';
import listadoImage from '../img/Proyecto_Becas/listado.png';
import perfilBecarioImage from '../img/Proyecto_Becas/perfilbecario.png';
import planillasImage from '../img/Proyecto_Becas/planillas.png';
import reportesImage from '../img/Proyecto_Becas/reportes.png';

const Becas = () => {
    return (
        <div className="projects-container detail-view">
            <div className="project-detail-content">
                <h2>Plataforma Avanzada de Control Horas PASEE</h2>
                
                <img src={landingpageImage} alt="Vista de la Landing Page del proyecto" className="project-detail-image" />
                
                <section>
                    <h3>Enunciado del Alcance del Proyecto</h3>
                    <p>
                        La Plataforma Avanzada de Control Horas PASEE permitirá un seguimiento preciso de las horas trabajadas por los becarios, gestionar su estado dentro del programa, registrar su participación en actividades, y facilitar la administración de pagos. Además, proporcionará información relevante sobre becas para futuros postulantes. La plataforma también optimizará los procesos administrativos mediante la generación automática de reportes y garantizará la seguridad y privacidad de la información de becarios y administradores.
                    </p>
                </section>
                
                <section>
                    <h3>Mi Rol en el Proyecto</h3>
                    <p>
                        Este fue un trabajo en equipo donde mi rol principal fue el desarrollo del frontend junto a un compañero para su presentación en la UNAH. Trabajamos en base a metodologías ágiles, usando sprints y demos para la entrega del proyecto en diferentes etapas, garantizando un flujo de trabajo organizado y eficiente.
                    </p>
                </section>

                <section>
                    <h3>Alcance Funcional y Módulos del Sistema</h3>
                    <h4>Módulos Generales:</h4>
                    <ul>
                        <li>Landing Page: Página de inicio con información general sobre el sistema.</li>
                        <li>Noticias/Comunicados: Sección para que los administradores publiquen anuncios.</li>
                        <li>Información de Becas: Detalles sobre tipos de becas, requisitos y beneficios.</li>
                        <li>Preguntas Frecuentes: Respuestas a dudas comunes de los becarios.</li>
                        <li>Login y Cambio de Contraseña: Autenticación y gestión de credenciales de usuario.</li>
                    </ul>
                    <h4>Módulos para Becarios:</h4>
                    <ul>
                        <li>Actividades Disponibles: Listado de actividades para cumplir horas.</li>
                        <li>Actividades Inscritas: Registro de actividades actuales.</li>
                        <li>Actividades Realizadas: Historial de actividades completadas.</li>
                        <li>Reportes de Seguimiento Recibidos: Reportes enviados por los administradores.</li>
                        <li>Perfil del Becario: Información personal y académica.</li>
                        <li>Información de la Beca: Detalles específicos sobre la beca.</li>
                    </ul>
                    <h4>Módulos para Administradores:</h4>
                    <ul>
                        <li>Gestión de Actividades: Creación, modificación y eliminación de actividades.</li>
                        <li>Lista de Asistencia: Registro de la asistencia.</li>
                        <li>Revisión de Seguimiento: Revisión de cambios en el estado de la beca o desempeño.</li>
                        <li>Historial de Reportes: Consulta de reportes generados.</li>
                        <li>Gestión de Planillas: Administración de la generación de pagos.</li>
                    </ul>
                </section>
                
                <section>
                    <h3>Tecnologías Utilizadas</h3>
                    <ul className="technology-list">
                        <li>React/Vite</li>
                        <li>Bootstrap</li>
                        <li>Toast</li>
                        <li>Azure Functions</li>
                        <li>Azure Database SQL</li>
                        <li>Azure Blob Storage</li>
                        <li>JWT / Azure AD B2C</li>
                    </ul>
                </section>

                <section>
                    <h3>Anexos / Vistas del Sistema</h3>
                    <div className="annex-images">
                        <img src={inicioSesionImage} alt="Página de inicio de sesión" />
                        <img src={comunicadosImage} alt="Sección de comunicados" />
                        <img src={infobecaImage} alt="Página de información de becas" />
                        <img src={listadoImage} alt="Listado de actividades" />
                        <img src={perfilBecarioImage} alt="Página de perfil del becario" />
                        <img src={actividadesImage} alt="Vista de actividades" />
                        <img src={actualizadasImage} alt="Actividades actualizadas" />
                        <img src={agregaractividadImage} alt="Agregar actividad" />
                        <img src={cambioContrasenaImage} alt="Página de cambio de contraseña" />
                        <img src={planillasImage} alt="Gestión de planillas" />
                        <img src={reportesImage} alt="Generación de reportes" />
                    </div>
                </section>

                <div className="project-links">
                    <h3>Repositorio de Código</h3>
                    <div className="project-links-grid">
                        <a href="https://github.com/CarlosTorresGz/BecasUnahFE" target="_blank" rel="noopener noreferrer">Frontend</a>
                        <a href="https://github.com/REliezer/Azure-Functions" target="_blank" rel="noopener noreferrer">Backend</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Becas;