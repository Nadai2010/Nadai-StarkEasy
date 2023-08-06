import  { useState, useEffect } from 'react';
import './Juega.css';

const Juega = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCurrentBackgroundClass = () => {
    if (scrollPosition >= 200) {
      return 'background-juega-2';
    } else if (scrollPosition >= 100) {
      return 'background-juega-1';
    } else {
      return 'background-juega-default';
    }
  };

  return (
    <div className="juega-container">
      <div className={`image-container ${getCurrentBackgroundClass()}`}>
          {scrollPosition === 0 && (
          <div className="welcome-container">
            <h1>Bienvenidos al cuento</h1>
          </div>
        )}

        {scrollPosition >= 100 && (
          <div className="story-container">
            <p>Texto de la primera imagen</p>
            <img src="../assets/Portada.jpeg" alt="Imagen 1" />
          </div>
        )}

        {scrollPosition >= 200 && (
          <div className="magic-container">
            <p>Texto de la segunda imagen</p>
            <img src="../assets/imagen2.jpg" alt="Imagen 2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Juega;
