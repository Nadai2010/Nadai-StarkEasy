import { useState, useEffect, ChangeEvent } from 'react';
import YouTube from 'react-youtube';
import './HDS.css';
import L2nftJson from "../lib/L2NFT.json";
import { useAccount } from "@starknet-react/core";
import { Contract } from "starknet";
import NetworkInfo from './NetworkInfo';

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
  word9: "0x018561e9475a9248f0580e3274fb8a027b33850dbd2e53f2d6acb9c14fcd0599",
  word10: "0",
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
    <div className="hds-page">
      <div className="hds-title text-4xl shadowed mb-5">Hablando De Starknet</div>
      <div className="hds-video">
        <YouTube videoId={videoIds[currentVideoIndex]} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} />
      </div>
      <div className="hds-navigation">
        <button className="hds-button hds-previous-button" onClick={goToPreviousVideo}>
          Anterior
        </button>
        <button className="hds-button hds-next-button" onClick={goToNextVideo}>
          Siguiente
        </button>
      </div>
      <div className="hds-form">
        <input
          className="hds-input"
          type="text"
          placeholder="Palabra secreta"
          value={secretWord}
          onChange={handleSecretWordChange}
        />
        <button
          className={`hds-button hds-mint-button ${isSecretWordEntered ? 'hds-mint-button-active' : ''}`}
          onClick={mintNFT}
          disabled={!isConnected || !currentContract}
        >
          Crear NFT
        </button>
      </div>
      <NetworkInfo />
    </div>
  );
};

export default HDS;