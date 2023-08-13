import styled from "styled-components";
import { useAccount, useConnectors, useStarkName } from "@starknet-react/core";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 150px;
  margin-left: -80px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StarkName = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const DisconnectButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4f007cfb;
  color: rgba(255, 255, 255, 0.87);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f33adaa1;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 200px;
  }
`;

const Info = () => {
  const { disconnect } = useConnectors();
  const { address, isConnected } = useAccount();
  const { data: starkName } = useStarkName({
    address: address || "",
  });

  const truncated = `${address?.substring(0, 6)}...${address?.slice(-2)}`;

  if (!isConnected) {
    return null;
  }

  return (
    <Container>
      <StarkName>{starkName || truncated}</StarkName>
      <DisconnectButton type="button" onClick={disconnect}>
        Disconnect
      </DisconnectButton>
    </Container>
  );
};

export default Info;
