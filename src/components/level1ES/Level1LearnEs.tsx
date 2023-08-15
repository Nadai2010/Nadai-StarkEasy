import styled from "styled-components";
import Typewriter from "typewriter-effect";
import YouTube from "react-youtube";

const ExerciseContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
  background-color: black;
`;

const VideoBox = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 5%;
  overflow: hidden;
  margin-left: 4%;
  margin-top: 15%;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding: 56.25% 0 0; /* 16:9 aspect ratio */
`;

const Video = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const TextContainer = styled.div`
  width: 30%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateX(-50%) translateY(-50%) scale(1); /* Agregar escala inicial */
  transition: transform 0.3s ease-in-out; /* Transición para el efecto de zoom */
  position: absolute;
  top: 50%;
  right: calc(-15% + 15px); /* Calcula el valor del lado derecho */
  max-width: 400px;

  &:hover {
    transform: translateX(-50%) translateY(-50%) scale(1.05); /* Efecto de zoom al pasar el mouse */
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  color: blue;
  text-align: center;
`;

const Title2 = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  color: White;
  margin-top: -280px;
  margin-left: -820px;
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: black;
  text-align: center;
  
`;

const Level1LearnEs = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <ExerciseContainer>

      <VideoBox>
        <VideoWrapper>
          <Video videoId="pKNd7f7EIiU" opts={opts} />
        </VideoWrapper>
      </VideoBox>

      <TextContainer>
      <TitleContainer>
        <Title2>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`<span class="text">Level 1 - Hablando de Starknet #1</span>`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`<span class="text">Introducción al Ecosistema</span>`)
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </Title2>
      </TitleContainer>

        <Card>
        <Title>
            Nadai y Nurst
        </Title>
          <Description>
          In this first lesson, you will learn the basics of Blockchain, Crypto and Web3 by watching this video by Nurstar, one of the Senseis of the Stark-Jitsu Academy. 
          </Description>
        </Card>
      </TextContainer>
    </ExerciseContainer>
  );
};

export default Level1LearnEs;
