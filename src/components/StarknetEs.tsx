import { useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import NetworkInfo from './NetworkInfo';

interface Resource {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const StarknetEsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Establecer un espacio entre los videos y las cartas */
  gap: 20px;

  /* Ajuste para dispositivos móviles */
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const Title = styled.div`
  font-size: 35px;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Mostrar dos videos en horizontal en pantallas grandes */
  grid-gap: 20px;
  margin-bottom: 2rem;
  justify-items: center; /* Centrar los elementos en el grid */

  /* Ajuste para dispositivos móviles */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding-bottom: 56.25%; /* Mantener el formato 16:9 */
  width: 100%; /* Asegurar que los videos ocupen el 100% del contenedor */

  /* Establecer un tamaño mínimo y máximo para el contenedor del video */
  min-width: 280px;
  max-width: 600px;
`;

const VideoPlayer = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
  margin-top: 2rem;
  justify-items: center; /* Centrar las cartas de recursos en el grid */

  /* Ajuste para dispositivos móviles */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f33adaa1;
  color: rgba(255, 255, 255, 0.87);
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin: 0 5px;

  &:hover {
    background-color: #4f007cfb;
  }
`;

const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const ResourceTitle = styled.div`
  font-size: 30px;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
  margin-top: 5px;
`;

const ResourceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s;
  width: 100%;
  max-width: 280px;
`;

const ResourceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ResourceDetails = styled.div`
  text-align: center;
  display: none;
`;

const ResourceCardWrapper = styled.div`
  &:hover ${ResourceCard} {
    border-color: #a93af3;
    transform: scale(1.1);
    outline: none;
  }

  &:hover ${ResourceDetails} {
    display: block;
  }
`;

const ResourceDetailsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResourceDetailsContainer = styled.div`
  background-color: #cccbcbf6;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin-bottom: 50px;
`;

const ResourceDetailsTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ResourceDetailsDescription = styled.div`
  margin-bottom: 10px;
`;

const ResourceDetailsLink = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #3f51b5;
  text-decoration: none;
`;

// Datos de recursos

const resources: Resource[] = [
  {
    id: '1',
    image: '../src/assets/StarknetBook.png',
    title: 'Starknet Book',
    description: 'El libro de todo el ecosistema de Starknet, una documentación exhaustiva de arquitectura, y Starknet general, Starknet Book',
    link: 'https://book.starknet.io/',
  },
  {
    id: '2',
    image: '../src/assets/CairoBook.png',
    title: 'Título del Recurso 2',
    description: 'Descripción del Recurso 2',
    link: 'https://cairo-book.github.io/',
  },
  {
    id: '3',
    image: '../src/assets/CairoBook.png',
    title: 'Título del Recurso 2',
    description: 'Descripción del Recurso 2',
    link: 'https://cairo-book.github.io/',
  },
  {
    id: '4',
    image: '../src/assets/CairoBook.png',
    title: 'Título del Recurso 2',
    description: 'Descripción del Recurso 2',
    link: 'https://cairo-book.github.io/',
  },
];

const StarknetEs = () => {
  const videoIds = ['4D11ejpK0iQ', 'istF-lBqiXk', 'L0dX2vohHq0', 'dBPYL6SY4jk', 'T-h41OMx2xo', '9Ku3rI0stYM', 'dXRH0XNmnKQ', 'iQkoyzPtrTk', 'n8jMybcp-Mg', 'm-oqwRtip7c', 'YynOvpIHv08', 'dAfpkcYzDyE', 'Gm84xwNN640'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

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
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videoIds.length - 1 : prevIndex - 1));
  };

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videoIds.length - 1 ? 0 : prevIndex + 1));
  };

  const openResourceDetails = (resource: Resource) => {
    setSelectedResource(resource);
  };

  return (
    <StarknetEsContainer>
      <Title>Starknet en Español</Title>
      <VideoContainer>
        <VideoGrid>
          <VideoItem>
            <VideoPlayer videoId={videoIds[currentVideoIndex]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
          </VideoItem>
          <VideoItem>
            <VideoPlayer videoId={videoIds[(currentVideoIndex + 1) % videoIds.length]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
          </VideoItem>
        </VideoGrid>
        <div className="starknet-es-navigation">
          <Button className="starknet-es-previous-button" onClick={goToPreviousVideo}>
            Anterior
          </Button>
          <Button className="starknet-es-next-button" onClick={goToNextVideo}>
            Siguiente
          </Button>
        </div>
      </VideoContainer>
      <ResourceContainer>
        <ResourceTitle>Recursos Starknet</ResourceTitle>
        <CardContainer>
          <ResourceGrid>
            {resources.map((resource) => (
              <ResourceCardWrapper key={resource.id} onClick={() => openResourceDetails(resource)}>
                <ResourceCard>
                  <ResourceImage src={resource.image} alt={resource.title} />
                  <ResourceDetails className={selectedResource === resource ? 'starknet-es-resource-card-selected' : ''}>
                    <ResourceDetailsTitle>{resource.title}</ResourceDetailsTitle>
                    <ResourceDetailsDescription>{resource.description}</ResourceDetailsDescription>
                    <ResourceDetailsLink href={resource.link} target="_blank" rel="noopener noreferrer">
                      Ver más
                    </ResourceDetailsLink>
                  </ResourceDetails>
                </ResourceCard>
              </ResourceCardWrapper>
            ))}
          </ResourceGrid>
        </CardContainer>
        {selectedResource && (
          <ResourceDetailsOverlay onClick={() => setSelectedResource(null)}>
            <ResourceDetailsContainer>
              <ResourceDetailsTitle>{selectedResource.title}</ResourceDetailsTitle>
              <ResourceDetailsDescription>{selectedResource.description}</ResourceDetailsDescription>
              <ResourceDetailsLink href={selectedResource.link} target="_blank" rel="noopener noreferrer">
                Ver más
              </ResourceDetailsLink>
            </ResourceDetailsContainer>
          </ResourceDetailsOverlay>
        )}
      </ResourceContainer>
      <div >
    <NetworkInfo />
    </div>
   </StarknetEsContainer>
);
};

export default StarknetEs;
