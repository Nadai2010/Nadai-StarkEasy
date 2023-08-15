import { useState, useCallback } from 'react';
import { useContractWrite } from '@starknet-react/core';
import styled from 'styled-components'; // Importamos styled-components

const UniversalContainer = styled.div` // Usamos styled-components para adaptar el contenedor principal
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-left: 25%;
  width: 50%; 
  height: 75vh;
  background-color: rgba(207, 247, 206, 0.9); 
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); /* Sombra */
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 75vh;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.875rem;
`;

const CustomButton = styled.button`
  display: inline-block;
  background-color: #9d6af0;
  color: #fff;
  border: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6b099c;
  }
`;

const UDCTitle = styled.h2`
  font-size: 2rem;
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

const Universal = () => {
  const [classHash, setClassHash] = useState('');
  const [salt, setSalt] = useState('');
  const [unique, setUnique] = useState('');
  const [calldata_len, setCalldataLen] = useState('');
  const [calldata, setCalldata] = useState('');

  const contractAddress =
    '0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf';

  const deployTx = {
    contractAddress,
    entrypoint: 'deployContract',
    calldata: [classHash, salt, unique, calldata_len, calldata],
  };

  const { write } = useContractWrite({ calls: [deployTx] });

  const handleDeploy = useCallback(() => {
    write();
  }, [write]);

  return (
    <UniversalContainer>
     <UDCTitle>
        <span>Universal Deploy Contract</span>
      </UDCTitle>
      <InputField>
        <Label>classHash</Label>
        <Input
          type="text"
          value={classHash}
          onChange={(e) => setClassHash(e.target.value)}
        />
      </InputField>

      <InputField>
        <Label>salt</Label>
        <Input
          type="text"
          value={salt}
          onChange={(e) => setSalt(e.target.value)}
        />
      </InputField>

      <InputField>
        <Label>unique</Label>
        <Input
          type="text"
          value={unique}
          onChange={(e) => setUnique(e.target.value)}
        />
      </InputField>

      <InputField>
        <Label>calldata_len</Label>
        <Input
          type="text"
          value={calldata_len}
          onChange={(e) => setCalldataLen(e.target.value)}
        />
      </InputField>

      <InputField>
        <Label>calldata (only deploy SC with 1 arguments in alpha)</Label>
        <Input
          type="text"
          value={calldata}
          onChange={(e) => setCalldata(e.target.value)}
        />
      </InputField>

      <CustomButton onClick={handleDeploy}>Deploy Contract</CustomButton>
    </UniversalContainer>
  );
};

export default Universal;
