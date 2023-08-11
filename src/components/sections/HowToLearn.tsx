import styled, { keyframes } from "styled-components";
import Heroe3 from "/src/assets/Heroe3.png";
import Heroe4 from "/src/assets/Heroe4.png";
import Heroe5 from "/src/assets/Heroe5.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 85%;
  height: auto;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
    flex-direction: column;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`;
const levitate = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;
const StyledImage = styled.img`
  width: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.6);
  }
`;

const LevitatingWrapper = styled.div`
  display: inline-block;
  animation: ${levitate} 2s ease-in-out infinite;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 8px;

  @media (max-width: 64em) {
    gap: 20px; /* Ajusta el espacio entre elementos para pantallas medianas */
  }
  @media (max-width: 48em) {
    gap: 20px; /* Ajusta el espacio entre elementos para pantallas más pequeñas */
  }
`;
const Text = styled.a`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  text-align: center;
`;

const TextContainer = styled.div`
  width: 80%;
  padding: 20px;
  text-align: center;
`;

const HowToLearn = () => {
  return (
    <Section id="howtolearn">
      <Title>How to LEARN!</Title>
      <Container>
        <InnerContainer>
          <TextContainer>
            <SubTitle>Learn</SubTitle>
            <Text>
              On StarkEasy you will find a lot of educational content about Starknet, its Ecosystem, its tech and its programming language (Cairo). You’ll also be able to test your knowledge by completing fun quizzes. Whether you are a newbie or a Developer, in this section you will find so many resources that will help you a lot during your Journey on Starknet.
            </Text>
          </TextContainer>
          <LevitatingWrapper>
            <StyledImage
              src={Heroe4}
              alt="Your alt text"
              width={500}
              height={400}
            />
          </LevitatingWrapper>
        </InnerContainer>
        <InnerContainer>
          <LevitatingWrapper>
            <StyledImage
              src={Heroe5}
              alt="Your alt text"
              width={500}
              height={400}
            />
          </LevitatingWrapper>
          <TextContainer>
            <SubTitle>Test your Dev Skills</SubTitle>
            <Text>
              In this section, aspiring Cairo Devs will be able to interact with Cairo. Practice with one of the most promising and powerful 
              programming languages out there!
            </Text>
          </TextContainer>

        </InnerContainer>
        <InnerContainer>
          <TextContainer>
            <SubTitle>Play</SubTitle>
            <Text>
              In this section of StarkEasy, you’ll be able to play mini-educational games which are part of a very special Starknet Adventure, 
              where you will feel like a Martial Arts apprentice ready to embark yourself on a journey to get your Starknet belts while 
              defeating dangerous enemies in the process. Creative characters and landscapes will enhance your gaming experience as you’ll try 
              your best to rank high in the Leaderboard!
            </Text>
          </TextContainer>
          <LevitatingWrapper>
            <StyledImage
              src={Heroe3}
              alt="Your alt text"
              width={400}
              height={400}
            />
          </LevitatingWrapper>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default HowToLearn;
