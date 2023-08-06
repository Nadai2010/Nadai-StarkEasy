import { useState, useCallback } from 'react';
import { useContractWrite } from '@starknet-react/core';
import NetworkInfo from './NetworkInfo';
import './Universal.css'; 

const Universal = () => {
  const [classHash, setClassHash] = useState('');
  const [salt, setSalt] = useState('');
  const [unique, setUnique] = useState('');
  const [calldata_len, setCalldataLen] = useState('');
  const [calldata, setCalldata] = useState('');

  const contractAddress = '0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf'; // Reemplaza con la dirección del contrato

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
    <div className="universal-container">
      <div className="input-field">
        <label>classHash</label>
        <input
          type="text"
          value={classHash}
          onChange={(e) => setClassHash(e.target.value)}
        />
      </div>

      <div className="input-field">
        <label>salt</label>
        <input
          type="text"
          value={salt}
          onChange={(e) => setSalt(e.target.value)}
        />
      </div>

      <div className="input-field">
        <label>unique</label>
        <input
          type="text"
          value={unique}
          onChange={(e) => setUnique(e.target.value)}
        />
      </div>

      <div className="input-field">
        <label>calldata_len</label>
        <input
          type="text"
          value={calldata_len}
          onChange={(e) => setCalldataLen(e.target.value)}
        />
      </div>

      <div className="input-field">
        <label>calldata</label>
        <input
          type="text"
          value={calldata}
          onChange={(e) => setCalldata(e.target.value)}
        />
      </div>

      <div className="btn-container">
        <button className="btn" onClick={handleDeploy}>
          Deploy Contract
        </button>
      </div>
      <div >
    <NetworkInfo />
    </div>
    </div>
    
  );
};

export default Universal;
