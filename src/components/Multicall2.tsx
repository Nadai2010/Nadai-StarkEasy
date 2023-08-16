import React, { useState, useCallback } from 'react';
import { useContractWrite } from '@starknet-react/core';
import { parseFixed } from '@ethersproject/bignumber';
import styled, { createGlobalStyle } from 'styled-components';
import Typewriter from "typewriter-effect";

// Definir estilos globales
const GlobalStyles = createGlobalStyle`
  /* Estilos globales para toda la aplicación */
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

const FormContainer = styled.div`
  width: 50%; /* Ancho del formulario */
  margin: 0 auto; /* Centrar horizontalmente */
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MulticallTitle = styled.h2`
  font-size: 4rem;
  color: #6b099c; /* Cambiar el color del título */
  margin-bottom: 2rem;
  font-family: 'Teko', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #50097c; /* Cambiar el color del texto que se mueve */
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;


const Label = styled.label`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.5rem;
`;

const CustomButton = styled.button`
  display: inline-block;
  background-color: #9d6af0;
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
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

const Multicall2 = () => {
  const [mintNai, setMintNai] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMintNai(value);
  };

  const mintTxArray = Array(100).fill(0).map((_, index) => ({
    contractAddress: '0x07686ccbe3e33aefec722bd7211e42e47269f16a2a918318bdb27a99c926899b',
    entrypoint: 'mint',
    calldata: [mintNai ? parseFixed(mintNai, 18).toString() : '0', (parseFixed('0', 0).mul(index)).toString()],
  }));

  const { write } = useContractWrite({ calls: mintTxArray });

  const handleMint = useCallback(() => {
    write();
  }, [write]);



  return (
    <div>
      <GlobalStyles /> {/* Estilos globales */}
      <AppContainer>
        <FormContainer>
          <MulticallTitle>
            <span>STARK Easy</span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span class="text">ERC-20 name NAI</span>`)
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(`<span class="text">Make 100 call in 1</span>`)
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(`<span class="text">Select Value the NAI and Mint</span>`)
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </MulticallTitle>

          <InputField>
            <Label>Amount of NAI to Mint</Label>
            <Input
              type="number"
              value={mintNai}
              onChange={handleInputChange}
            />
          </InputField>

          <CustomButton onClick={handleMint}>
          Mint NAI x100
          </CustomButton>

        </FormContainer>
      </AppContainer>
    </div>
  );
};

export default Multicall2;
