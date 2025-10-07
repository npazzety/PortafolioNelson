import '../styles/skills.css';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import sql from '../img/sql.png';
import python from '../img/python.png';
import pandas from '../img/pandas.png';
import nodejs from '../img/nodejs.png';
import sping from '../img/sping.png';
import mysql from '../img/mysql.png';
import numpy from '../img/numpy.png';
import react from '../img/react.png';
import laravel from '../img/laravel.png';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-card">
        <h2>Skills</h2>

        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={html} alt="HTML5" />
              <span>HTML5</span>
              <div className="skill-bar"><div className="fill" style={{ width: '60%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={css} alt="CSS3" />
              <span>CSS3</span>
              <div className="skill-bar"><div className="fill" style={{ width: '70%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={js} alt="JavaScript" />
              <span>JavaScript</span>
              <div className="skill-bar"><div className="fill" style={{ width: '60%' }}></div></div>
            </div>
              <div className="skill-item">
              <img src={react} alt="react" />
              <span>React</span>
              <div className="skill-bar"><div className="fill" style={{ width: '40%' }}></div></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={nodejs} alt="Node.js" />
              <span>Node.js</span>
              <div className="skill-bar"><div className="fill" style={{ width: '30%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={sping} alt="Spring Boot" />
              <span>Spring Boot</span>
              <div className="skill-bar"><div className="fill" style={{ width: '40%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={laravel} alt="Spring Boot" />
              <span>Laravel</span>
              <div className="skill-bar"><div className="fill" style={{ width: '40%' }}></div></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Base de Datos</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={sql} alt="SQL Server" />
              <span>SQL Server</span>
              <div className="skill-bar"><div className="fill" style={{ width: '50%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={mysql} alt="MySQL Workbench" />
              <span>MySQL Workbench</span>
              <div className="skill-bar"><div className="fill" style={{ width: '60%' }}></div></div>
            </div>
          </div>
        </div>

        <div className="skill-category">
          <h3>Ciencia de Datos</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={python} alt="Python" />
              <span>Python</span>
              <div className="skill-bar"><div className="fill" style={{ width: '30%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={pandas} alt="Pandas" />
              <span>Pandas</span>
              <div className="skill-bar"><div className="fill" style={{ width: '30%' }}></div></div>
            </div>
            <div className="skill-item">
              <img src={numpy} alt="NumPy" />
              <span>NumPy</span>
              <div className="skill-bar"><div className="fill" style={{ width: '20%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
