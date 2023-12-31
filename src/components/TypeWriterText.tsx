import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";


const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 90%;
  text-align: center;
  color: ${(props) => props.theme.text};
  margin-top: -2%;
  align-self: flex-start;

  span {
    text-transform: uppercase;
    
  }
  .text {
    color: #d81f3f;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    margin-top: -20%;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

const Title2 = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  text-align: center;
  width: 90%;
  margin-top: 10%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    
  }
  .text {
    color: #d81f3f;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    margin-top: -20%;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  text-align: center;
  margin-left: 20px;
  margin-top: 2%;
  .text {
    color: ${(props) => props.theme.hoverColor};
  }

  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    height: 15vh;
    font-size: ${(props) => props.theme.fontlg};
    text-align: center;
  }

  animation: appearAnimation 5.5s ease-in-out both;
`;

const ButtonContainer = styled.div`
  width: 80%;
  text-align: center;
  margin-top: 5%;
  margin-left: 20px;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    height: 0vh; 
    margin-bottom: -20rem;

    button {
      margin: 0 auto;
    }
  }
`;


const TypeWriterText = () => {
  return (
    <>
      <Title>
        STARK Easy
        </Title>
        <SubTitle>Your Starknet Academy</SubTitle>
        <Title2>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text">Learn!</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text">Play!</span>`)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<span class="text">Test your skills!</span>`)
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </Title2>

      <ButtonContainer>
        <Button text="Start the Adventure" link="/connect" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;


