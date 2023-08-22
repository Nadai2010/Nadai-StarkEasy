import { useState, useEffect, ChangeEvent } from 'react';
import YouTube from 'react-youtube';
import styled, { createGlobalStyle } from 'styled-components';
import L2nftJson from "../lib/L2NFT.json";
import { useAccount } from "@starknet-react/core";
import { Contract } from "starknet";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #f8f8f8;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ContentContainer = styled.div`
  width: 50%;
  height: 85%;
  margin: 0 auto;
  background-color: #FAEEEF;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column; /* Cambio para alinear elementos verticalmente */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  color: #6b099c;
  margin-bottom: 0rem;
  font-family: 'Teko', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #50097c;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const VideoWrapper = styled.div`
  margin: 0px 0;
  border-radius: 50px; /* Agregar borde redondeado */
  overflow: hidden; 
  
`;

const ArrowButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const ArrowIcon = styled.svg`
  width: 1000px; /* Ajusta el ancho de las flechas */
  height: 40px; /* Ajusta la altura de las flechas */
  fill: #6b099c; /* Cambia el color de las flechas */
  cursor: pointer;
  transition: fill 0.3s ease;

  &:hover {
    fill: #50097c; /* Cambia el color al hacer hover */
  }
`;


const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px; /* Espacio adicional arriba */
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MintButton = styled.button`
  padding: 10px 20px;
  background-color: #9d6af0;
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  font-family: 'Teko', sans-serif;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(45deg);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover {
    background-color: #6b099c;
    transform: scale(1.05);
  }

  &:hover:before {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

interface SecretWords {
  [key: string]: string;
}

const secretWords: SecretWords = {
  gato: "0x058fb0b06fd6844a909031e56a95dfd859320e44c12538e7da419e9fc4475f90",
  natural: "0x0115b36e34b88c08d71eb648218d94e1333344a2f141963c3dbf892b18e292e5",
  mundo: "0x00ee9266554a1080fa2126a6d18299e9722b717eb7bace64ca783301d3c68348",
  amistad: "0x03a2577d15e9f0945b41b454570c292b6ae43e13a6750d5afecf0befd0b311aa",
  perfume: "0x05beae1cbee50d459ad26729fdbc526e99f5cbf347659fb3ebbb300a37ab336d",
  argentina: "0x07d5a2a46e422fd5d5706ca8599db243760ae29b4a58a975159cebe5e7f2ea69",
  playa: "0x0266fa8b7380043135c23b862be06a942adb955fef7a46e1b8c7d73d7b48befd",
  jugar: "0x02269df2f4cae317c90fdcb1a8fa8fbe21744ac9e197721ecaa3baf14c1b3571",
  planeta: "0x018561e9475a9248f0580e3274fb8a027b33850dbd2e53f2d6acb9c14fcd0599",
  comunidad: "0x02adcd276ac03ca4b056a679fc312e0fa8ff9bd4adbfb8e6398782af4932d3a2",
};

const HDS = () => {
  const videoIds = ['4e9U75b6nE8', 'JX8LCerTteg', 'JqqSNU2Xl0Q', 'NGNepWPoqGM', '7cTqkwIW8Aw', 'BuBC0lbpRMs', 'rseCaWIvpoI', 'e65QNIe5EN8'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { isConnected, account } = useAccount();
  const [secretWord, setSecretWord] = useState('');
  const [currentContract, setCurrentContract] = useState<string | null>(null);
  const [isSecretWordEntered, setIsSecretWordEntered] = useState(false);

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

  const mintNFT = async () => {
    if (isConnected && currentContract) {
      const contract = new Contract(L2nftJson, currentContract, account);
      await contract.mint();
      console.log("Minting NFT");
    }
  };

  const handleSecretWordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecretWord(event.target.value);
  };

  useEffect(() => {
    if (secretWords.hasOwnProperty(secretWord)) {
      setCurrentContract(secretWords[secretWord]);
      setIsSecretWordEntered(true);
    } else {
      setCurrentContract(null);
      setIsSecretWordEntered(false);
    }
  }, [secretWord]);

  return (
    <div>
      <GlobalStyles />
      <AppContainer>
        <ContentContainer>
          <Title>
            <span>Hablando de Starknet</span>
          </Title>

          <VideoWrapper>
            <YouTube videoId={videoIds[currentVideoIndex]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
          </VideoWrapper>

          <ArrowButtons>
            <ArrowIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={goToPreviousVideo}
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </ArrowIcon>

            <FormWrapper>
            <Input
              type="text"
              placeholder="Secret Word NHT"
              value={secretWord}
              onChange={handleSecretWordChange}
            />
            <MintButton onClick={mintNFT} disabled={!isConnected || !currentContract || !isSecretWordEntered}>
              Crear NHT
            </MintButton>
          </FormWrapper>


            <ArrowIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={goToNextVideo}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </ArrowIcon>
          </ArrowButtons>

 
        </ContentContainer>
      </AppContainer>
    </div>
  );
};

export default HDS;
