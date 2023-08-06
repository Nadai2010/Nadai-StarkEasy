interface FunctionInputWithValue {
    name: string;
    type: string;
    value: string;
  }
  
  interface FunctionInput {
    name: string;
    type: string;
  }
  
  interface FunctionOutput {
    type: string;
  }
  
  interface Contract {
    type: string;
    name: string;
    inputs: FunctionInputWithValue[] | FunctionInput[];
    stateMutability: string;
    outputs: FunctionOutput[];
  }
  
  interface ContractData {
    isCairo1: boolean;
    abi: Contract[];
  }
  
  const contractData: ContractData = {
    isCairo1: true,
    abi: [
      {
        type: "function",
        name: "constructor",
        inputs: [
          {
            name: "_name",
            type: "core::felt252",
            value: ""
          }
        ],
        stateMutability: "external",
        outputs: []
      },
      {
        type: "function",
        name: "almacenar_nombre",
        inputs: [
          {
            name: "_name",
            type: "core::felt252",
            value: ""
          }
        ],
        stateMutability: "external",
        outputs: []
      },
      {
        type: "function",
        name: "obtener_nombre",
        inputs: [
          {
            name: "_address",
            type: "core::starknet::contract_address::ContractAddress",
            value: ""
          }
        ],
        stateMutability: "view",
        outputs: [
          {
            type: "core::felt252"
          }
        ]
      }
    ]
  };
  
  export default contractData;
  