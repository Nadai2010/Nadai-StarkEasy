import { useAccount, useBalance, useContractWrite } from "@starknet-react/core";
import React, { FormEvent, useEffect, useState } from "react";
import { stark } from "starknet";
import { truncate } from "../lib/utils";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;    
  }
`;

const NftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  margin: -1.8rem auto;
  max-width: 50%;

`;

const NftTitle = styled.div`
  font-size: 2.5rem;
  color: #6b099c;
  margin-bottom: rem;
  align-items: center;
  text-align: center;
`;

const NftFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(250, 250, 210, 0.9);
  border-radius: 50px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  width: 90%;
  

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #3182ce;
  }

  strong {
    font-weight: bold;
  }

  img {
    max-width: 20%;
    margin-top: -5%;
    height: auto;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.2s ease;
  
    &:hover {
      transform: scale(3.1); /* Escala cuando se pasa el cursor */
    }
  
    &.expanded {
      transform: scale(5.1);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    select,
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1.2rem;
    }

    .btn-submit {
      background-color: #9d6af0;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s ease;
      margin-bottom: 1rem;

      &:hover {
        background-color: #6b099c;
      }
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: rem;
  }

  .nft-info {
    text-align: center; /* Centra el contenido del div */
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  width: 550px !important;/* Hace que el campo de entrada ocupe el 100% del ancho disponible */
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem !important;
  margin-bottom: 0.5rem  !important;
`;

const Select = styled.select`
  width: 10%; /* Hace que el área de selección ocupe el 100% del ancho disponible */
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9rem !important;
  margin-bottom: 1rem; /* Espacio entre campos */
`;

const nfts = [
    {
      symbol: "NHT - 1",
      contractAddress: "0x058fb0b06fd6844a909031e56a95dfd859320e44c12538e7da419e9fc4475f90",
      metadata: {
        name: "HDS - Episodio 1",
        description: "🎙️ Space con Nurst y Nadai - Hablando de Starknet",
        image: "https://ipfs.io/ipfs/QmaAwa9LBNCmwJKmf14j8wvuQUsYYbijq3kLQjeB9wVtHB/1.gif",
      },
    },
    {
      symbol: "NHT - 2",
      contractAddress: "0x0115b36e34b88c08d71eb648218d94e1333344a2f141963c3dbf892b18e292e5",
      metadata: {
        name: "HDS - Episodio 2",
        description: "🎙️ Space con Damian - Starknet Español",
        image: "https://ipfs.io/ipfs/QmWK5oeDdWjR8TwRbyiggrjzR5gpAPJYhLzF6WYVZWgFL7/1.gif",
      },
    },
    {
      symbol: "NHT - 3",
      contractAddress: "0x00ee9266554a1080fa2126a6d18299e9722b717eb7bace64ca783301d3c68348",
      metadata: {
        name: "HDS - Episodio 3",
        description: "🎙️ Space con Fran - Giza",
        image: "https://ipfs.io/ipfs/QmeuQXRPee8uGpXmw9Hqdw42WviJKHyL78L6dB7kegmJzy/1.gif",
      },
    },  {
      symbol: "NHT - 4",
      contractAddress: "0x03a2577d15e9f0945b41b454570c292b6ae43e13a6750d5afecf0befd0b311aa",
      metadata: {
        name: "HDS - Episodio 4",
        description: "🎙️ Space con David - Starkware",
        image: "https://ipfs.io/ipfs/Qmb8tG1Z5LWFJ5SFaadXAwHPwNiPrrabYBkYHQsda5eWvc/1.gif",
      },
    },  {
      symbol: "NHT - 5",
      contractAddress: "0x05beae1cbee50d459ad26729fdbc526e99f5cbf347659fb3ebbb300a37ab336d",
      metadata: {
        name: "HDS - Episodio 5",
        description: "🎙️ Space con Joxes - L2 Español",
        image: "https://ipfs.io/ipfs/QmeR8F2Wz4MAcxGVHhCqLik4UC1B56QnS4AYbSDBYk5Vt7/1.gif",
      },
    },  {
      symbol: "NHT - 6",
      contractAddress: "0x07d5a2a46e422fd5d5706ca8599db243760ae29b4a58a975159cebe5e7f2ea69",
      metadata: {
        name: "HDS - Episodio 6",
        description: "🎙️ Space con LambdaClass",
        image: "https://ipfs.io/ipfs/QmSg3Enchr5zittqVqnV7zyQ8RsY1uqNVdA1TACi8eHALW/1.gif",
      },
    },  {
      symbol: "NHT - 7",
      contractAddress: "0x0266fa8b7380043135c23b862be06a942adb955fef7a46e1b8c7d73d7b48befd",
      metadata: {
        name: "HDS - Episodio 7",
        description: "🎙️ Space con Glihm - Madara",
        image: "https://ipfs.io/ipfs/QmNoPoQ2sL5aSRYywRbhsapEvZ5L54NZXSNMMZCqffdRpZ/1.gif",
      },
    },  {
      symbol: "NHT - 8",
      contractAddress: "0x02269df2f4cae317c90fdcb1a8fa8fbe21744ac9e197721ecaa3baf14c1b3571",
      metadata: {
        name: "HDS - Episodio 8",
        description: "🎙️ Space con Ismael - Argent X",
        image: "https://ipfs.io/ipfs/QmNwj878FRQaNjS9jDAhSiePaqdWr6QCtc5QWqmUj7aqHi/1.png",
      },
    },  {
      symbol: "NHT - 9",
      contractAddress: "0x018561e9475a9248f0580e3274fb8a027b33850dbd2e53f2d6acb9c14fcd0599",
      metadata: {
        name: "HDS - Episodio 9",
        description: "🎙️ Space con Nico - Cafe Cosmos",
        image: "https://ipfs.io/ipfs/QmdEmJRkeyz1FYY5RfLXVfKwEvkC68aSwzAfFh2v8n5ccW/1.gif",
      },
    },  {
      symbol: "NHT - 10",
      contractAddress: "0x02adcd276ac03ca4b056a679fc312e0fa8ff9bd4adbfb8e6398782af4932d3a2",
      metadata: {
        name: "HDS - Episodio 10",
        description: "🎙️ Space con SEED Latam y NacionBankless - Gobernanza y Comunidad",
        image: "https://ipfs.io/ipfs/QmSqKcyzeCpvmgD5uLXnCYwRNt3ZxK4XSzZ8y8en5fVxko/1.png",
      },
    },
  ];

  export default function NftForm() {
    const { address } = useAccount();
    const [selectedNFT, setSelectedNFT] = useState(nfts[0]);
    const [_from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [token_id, setToken_id] = useState<string>("");
    const call = "0";
    const [secretWord, setSecretWord] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [nftMetadata, setNftMetadata] = useState<any>({});
    const [isExpanded, setExpanded] = useState(false);
  
    useEffect(() => {
      const metadata = selectedNFT.metadata || {};
      setNftMetadata(metadata);
    }, [selectedNFT]);
  
    async function getTokenId() {
      try {
        const { data: tokenData } = await useBalance({
          address,
          token: selectedNFT?.contractAddress,
        });
  
        // Accede al valor y conviértelo a cadena (string)
        setToken_id(tokenData?.value.toString());
      } catch (error) {
        console.error("Error al obtener el token_id:", error);
      }
    }
  
    useEffect(() => {
      // Obtiene el token_id del token seleccionado al cargar el componente
      getTokenId();
    }, [address, selectedNFT]);
  

  
    const calldata = stark.compileCalldata({
      _from,
      to,
      token_id,
      call,
    });
  
    const calls = showButton
      ? {
          contractAddress: selectedNFT.contractAddress,
          entrypoint: "transferFrom",
          calldata,
        }
      : undefined;
  
    const { write, isLoading, data } = useContractWrite({
      calls,
    });
  
    function send(event: FormEvent) {
      event.preventDefault();
  
      // Realiza la transacción y escribe en el contrato
      write();
    }
  
    function handleSecretWordChange(event: React.ChangeEvent<HTMLInputElement>) {
      setSecretWord(event.target.value);
      setShowButton(event.target.value === "Nadai");
    }
  
    function handleImageClick() {
      setExpanded(!isExpanded);
    }
  
    function handleTokenChange(event: React.ChangeEvent<HTMLSelectElement>) {
      const selected = nfts.find((nft) => nft.symbol === event.target.value);
      if (selected) {
        setSelectedNFT(selected);
        setToken_id(""); // Resetea el token_id cuando cambia la selección
      }
    }
  
    return (
      <div>
      <GlobalStyles />
      <NftContainer>
        <NftFormContainer className={isExpanded ? "expanded" : ""}>
          <NftTitle>Galeria y Envio de NHT</NftTitle>
    
          <h3>
            {selectedNFT?.symbol} token{" "}
            <a
              href={`https://testnet.starkscan.co/contract/${selectedNFT?.contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {truncate(selectedNFT?.contractAddress)} ↗
            </a>
          </h3>
    
          {nftMetadata && (
            <div className="nft-info">
              <img
                className={`nft-image ${isExpanded ? "expanded" : ""}`}
                src={nftMetadata?.image}
                alt={nftMetadata?.name}
                onClick={handleImageClick}
              />
              <p>Nombre: {nftMetadata?.name}</p>
              <p>Información: {nftMetadata?.description}</p>
            </div>
          )}
    
    <form onSubmit={send}>
      <Select
        value={selectedNFT?.symbol}
        onChange={handleTokenChange}
      >
        {nfts.map((nft) => (
          <option key={nft.symbol} value={nft.symbol}>
            {nft.symbol}
          </option>
        ))}
      </Select>
      <Input
        type="text"
        name="from"
        placeholder="From"
        required
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input
        type="text"
        name="to"
        placeholder="Recipient"
        required
        onChange={(e) => setTo(e.target.value)}
      />
      <Input
        type="text"
        name="token_id"
        placeholder="Token ID"
        required
        value={token_id}
        onChange={(e) => setToken_id(e.target.value)}
      />
      <Input
        type="password"
        name="secretWord"
        placeholder="Secret Word Nadai"
        required
        value={secretWord}
        onChange={handleSecretWordChange}
      />
            {showButton && (
              <button type="submit" className="btn-submit">
                Enviar
              </button>
            )}
          </form>
    
          {isLoading && <p>tx pendiente...</p>}
          {data && <p>Tx: {data.transaction_hash}</p>}
        </NftFormContainer>
      </NftContainer>
      </div>
    );
  }