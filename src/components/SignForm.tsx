import { useAccount, useNetwork, useSignTypedData } from "@starknet-react/core";
import { FormEvent, useState } from "react";
import { typedData } from "starknet";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
padding: 10px 10px;
font-size: 16px;
font-weight: bold;
background-color: #4f007cfb;
color: rgba(255, 255, 255, 0.87);
border: none;
border-radius: 20px;
cursor: pointer;
transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SignFormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const SignFormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export default function SignForm() {
  const [showSign, setShowSign] = useState(false);
  const [message, setMessage] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const [messageSigned, setMessageSigned] = useState(false);
  const [signatureDetails, setSignatureDetails] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  const typedMessage: typedData.TypedData = {
    types: {
      StarkNetDomain: [
        { name: "name", type: "string" },
        { name: "version", type: "felt" },
        { name: "chainId", type: "felt" },
      ],
      Message: [
        { name: "message", type: "string" },
        { name: "secretWord", type: "string" },
      ],
    },
    primaryType: "Message",
    domain: {
      name: "Starknet Source app",
      version: "1",
      chainId: chain ? chain.id.toString() : "SN_GOERLI",
    },
    message: {
      message,
      secretWord,
    },
  };

  const { data, signTypedData } = useSignTypedData(typedMessage);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (isConnected) {
      // Perform the authentication process here (simulated)
      // For example, check if the message and secretWord match the expected values
      const expectedMessage = "Hello";
      const expectedSecretWord = "Secret";

      if (message === expectedMessage && secretWord === expectedSecretWord) {
        // Simulated authentication success
        alert("Message successfully signed!");

        // Sign the message
        await signTypedData();

        // Set messageSigned to true
        setMessageSigned(true);

        // Store the signature details in the state
        setSignatureDetails(data);
      } else {
        // Simulated authentication failure
        alert("Authentication failed. Invalid message or secret word.");
      }
    } else {
      // User is not logged in, show an error or redirect to the login page
      alert("Please log in to perform the authentication.");
    }
  }

  function handleDetailsClick() {
    setShowDetails(true);
  }

  function handleCloseDetails() {
    setShowDetails(false);
  }

  return (
    <Container>
      <Button type="button" onClick={() => setShowSign(!showSign)}>
        Sign a message
      </Button>
      {showSign && (
        <SignFormOverlay>
          <SignFormContainer>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="message"
                placeholder="Sign this"
                value={message}
                required
                onChange={(evt) => setMessage(evt.target.value)}
              />
              <Input
                type="text"
                name="secretWord"
                placeholder="Secret word"
                value={secretWord}
                required
                onChange={(evt) => setSecretWord(evt.target.value)}
              />
              <Button type="submit">Sign</Button>
              <button
                type="button"
                className="underline"
                onClick={() => setShowSign(false)}
              >
                Close
              </button>
              {messageSigned && (
                <>
                  <p>Message has been signed successfully!</p>
                  <button
                    type="button"
                    className="underline"
                    onClick={handleDetailsClick}
                  >
                    View details
                  </button>
                </>
              )}
            </Form>
          </SignFormContainer>
        </SignFormOverlay>
      )}
      {showDetails && (
        <SignFormOverlay>
          <div className="details">
            <p>Signature Details:</p>
            {signatureDetails && (
              <div className="signature-details">
                <p>Signature Points: {signatureDetails[0]}</p>
                <p>Output Hash: {signatureDetails[1]}</p>
              </div>
            )}
            <button className="close-button" onClick={handleCloseDetails}>
              Close
            </button>
          </div>
        </SignFormOverlay>
      )}
    </Container>
  );
}
