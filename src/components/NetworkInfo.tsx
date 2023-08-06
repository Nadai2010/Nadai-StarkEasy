import React, { useState, useEffect } from "react";
import { useBlock, useNetwork } from "@starknet-react/core";
import styled, { createGlobalStyle } from "styled-components";
import Loading from "react-loading";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const NetworkInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NetworkInfoText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #000000;
  padding: 0 10px;
`;

const NetworkInfo = () => {
  const [tps, setTps] = useState(0);
  const [lastBlockNumber, setLastBlockNumber] = useState<number | null>(null);
  const [lastTimestamp, setLastTimestamp] = useState<number | null>(null);
  const { data } = useBlock({
    refetchInterval: 10000,
    blockIdentifier: "latest",
  });
  const { chain } = useNetwork();

  useEffect(() => {
    if (
      data &&
      data.block_number &&
      data.timestamp &&
      data.transactions &&
      data.block_number !== lastBlockNumber
    ) {
      const timestamp = data.timestamp;
      const transactionsCount = data.transactions.length;

      if (lastBlockNumber !== null && lastTimestamp !== null) {
        const timeSinceLastBlock = timestamp - lastTimestamp;
        const tpsValue = transactionsCount / (timeSinceLastBlock || 1);
        setTps(tpsValue);
      } else {
        setTps(0);
      }

      setLastBlockNumber(data.block_number);
      setLastTimestamp(timestamp);
    }
  }, [data, lastBlockNumber, lastTimestamp]);

  return (
    <>
      <GlobalStyles />
      <NetworkInfoContainer>
        {chain && <NetworkInfoText>Conectado a {chain.name}</NetworkInfoText>}
        <NetworkInfoText>
          Bloque actual: {data?.block_number}, {data?.transactions?.length} transacciones
        </NetworkInfoText>
        {tps > 0 ? (
          <NetworkInfoText>TPS: {tps.toFixed(2)}</NetworkInfoText>
        ) : (
          <Loading type="spin" color="#000000" height={30} width={30} />
        )}
      </NetworkInfoContainer>
    </>
  );
};

export default NetworkInfo;
