import { Suspense } from "react";
import styled from "styled-components";
import CarouselAdventureEs from '../CarouselAdventureEs'

import Loading from "../Loading";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color:black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 64em) {
    min-height: auto;
  }

`;


const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  height: 10%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 64em) {
    min-height: auto;
  }

  @media (max-width: 40em) {
    width: 70%;
    height: auto;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const Box1 = styled.div`
  width: 50%;
  margin-top: -7%;
  min-height: 130vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 64em) {
    min-height: auto;
  }

  @media (max-width: 40em) {
    width: 70%;
    height: auto;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 100%;
  margin: 0 auto;
  text-align: center; /* Mantén el texto centrado */
  margin-top: -15vh;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontxxxl}; /* Tamaño de fuente para pantallas medianas */
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl}; /* Tamaño de fuente para dispositivos móviles */
    text-align: center;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontg}; /* Tamaño de fuente para pantallas muy pequeñas (ejemplo: smartphones en posición vertical) */
    text-align: center;
  }
`;



const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 90%;
  margin: 1rem auto;
  font-weight: 400;
  text-align: center; /* Agregado para centrar el texto */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl}; /* Tamaño de fuente para pantallas medianas */
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd}; /* Tamaño de fuente para dispositivos móviles */
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }
`;

const SubText2 = styled.p`
  font-size: 40px;
  color: white;
  align-self: flex-start;
  width: 90%;
  margin: 1rem auto;
  font-weight: 400;
  text-align: center; /* Agregado para centrar el texto */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl}; /* Tamaño de fuente para pantallas medianas */
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl}; /* Tamaño de fuente para dispositivos móviles */
    text-align: center;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
    text-align: center;
  }
`;






const Level1HistoryEs = () => {
  return (
    <Section id="about">
      <Container>
        <Box1>
          <Suspense fallback={<Loading />}>
          <CarouselAdventureEs />
          </Suspense>
        </Box1>
       
        <Box>
          <Title>
          ¡Bienvenido al extraordinario mundo de Starknetia!
          </Title>
          <SubText2>
          ¡Comienza tu camino para convertirte en StarkSenshi!
          </SubText2>
          <SubText>
          Prepárate para embarcarte en una aventura de artes marciales como ninguna otra. En esta aventura te pondrás en la piel de jóvenes estudiantes que dan sus primeros pasos en la famosa Academia de Artes Marciales de Starknetia, la Escuela StarkJitsu.
           <br/>
           <br/>
           Te esperan muchas aventuras desafiantes, duras pero inspiradoras. Sin embargo, queridos estudiantes de StarkJitsu, el camino hacia la maestría no es nada fácil.
           <br/>
           <br/>
           En su incesante búsqueda de la grandeza, se enfrentarán a varios desafíos que pondrán a prueba su fuerza, su agilidad y su alma interior.
          <br/>
          <br/>
          Prepárate para un intenso programa de entrenamiento guiado por los legendarios "Stark Senseis", maestros experimentados reconocidos por su dominio de las artes de Starknet. Con sus consejos, superarás tus límites para convertirte en un StarkSenshi, un luchador sabio y poderoso de Starknetia.
          </SubText>
        </Box>
        
      </Container>
    </Section>
  );
};

export default Level1HistoryEs;
