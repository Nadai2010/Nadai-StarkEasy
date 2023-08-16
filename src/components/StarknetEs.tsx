import { useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import imagen from '../assets/StarkNet-en-Español.png';
import CairoBookImage from '../assets/CairoBook.png'
import StarknetBookImage from '../assets/StarknetBook.png'
import StarknetDocImage from '../assets/StarknetDoc.png'
import CairoDocImage from '../assets/CairoDoc.png'

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
  min-height: 150vh;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -20px;
  

  /* Establecer un espacio entre los videos y las cartas */
  gap: 20px;

  /* Ajuste para dispositivos móviles */
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const TitleText = styled.h2`
  font-size: 4rem;
  color: #6b099c;
  margin-bottom: 1rem;
  font-family: 'Teko', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 1rem;
  font-family: 'Teko', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -40px;
}
`;

const TitleText2 = styled.h2`
  font-size: 4rem;
  color: #6b099c;
  margin-bottom: 1rem;
  font-family: 'Teko', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleImage = styled.img`
  width: 150px; /* Ajusta el tamaño de la imagen según tus necesidades */
  height: 150px;

`;


const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  min-height: 70vh;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 60px;
  margin-bottom: 2.5rem;
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
  padding-bottom: 56.25%;
  width: 100%;
  min-width: 75vh;
  transition: transform 0.3s; 
  
  &:hover {
    transform: scale(1.1); 
  }
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
  padding: 15px 60px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f33adaa1;
  color: rgba(255, 255, 255, 0.87);
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin: 0 30vh 0 35vh; /* Agregar margen derecho y ajustar margen izquierdo */

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
  max-width: 80%;
  margin-bottom: 10px;
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

const ResourceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  /* Ajuste para dispositivos móviles */
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const ResourceCardWrapper = styled.div`
  flex: 1;
  max-width: 280px;
  margin-bottom: 10px;

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

const ThemeContainer = styled.div`
  background-color: #ff7f50; /* Color de fondo o tema deseado */
  padding: 20px; 
  width: 100%; /* Ancho al 100% */
  min-height: 100vh; /* Altura al 100% del alto visible */
`;

// Datos de recursos

const resources: Resource[] = [
  {
    id: '1',
    image: StarknetBookImage,
    title: 'Starknet Book',
    description: 'El libro de todo el ecosistema de Starknet, una documentación exhaustiva de arquitectura, y Starknet general, Starknet Book',
    link: 'https://book.starknet.io/',
  },
  {
    id: '2',
    image: CairoBookImage,
    title: 'Cairo Book',
    description: 'Descubre el libro de Aprendizaje sobre el Lenguaje de Programación Cairo y domina su sintaxis.',
    link: 'https://cairo-book.github.io/',
  },
  {
    id: '3',
    image: StarknetDocImage,
    title: 'Starknet Doc',
    description: 'Documentos oficiales en General de Starknet',
    link: 'https://docs.starknet.io/documentation/',
  },
  {
    id: '4',
    image: CairoDocImage,
    title: 'Cairo Doc',
    description: 'Documentos oficiales en General de Cairo',
    link: 'https://www.cairo-lang.org/docs/',
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
    <TitleContainer>
      <TitleText>Starknet en Español</TitleText>
    </TitleContainer>
    <SubTitle>Jueves De Cairo</SubTitle>

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
      
          <ThemeContainer>
      <ResourceContainer>
      <TitleText2>Recursos Starknet</TitleText2>
        <TitleImage src={imagen} alt="Imagen" />
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
      </ThemeContainer>
   </StarknetEsContainer>
);
};

export default StarknetEs;
