import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/#about">Sobre mí</Link>
        <Link to="/#skills">Habilidades</Link>
        <Link to="/projects">Proyectos</Link>
        <a href="mailto:nelsonpazzety10@gmail.com">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;