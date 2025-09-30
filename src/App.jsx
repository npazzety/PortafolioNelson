import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';

function ScrollHandler({ aboutRef, skillsRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#skills') {
      skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <Router>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <ScrollHandler aboutRef={aboutRef} skillsRef={skillsRef} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section ref={aboutRef}><About /></section>
                <Hobbies />
                <section ref={skillsRef}><Skills /></section>
              </>
            }
          />
          {/* Esta ruta le dice a React Router que Projects.jsx se encarga de sus propias rutas */}
          <Route path="/projects/*" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;