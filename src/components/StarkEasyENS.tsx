import React, { useState, useCallback } from 'react';
import { useContractWrite, } from '@starknet-react/core';
import styled, { createGlobalStyle } from 'styled-components';
import Converter from '../lib/Converter';


// Definir estilos globales
const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
`;

const FormContainer = styled.div`
  width: 70%; 
  height: auto;
  margin: 0 auto;
  margin-top: 150px;
  background-color: rgba(236, 207, 244, 0.9);
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const StarkEasyENSTitle = styled.h2`
  font-size: 4rem;
  color: #6b099c;
  margin-bottom: rem;
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

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 65%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 105%;
  margin-left: 25vh;
`;

const CustomButton = styled.button`
  display: inline-block;
  background-color: #9d6af0;
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  font-family: 'Teko', sans-serif;
  margin-left: 1rem;

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

const StarkEasyENS = () => {
  const [register_name, setregister_name] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setregister_name(value);
  };

  const contractAddress = '0x041f76a64b4498bc8096948f3cb56285d00efc771d1b8c7d3a3f064a089e0589';
  const entrypoint = 'store_name';  
  const calldata = [register_name]; 

  const deployTx = ({
    contractAddress,
    entrypoint,
    calldata,
  });

  const { write } = useContractWrite({ calls: [deployTx] });

  const handleRegister = useCallback(() => {
    write();
  }, [write]);

  const handleConvert = () => {

};


  return (
    <div>
        <GlobalStyles />
        <AppContainer>
            <FormContainer>
              <StarkEasyENSTitle>
                <span>Register you Name in Stark Easy ENS </span>
                </StarkEasyENSTitle>

          <InputField>
          <Converter onConvert={handleConvert} />
            <Label>Nombre para registar con el Contrato de Cuenta que está conectado</Label>
             <InputWrapper>
              <Input
              type="number"
              value={register_name}
              onChange={handleInputChange}
              />
              <CustomButton onClick={handleRegister}>
                Store Name
              </CustomButton>
             </InputWrapper>
          </InputField>

      </FormContainer>
      </AppContainer>
    </div>
  );
};

export default StarkEasyENS;
