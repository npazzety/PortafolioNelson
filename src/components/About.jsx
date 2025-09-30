import React from 'react';
import '../styles/about.css';
import fotoMia from '../img/Foto_mia.jpg';
import fondo from '../img/telefono.jpg'; // imagen de fondo para móviles

function About() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="about">
      {isMobile ? (
        <div
          className="image-bg"
          style={{ backgroundImage: `url(${fondo})` }}
        />
      ) : (
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/videos/fondomotion.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      )}

      <div className="about-card">
        <div className="about-img">
          <img src={fotoMia} alt="Nelson Izaguirre" />
        </div>
        <div className="about-info">
          <h2 className="about-name">NELSON IZAGUIRRE</h2>
          <h3 className="about-title">Ingeniero en Sistemas</h3>
          <p className="about-desc">
            Como desarrollador, mi fortaleza es el frontend, donde disfruto crear
            interfaces modernas y funcionales, brindando soluciones rápidas y
            eficientes. También me interesa el backend, lo que me permite tener una
            visión integral en los proyectos. Me gusta el trabajo en equipo y me
            desenvuelvo muy bien en entornos colaborativos, aportando ideas y
            adaptándome a los retos.
          </p>
          <div className="about-social">
            <a href="https://github.com/npazzety" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nelson-leonardo-izagurrre-pazzety-194252159?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;