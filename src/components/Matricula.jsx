import React from 'react';

const Matricula = ({ onBack }) => {
    return (
        <div className="projects-container detail-view">
            <button className="back-button" onClick={onBack}>← Volver a Proyectos</button>
            <div className="project-detail-content">
                <h2>Matrícula</h2>
                <p>Aquí va toda la información detallada del proyecto de Matrícula.</p>
            </div>
        </div>
    );
};

export default Matricula;