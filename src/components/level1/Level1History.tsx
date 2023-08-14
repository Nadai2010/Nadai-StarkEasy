import { Suspense } from "react";
import styled from "styled-components";
import CarouselAdventure from '../CarouselAdventure'

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






const Level1History = () => {
  return (
    <Section id="about">
      <Container>
        <Box1>
          <Suspense fallback={<Loading />}>
          <CarouselAdventure />
          </Suspense>
        </Box1>
       
        <Box>
          <Title>
            Welcome to the extraordinary world of Starknetia!
          </Title>
          <SubText2>
           Starknetia is a big city-region in the magical World of Layera.
          </SubText2>
          <SubText>
           Get ready to embark on a martial arts adventure like no other. In this adventure, you will put yourself in the shoes of young students moving their first steps in the famous Martial Arts Academy of Starknetia, the StarkJitsu School.
           <br/>
           <br/>
           A lot of tough but inspiring challenging adventures are waiting for you. However, dear StarkJitsu students, the road to mastery is not easy.
           <br/>
           <br/>
           In your relentless pursuit for greatness, you will face several challenges that will test your strength, your agility and your inner soul.
          <br/>
          <br/>
           Get ready for an intense training program guided by the legendary “Stark Senseis”, experienced teachers renowned for their mastery of the Stark-arts. With their advice, you will push your limits to become a StarkSenshi, a wise and powerful Fighter of Starknetia.
          </SubText>
        </Box>
        
      </Container>
    </Section>
  );
};

export default Level1History;
