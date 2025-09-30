import React from 'react';
import '../styles/DetalleProyecto.css';

import SimulacionImage from '../img/Proyecto_Teoria/Simulacion.png';
import DataFrameImage from '../img/Proyecto_Teoria/DataFrame.png';

const Teoria = () => {
    return (
        <div className="projects-container detail-view">
            <div className="project-detail-content">
                <h2>Aplicación de Teoría</h2>

                <img src={SimulacionImage} alt="Simulación de Eventos Discretos" className="project-detail-image" />
                
                <section>
                    <h3>Enunciado del Alcance del Proyecto</h3>
                    <p>
                        Este proyecto es una simulación de eventos discretos que modela el sistema de alquiler de consolas en un negocio de videojuegos. El objetivo es analizar cómo se comportan los clientes y la eficiencia del servicio, registrando eventos como la llegada, el inicio y el final de una partida, y el abandono por falta de consolas disponibles.
                    </p>
                </section>

                <section>
                    <h3>Mi Rol en el Proyecto</h3>
                    <p>
                        Este fue un proyecto de investigación y desarrollo individual, enfocado en la aplicación de conceptos de teoría de simulación para resolver un problema práctico. Mi rol principal fue el diseño del modelo, la implementación en Python y el análisis de los resultados para comprender el rendimiento del sistema propuesto.
                    </p>
                </section>

                <section>
                    <h3>Tecnologías Utilizadas</h3>
                    <ul className="technology-list">
                        <li>Python</li>
                        <li>SimPy</li>
                        <li>Pandas</li>
                    </ul>
                </section>

                <section>
                    <h3>Anexos / Vistas del Sistema</h3>
                    <div className="annex-images">
                        <img src={SimulacionImage} alt="Salida de la consola con los eventos de la simulación" />
                        <img src={DataFrameImage} alt="DataFrame de Pandas con los registros de los eventos" />
                    </div>
                </section>
                
                <div className="project-links">
                    <h3>Repositorio de Código</h3>
                    <div className="project-links-grid">
                        <a href="https://github.com/npazzety/Proyecto_Teoria_Eventos_Discretos" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            Repositorio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teoria;