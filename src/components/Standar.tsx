import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import styled, { createGlobalStyle } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;    
    font-family: 'Teko', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  margin: -25px auto;
  
  
`;

const ContentContainer = styled.div`
  width: 150vh;
  max-width: 150vh; /* Cambia el ancho máximo a 800px */
  height: auto; /* Cambia la altura fija a 400px */
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
`;

const FunctionStandarSelectContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 25px;
  margin-right: 50vh;
`;

const StyledSelect = styled.select`
  background-color: #feffff;
  color: #6b099c;
  border: 1px solid #000000; 
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
  height: 40px;
  text-align: left;
`;

const FunctionStandarContent = styled.div`
  background-color: #282a36;
  padding: 15px;
  font-size: 14px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  border-radius: 8px;
  border: -10px solid #000000;
  text-align: left;
  height: 300px;
`;

const CopyStandarLink = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-start: 1px;
  color: #050505;
`;

const ArgumentsStandarContent = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const ArgumentsStandarList = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const ArgumentsStandarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 20px;

  th, td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;


const Title = styled.h2`
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
    font-size: 2rem;
  }
`;

const Spacer = styled.div`
  height: 20px; /* Ajusta la altura según tus necesidades */
`;



const ContractOptions = [
  {
    value: 'Owner',
    label: 'Owner Contract',
    arguments: [
      'Class Hash: 0x04a0b25575b98b0dd16c1ffe5f85b6b310225437d5c151168c4ba010b498b3a0',
      'Argumentos del Constructor: 1',
      'Tipo de Dato: Dirección del Owner',
      'Ejemplo: 0x03F878C94De81906ba1A016aB0E228D361753536681a776ddA29674FfeBB3CB0'
    ],
    code: `use starknet::ContractAddress;

    #[starknet::interface]
    trait OwnableTrait<T> {
        fn transfer_ownership(ref self: T, new_owner: ContractAddress);
        fn get_owner(self: @T) -> ContractAddress;
    }
    
    #[starknet::contract]
    mod Ownable {
        use super::ContractAddress;
        use starknet::get_caller_address;
    
        #[event]
        #[derive(Drop, starknet::Event)]
        enum Event {
          OwnershipTransferred: OwnershipTransferred,  
        }
    
        #[derive(Drop, starknet::Event)]
        struct OwnershipTransferred {
            #[key]
            prev_owner: ContractAddress,
            #[key]
            new_owner: ContractAddress,
        }
    
        #[storage]
        struct Storage {
            owner: ContractAddress,
        }
    
        #[constructor]
        fn constructor(ref self: ContractState, init_owner: ContractAddress) {
            self.owner.write(init_owner);
        }
    
        #[external(v0)]
        impl OwnableImpl of super::OwnableTrait<ContractState> {
            fn transfer_ownership(ref self: ContractState, new_owner: ContractAddress) {
                self.only_owner();
                let prev_owner = self.owner.read();
                self.owner.write(new_owner);
                self.emit(Event::OwnershipTransferred(OwnershipTransferred {
                    prev_owner: prev_owner,
                    new_owner: new_owner,
                }));
            }
    
            fn get_owner(self: @ContractState) -> ContractAddress {
                self.owner.read()
            }
        }
    
        #[generate_trait]
        impl PrivateMethods of PrivateMethodsTrait {
            fn only_owner(self: @ContractState) {
                let caller = get_caller_address();
                assert(caller == self.owner.read(), 'Caller is not the owner');
            }
        }
    }`
  },
  {
    value: 'Vote',
    label: 'Vote Contract',
    arguments: [
      'Class Hash: ...',
      // ... otros argumentos ...
    ],
    code: `
      use starknet::ContractAddress;
      // ... código del contrato Vote ...
    `
  },
  // ... otros contratos ...
];

const Standar = () => {
    const [selectedFunction, setSelectedFunction] = useState('');
    const [functionCode, setFunctionCode] = useState('');
    const [argumentsList, setArgumentsList] = useState<string[]>([]);
  
    const handleCopyFunction = () => {
      const codeElement = document.querySelector(".function-content pre");
      if (codeElement) {
        const range = document.createRange();
        range.selectNode(codeElement);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
        document.execCommand("copy");
        window.getSelection()?.removeAllRanges();
      }
    };
  
    const handleFunctionChange = (event: any) => {
      const selectedFunction = event.target.value;
      setSelectedFunction(selectedFunction);
  
      const selectedContract = ContractOptions.find(contract => contract.value === selectedFunction);
      if (selectedContract) {
        setFunctionCode(selectedContract.code);
        setArgumentsList(selectedContract.arguments);
      }
    };
  
    return (
        <MainContentContainer>
          <GlobalStyles />
          <AppContainer>
            <ContentContainer>
              <Title>
                <span>Smart Contract Standard in Cairo</span>
              </Title>
    
              <FunctionStandarSelectContainer>
               <Label htmlFor="functionstandar-select">Escoge tu contrato y sus Argumentos para un Deploy Sencillo:</Label>
                 <StyledSelect
                  id="functionstandar-select"
                  value={selectedFunction}
                  onChange={handleFunctionChange}
                >
                  <option value="">-- Select --</option>
                  {ContractOptions.map(contract => (
                    <option key={contract.value} value={contract.value}>
                      {contract.label}
                    </option>
                  ))}
                </StyledSelect>
              </FunctionStandarSelectContainer>
              {selectedFunction && (
                
                  <><FunctionStandarContent>
                <SyntaxHighlighter language="rust" style={dracula}>
                  {functionCode}
                </SyntaxHighlighter>
                <CopyStandarLink onClick={handleCopyFunction}>
                  <FontAwesomeIcon icon={faCopy} />
                  Copy
                </CopyStandarLink>
              </FunctionStandarContent>
              <Spacer />
              <ArgumentsStandarContent>
                <ArgumentsStandarList>
                  <ArgumentsStandarTable>
                  <thead>
                    <tr>
                      <th>Argument</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                    <tbody>
                      {argumentsList.map((argument, index) => {
                      const [argumentName, argumentValue] = argument.split(': ');
                      return (
                    <tr key={index}>
                      <td>{argumentName}</td>
                      <td>{argumentValue}</td>
                    </tr>
                    );
                    })}
                    </tbody>
                  </ArgumentsStandarTable>
                </ArgumentsStandarList>
              </ArgumentsStandarContent>
              </>

             )}
            </ContentContainer>
          </AppContainer>
        </MainContentContainer>
      );
    }
    
    export default Standar;
  