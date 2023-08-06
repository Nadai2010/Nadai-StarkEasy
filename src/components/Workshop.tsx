import { useState } from 'react';
import YouTube from 'react-youtube';
import './Workshop.css';

const Workshop = () => {
  const videoIdPioneros = ['FeQlNOin4ZU', 'nZ3L4L4KDTI', 'hfuVHil2kgY', 'BUk_BNfGwmc', '7wz8zKrABHc' ];
  const videoIdL2 = ['s6vmWYkZoa8', 'KxUhBM3a6oM', 'elXLye41_b8', 'y3rJnaNRiGI', 'SnaZjW2p3Io', 'flnTFmEnjEQ', '6vdP329tK_I' ];
  const [currentVideoIndexPioneros, setCurrentVideoIndexPioneros] = useState(0);
  const [currentVideoIndexL2, setCurrentVideoIndexL2] = useState(0);
 
  const onReady = () => {};

  const onPlay = () => {};

  const onPause = () => {};

  const opts = {
    width: '525',
    height: '295',
    playerVars: {
      autoplay: 0,
    },
  };

  const goToPreviousVideo = () => {
    setCurrentVideoIndexPioneros((prevIndex) => (prevIndex === 0 ? videoIdPioneros.length - 1 : prevIndex - 1));
  };

  const goToNextVideo = () => {
    setCurrentVideoIndexPioneros((prevIndex) => (prevIndex === videoIdPioneros.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousVideo2 = () => {
    setCurrentVideoIndexL2((prevIndex) => (prevIndex === 0 ? videoIdL2.length - 1 : prevIndex - 1));
  };

  const goToNextVideo2 = () => {
    setCurrentVideoIndexL2((prevIndex) => (prevIndex === videoIdL2.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="workshop-container">
      <div className="workshop-es-title text-4xl shadowed mb-5">Pioneros - Basecamp en Español</div>
      <div className="workshop-es-video-grid">
        <div className="workshop-es-video-item">
        <YouTube videoId={videoIdPioneros[currentVideoIndexPioneros]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
        </div>
        <div className="workshop-es-video-item">
          <YouTube videoId={videoIdPioneros[(currentVideoIndexPioneros + 1) % videoIdPioneros.length]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
        </div>
        </div>
      <div className="workshop-es-navigation">
        <button className="workshop-es-button starknet-es-previous-button" onClick={goToPreviousVideo}>
          Anterior
        </button>
        <button className="workshop-es-button workshop-es-next-button" onClick={goToNextVideo}>
          Siguiente
        </button>
      </div>
      <div className="workshop-es-title text-4xl shadowed mb-5">Workshops - L2 en Español</div>
      <div className="workshop-es-video-grid">
        <div className="workshop-es-video-item">
          <YouTube videoId={videoIdL2[currentVideoIndexL2]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
        </div>
        <div className="workshop-es-video-item">
          <YouTube videoId={videoIdL2[(currentVideoIndexL2 + 1) % videoIdL2.length]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
        </div>
      </div>
      <div className="workshop-es-navigation">
        <button className="workshop-es-button starknet-es-previous-button" onClick={goToPreviousVideo2}>
          Anterior
        </button>
        <button className="workshop-es-button workshop-es-next-button" onClick={goToNextVideo2}>
          Siguiente
        </button>
      </div>
      </div>
   
     

  );
};

export default Workshop;