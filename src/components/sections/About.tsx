import { Suspense } from "react";
import styled from "styled-components";
import Carousel from '../Carousel'
import Button from "../Button";
import Loading from "../Loading";



const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.altBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */

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
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Agrega overflow para asegurarte de que el carrusel no se desborde */
  
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;


const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SubText2 = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.customColor}; /* Cambia "customColor" por el color que desees */
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;


const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;
  justify-content: center;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
          <Carousel />
          </Suspense>{" "}
        </Box>
        <Box>
          <Title>
          Introducing  Stark Easy
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
            <Button text="Go on an Stark Adventure" link="/Adventure" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
