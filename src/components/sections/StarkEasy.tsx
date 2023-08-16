import { Suspense } from "react";
import styled from "styled-components";
import Carousel from '../Carousel'
import Button from "../Button";
import Loading from "../Loading";

const Section = styled.section`
  min-height: 100vh;
  width: 110%;
  background-color: #d81f3f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 75%;
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
      width: 100%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 100%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
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
  width: 90%;
  margin: 0 auto;
  text-align: left; /* Agregado para centrar el título */


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
  text-align: left; /* Agregado para centrar el texto */

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
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.customColor};
  align-self: flex-start;
  width: 90%;
  margin: 1rem auto;
  font-weight: 400;
  text-align: left; /* Agregado para centrar el texto */

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

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 90%;
  margin: 1rem auto;
  font-weight: 400;
  text-align: left; /* Agregado para centrar el texto */


  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl}; /* Tamaño de fuente para pantallas medianas */
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-self: center; /* Ajustado a "center" para centrar el botón */
  margin-right: -2%;

  button {
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-bottom: 3rem ; 
    font-size: ${(props) => props.theme.fontlg}; /* Tamaño de fuente para pantallas medianas */
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm}; /* Tamaño de fuente para dispositivos móviles */
    text-align: center;
  }
`;


const StarkEasy = () => {
  return (
    <Section id="starkeasy">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
          <Carousel />
          </Suspense>
        </Box>
        <Box>
          <Title>
            Introducing Stark Easy
          </Title>
          <SubText2>
            Your Learning dApp to learn about Starknet!
          </SubText2>
          <SubText>
            Are you eager to learn about Starknet, its cutting-edge technology and its 
            fast-growing ecosystem but you find the complexities a bit overwhelming? Look 
            no further! We are thrilled to present "Stark Easy" - a revolutionary learning 
            dApp and Portal designed to make your journey into Starknet both enjoyable and 
            straightforward.
          </SubText>
          <SubTextLight>
            Furthermore, there will also be a dedicated learning path for Spanish speakers, 
            Hablando De Starknet, which will also incorporate the existing HDS Spanish-speaking 
            program, presented by Nadai & Nurstar.
          </SubTextLight>
          <ButtonContainer>
            <Button text="Begin your Stark Easy Experience" link="/connect" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default StarkEasy;
