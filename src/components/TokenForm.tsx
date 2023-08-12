import { useAccount, useBalance, useContractWrite } from "@starknet-react/core";
import { FormEvent, useMemo, useState } from "react";
import { uint256, stark } from "starknet";
import { truncate } from "../lib/utils";
import { parseFixed } from "@ethersproject/bignumber";
import "./TokenForm.css";
import NetworkInfo from "./NetworkInfo";


// Array de tokens ERC20
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
    <div className="token-form">
      <div>
        <h3>
          {selectedToken?.symbol} token{" "}
          <a
            href={`https://goerli.voyager.online/contract/${selectedToken?.contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {truncate(selectedToken?.contractAddress)} ↗
          </a>
        </h3>
        <strong>
          Balance: {balance?.formatted} {selectedToken?.symbol}
        </strong>
        <form onSubmit={send}>
          <select
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
          </select>
          <input
            type="text"
            name="to"
            placeholder="Recipient"
            required
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            required
            step="any"
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="password"
            name="secretWord"
            placeholder="Secret Word"
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
      </div>
      <NetworkInfo />
    </div>
  );
}

