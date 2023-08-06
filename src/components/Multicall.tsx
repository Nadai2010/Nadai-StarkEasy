import React, { useState, useCallback } from 'react';
import { useContractWrite } from '@starknet-react/core';
import { parseFixed } from '@ethersproject/bignumber';
import NetworkInfo from './NetworkInfo';
import './Multicall.css';

const Multicall = () => {
  const [to, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferAmount2, setTransferAmount2] = useState('');
  const [mintNai, setMintNai] = useState('');
  const [selectedValues, setSelectedValues] = useState({});

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, label: string, setValue: Function) => {
    const value = e.target.value;
    setValue(value);

    setSelectedValues((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  return (
    <div>
    <div className="multicall-title text-4xl shadowed mb-5">Multicall</div>

    <div className="multicall-container">
    <div className="input-field">
          <label>Dirección de Envío</label>
          <input
            type="text"
            value={to}
            onChange={(e) => handleInputChange(e, 'Dirección de Envío', setTransferTo)}
          />
        </div>
  
        <div className="input-field">
          <label>Cantidad Mint de NAI</label>
          <input
            type="number"
            value={mintNai}
            onChange={(e) => handleInputChange(e, 'Cantidad Mint de NAI', setMintNai)}
          />
        </div>
  
        <div className="input-field">
          <label>Cantidad de Transfer de NAI</label>
          <input
            type="number"
            value={transferAmount}
            onChange={(e) => handleInputChange(e, 'Cantidad de Transfer de NAI', setTransferAmount)}
          />
        </div>
  
        <div className="input-field">
          <label>Cantidad de Transfer de ETH</label>
          <input
            type="number"
            value={transferAmount2}
            onChange={(e) => handleInputChange(e, 'Cantidad de Transfer de ETH', setTransferAmount2)}
          />
        </div>
  
        <div className="btn-container">
          <button className="btn" onClick={handleTransfer}>
            Multi Envío y Mint
          </button>
        </div>
  
        <div className="selected-values">
          {Object.entries(selectedValues).map(([label, value]) => (
            <span key={label} className={`selected-value ${label.toLowerCase().replace(/\s/g, '-')}`}>
              {`${label}: ${value}`}
            </span>
          ))}
        </div>
        <div >
    <NetworkInfo />
    </div>
      </div>
    </div>
  );
  
};


export default Multicall;
