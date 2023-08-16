import React, { useState, useCallback } from 'react';
import { useContractWrite } from '@starknet-react/core';
import { parseFixed } from '@ethersproject/bignumber';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    
  }
`;

const MulticallContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 85%;
  margin-left: 8%;
  margin-top: 5%;
`;

const FormContainer = styled.div`
  width: 60%;
  height: 75vh;
  margin: 0 auto;
  margin-top: -5%;
  background-color: rgba(173, 216, 230, 0.8); 
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MulticallTitle = styled.div`
  font-size: 3rem;
  color: #6b099c;
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
  width: 100%; 
  align-items: center;
  margin-bottom: 2rem;
  border: 2px solid #ffffff;
  background-color: #DCDCDC;
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.1rem;
  margin-top: 4%;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const CustomButton = styled.button`
  display: inline-block;
  background-color: #9d6af0;
  color: ${(props) => props.theme.body};
  outline: none;
  border: none;
  font-size: 1.5rem;
  margin-top: 2%;
  margin-bottom: 1rem; 
  padding: 0.8rem 3rem;
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

const Multicall = () => {
  const [to, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferAmount2, setTransferAmount2] = useState('');
  const [mintNai, setMintNai] = useState('');

  const transferTx = {
    contractAddress: '0x07686ccbe3e33aefec722bd7211e42e47269f16a2a918318bdb27a99c926899b',
    entrypoint: 'transfer',
    calldata: [to, transferAmount ? parseFixed(transferAmount, 18).toString() : '0', '0'],
  };

  const transferTx2 = {
    contractAddress: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    entrypoint: 'transfer',
    calldata: [to, transferAmount2 ? parseFixed(transferAmount2, 18).toString() : '0', '0'],
  };

  const transferTx3 = {
    contractAddress: '0x07686ccbe3e33aefec722bd7211e42e47269f16a2a918318bdb27a99c926899b',
    entrypoint: 'mint',
    calldata: [mintNai ? parseFixed(mintNai, 18).toString() : '0', '0'],
  };

  const { write } = useContractWrite({ calls: [transferTx, transferTx2, transferTx3] });

  const handleTransfer = useCallback(() => {
    write();
  }, [write]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, _label: string, setValue: Function) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div>
      <GlobalStyles />
      <MulticallContainer>
        <FormContainer>

          <MulticallTitle>
            <span>STARK Multicall</span>
          </MulticallTitle>

          <InputField>
            <Label>Recipient Address</Label>
            <Input type="text" value={to} onChange={(e) => handleInputChange(e, 'Recipient Address', setTransferTo)} />
            
            <Label>Amount of NAI to Mint</Label>
            <Input type="number" value={mintNai} onChange={(e) => handleInputChange(e, 'Amount of NAI to Mint', setMintNai)} />
                   
            <Label>Amount of NAI to Transfer</Label>
            <Input
              type="number"
              value={transferAmount}
              onChange={(e) => handleInputChange(e, 'Amount of NAI to Transfer', setTransferAmount)}
            />
                
            <Label>Amount of ETH to Transfer</Label>
            <Input
              type="number"
              value={transferAmount2}
              onChange={(e) => handleInputChange(e, 'Amount of ETH to Transfer', setTransferAmount2)}
            />
        
          <CustomButton onClick={handleTransfer}>Send Multicall</CustomButton>
          </InputField>
        </FormContainer>
      </MulticallContainer>
    </div>
  );
};

export default Multicall;
