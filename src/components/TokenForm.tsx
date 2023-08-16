import { useState } from "react";
import { FormEvent, useMemo } from "react";
import { useAccount, useBalance, useContractWrite } from "@starknet-react/core";
import { uint256, stark } from "starknet";
import { parseFixed } from "@ethersproject/bignumber";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;    
    font-family: 'teko', sans-serif;
    text-align: center;
    background-color: #f0f0f0;
  }
`;

const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  margin: -0.2rem auto;
  max-width: 50%;
`;

const TokenFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(112,128,144, 0.9);
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 90%;
`;

const TokenTitle = styled.h2`
  font-size: 3.8rem;
  color: #6b099c;
  margin-bottom: 0.5rem;
  align-items: center;
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  width: 85vh;
`;

const Button = styled.button`
  background-color: #9d6af0;
  color: white;
  border: none;
  padding: 0.5rem 4rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem !important;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-bottom: 0.7rem ;

  &:hover {
    background-color: #6b099c;
    transform: scale(1.05);
  }
`;

const TransactionLink = styled.a`
  color: blue;
  text-decoration: underline;
  font-size: 1.4rem; 
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;

const PendingText = styled.p`
  font-size: 1.6rem; /* Adjust the font size as needed */
`;

const Link = styled.a`
  color: blue;
  text-decoration: none;
  font-size: 1.9rem !important;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
    color: darkblue;
  }
`;

const LargeText = styled.strong`
  font-size: 2.2rem;
  margin-bottom: -0.7rem;
`;

const tokens = [
  {
    symbol: "NAI",
    contractAddress: "0x07686ccbe3e33aefec722bd7211e42e47269f16a2a918318bdb27a99c926899b",
  },
  {
    symbol: "ETH",
    contractAddress: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  },
  {
    symbol: "WBTC",
    contractAddress: "0x3fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac",
  },
  {
    symbol: "DAI",
    contractAddress: "0x03e85bfbb8e2a42b7bead9e88e9a1b19dbccf661471061807292120462396ec9",
  },
  {
    symbol: "USDT",
    contractAddress: "0x68f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
  },
  // Agrega más tokens si es necesario
];

export default function TokenForm() {
  const { address } = useAccount();
  const [selectedToken, setSelectedToken] = useState(tokens[0]);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const [showButton, setShowButton] = useState(false);

  const { data: balance } = useBalance({
    address,
    token: selectedToken?.contractAddress,
  });

  const calls = useMemo(() => {
    if (!amount || !to || !selectedToken || !showButton) return;

    const amountFormatted = {
      type: "struct",
      ...uint256.bnToUint256(parseFixed(amount, 18).toString()),
    } as const;

    const calldata = stark.compileCalldata({
      recipient: to,
      amount: amountFormatted,
    });

    return {
      contractAddress: selectedToken.contractAddress,
      entrypoint: "transfer",
      calldata,
    };
  }, [selectedToken, to, amount, showButton]);

  const { write, isLoading, data } = useContractWrite({
    calls,
  });

  async function send(event: FormEvent) {
    event.preventDefault();
    write();
  }

  function handleSecretWordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSecretWord(event.target.value);
    setShowButton(event.target.value === "Nadai"); 
  }



  return (
    <div>
      <GlobalStyles />
      <TokenContainer>
        <TokenFormContainer>
          <TokenTitle>Balance and Send the Tokens</TokenTitle>
          <LargeText>
            Balance: {balance?.formatted} {selectedToken?.symbol}
          </LargeText>
          <Link
            href={`https://testnet.starkscan.co/contract/${selectedToken?.contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${selectedToken?.symbol} - ${selectedToken?.contractAddress.slice(0, 8)}...${selectedToken?.contractAddress.slice(-8)} ↗`}
          </Link>
          <div>
            <Form onSubmit={send}>
              <Select
                value={selectedToken?.symbol}
                onChange={(e) => {
                  const selected = tokens.find((t) => t.symbol === e.target.value);
                  if (selected) setSelectedToken(selected);
                }}
              >
                {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </option>
                ))}
              </Select>
              <Field
                type="text"
                name="to"
                placeholder="Recipient"
                required
                onChange={(e) => setTo(e.target.value)}
              />
              <Field
                type="number"
                name="amount"
                placeholder="Amount"
                required
                step="any"
                onChange={(e) => setAmount(e.target.value)}
              />
              <Field
                type="password"
                name="secretWord"
                placeholder="Secret Word Nadai"
                required
                value={secretWord}
                onChange={handleSecretWordChange}
              />
              {showButton && (
                <Button type="submit">Send</Button>
              )}
            </Form>
            {isLoading && <PendingText>Transaction pending...</PendingText>}
            {data &&   
            <p>
              <span style={{ fontSize: "1.5rem" }}>Tx:</span>{" "}
              <TransactionLink
                href={`https://testnet.starkscan.co/tx/${data.transaction_hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.transaction_hash.slice()}
                </TransactionLink>
            </p>}
          </div>
          {/* ... */}
        </TokenFormContainer>
      </TokenContainer>
    </div>
  );
}

