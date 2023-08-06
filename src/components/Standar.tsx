import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import NetworkInfo from './NetworkInfo';
import './Standar.css';

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
    setFunctionCode(getFunctionCode(selectedFunction));
    setArgumentsList(getArgumentsList(selectedFunction));
  };

  const getArgumentsList = (selectedFunction: any) => {
    switch (selectedFunction) {
      case 'Owner':
        return [
          'Class Hash: 0x04a0b25575b98b0dd16c1ffe5f85b6b310225437d5c151168c4ba010b498b3a0',
          'Argumentos del Constructor: 1',
          'Tipo de Dato: Dirección del Owner',
          'Ejemplo: 0x03F878C94De81906ba1A016aB0E228D361753536681a776ddA29674FfeBB3CB0',
        ];

        case 'Vote':
        return [
          'Class Hash: 0x8873aa28af0a0e6ac6aa647aa8e8c02cea7752bb7950284dbbbae1be35e9cb',
          'Argumentos del Constructor: 3',
          'Tipo de Dato: Direcciones registradas para votar',
          'Ejemplo: 0x03F878C94De81906ba1A016aB0E228D361753536681a776ddA29674FfeBB3CB0, 0x03F878C94De81906ba1A016aB0E228D361753536681a776ddA29674FfeBB3CB0, 0x03F878C94De81906ba1A016aB0E228D361753536681a776ddA29674FfeBB3CB0',
        ];

        case 'Erc20':
          return [
            'Class Hash: 0x01d63bf596e5dfdf9859cd2752067e373146d29557aa0e7bcb415e302982538d',
            'Argumentos del Constructor: 5',
            'Tipo de Dato: Dirección que recibe, Nombre, Decimales, Total Supply, Simbolo',
            'Ejemplo: 0x03F878C94De81906ba1A016aB0E228D361753536681a776ddA29674FfeBB3CB0, 336641417577, 18, 1000000000000000, 5136745'
         ];

      default:
        return [];
    }
  };

  const getFunctionCode = (selectedFunction: any) => {
    switch (selectedFunction) {
      case 'Owner':
        return `use starknet::ContractAddress;

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
      
        case 'Vote':
        return `@dev Core Library Imports for the Traits outside the Starknet Contract
        use starknet::ContractAddress;
        
        /// @dev Trait defining the functions that can be implemented or called by the Starknet Contract
        #[starknet::interface]
        trait VoteTrait<T> {
            /// @dev Function that returns the current vote status
            fn get_vote_status(self: @T) -> (u8, u8, u8, u8);
        
            /// @dev Function that checks if the user at the specified address is allowed to vote
            fn voter_can_vote(self: @T, user_address: ContractAddress) -> bool;
        
            /// @dev Function that checks if the specified address is registered as a voter
            fn is_voter_registered(self: @T, address: ContractAddress) -> bool;
        
            /// @dev Function that allows a user to vote
            fn vote(ref self: T, vote: u8);
        }
        
        /// @dev Starknet Contract allowing three registered voters to vote on a proposal
        #[starknet::contract]
        mod Vote {
            use starknet::ContractAddress;
            use starknet::get_caller_address;
        
            const YES: u8 = 1_u8;
            const NO: u8 = 0_u8;
        
            /// @dev Structure that stores vote counts and voter states
            #[storage]
            struct Storage {
                yes_votes: u8,
                no_votes: u8,
                can_vote: LegacyMap::<ContractAddress, bool>,
                registered_voter: LegacyMap::<ContractAddress, bool>,
            }
        
            /// @dev Contract constructor initializing the contract with a list of registered voters and 0 vote count
            #[constructor]
            fn constructor(
                ref self: ContractState,
                voter_1: ContractAddress,
                voter_2: ContractAddress,
                voter_3: ContractAddress
            ) {
                // Register all voters by calling the _register_voters function 
                self._register_voters(voter_1, voter_2, voter_3);
        
                // Initialize the vote count to 0
                self.yes_votes.write(0_u8);
                self.no_votes.write(0_u8);
            }
        
            /// @dev Event that gets emitted when a vote is cast
            #[event]
            #[derive(Drop, starknet::Event)]
            enum Event {
                VoteCast: VoteCast,
                UnauthorizedAttempt: UnauthorizedAttempt,
            }
        
            /// @dev Represents a vote that was cast
            #[derive(Drop, starknet::Event)]
            struct VoteCast {
                voter: ContractAddress,
                vote: u8,
            }
        
            /// @dev Represents an unauthorized attempt to vote
            #[derive(Drop, starknet::Event)]
            struct UnauthorizedAttempt {
                unauthorized_address: ContractAddress, 
            }
        
            /// @dev Implementation of VoteTrait for ContractState
            #[external(v0)]
            impl VoteImpl of super::VoteTrait<ContractState> {
                /// @dev Returns the voting results
                fn get_vote_status(self: @ContractState) -> (u8, u8, u8, u8) {
                    let (n_yes, n_no) = self._get_voting_result();
                    let (yes_percentage, no_percentage) = self._get_voting_result_in_percentage();
                    return (n_yes, n_no, yes_percentage, no_percentage);
                }
        
                /// @dev Check whether a voter is allowed to vote
                fn voter_can_vote(self: @ContractState, user_address: ContractAddress) -> bool {
                    self.can_vote.read(user_address)
                }
        
                /// @dev Check whether an address is registered as a voter
                fn is_voter_registered(self: @ContractState, address: ContractAddress) -> bool {
                    self.registered_voter.read(address)
                }
        
                /// @dev Submit a vote
                fn vote(ref self: ContractState, vote: u8) {
                    assert(vote == NO || vote == YES, 'VOTE_0_OR_1');
        
                    let caller: ContractAddress = get_caller_address();
                    self._assert_allowed(caller);
        
                    self.can_vote.write(caller, false);
        
                    if (vote == NO) {
                        self.no_votes.write(self.no_votes.read() + 1_u8);
                    }
                    if (vote == YES) {
                        self.yes_votes.write(self.yes_votes.read() + 1_u8);
                    }
        
                    self.emit(VoteCast { voter: caller, vote: vote,  });
                }
            }
        
            /// @dev Internal Functions implementation for the Vote contract
            #[generate_trait]
            impl InternalFunctions of InternalFunctionsTrait {
                /// @dev Registers the voters and initializes their voting status to true (can vote)
                fn _register_voters(
                    ref self: ContractState,
                    voter_1: ContractAddress,
                    voter_2: ContractAddress,
                    voter_3: ContractAddress
                ) {
                    self.registered_voter.write(voter_1, true);
                    self.can_vote.write(voter_1, true);
        
                    self.registered_voter.write(voter_2, true);
                    self.can_vote.write(voter_2, true);
        
                    self.registered_voter.write(voter_3, true);
                    self.can_vote.write(voter_3, true);
                }
            }
        
            /// @dev Asserts implementation for the Vote contract
            #[generate_trait]
            impl AssertsImpl of AssertsTrait {
                // @dev Internal function that checks if an address is allowed to vote
                fn _assert_allowed(ref self: ContractState, address: ContractAddress) {
                    let is_voter: bool = self.registered_voter.read((address));
                    let can_vote: bool = self.can_vote.read((address));
        
                    if (can_vote == false) {
                        self.emit(UnauthorizedAttempt { unauthorized_address: address,  });
                    }
        
                    assert(is_voter == true, 'USER_NOT_REGISTERED');
                    assert(can_vote == true, 'USER_ALREADY_VOTED');
                }
            }
        
            /// @dev Implement the VotingResultTrait for the Vote contract
            #[generate_trait]
            impl VoteResultFunctionsImpl of VoteResultFunctionsTrait {
                // @dev Internal function to get the voting results (yes and no vote counts)
                fn _get_voting_result(self: @ContractState) -> (u8, u8) {
                    let n_yes: u8 = self.yes_votes.read();
                    let n_no: u8 = self.no_votes.read();
        
                    return (n_yes, n_no);
                }
        
                // @dev Internal function to calculate the voting results in percentage
                fn _get_voting_result_in_percentage(self: @ContractState) -> (u8, u8) {
                    let n_yes: u8 = self.yes_votes.read();
                    let n_no: u8 = self.no_votes.read();
        
                    let total_votes: u8 = n_yes + n_no;
        
                    let yes_percentage: u8 = (n_yes * 100_u8) / (total_votes);
                    let no_percentage: u8 = (n_no * 100_u8) / (total_votes);
        
                    return (yes_percentage, no_percentage);
                }
            }
        }`

        case 'Erc20':
          return `use starknet::ContractAddress;

          #[starknet::interface]
          trait IERC20<TContractState> {
              fn get_name(self: @TContractState) -> felt252;
              fn get_symbol(self: @TContractState) -> felt252;
              fn get_decimals(self: @TContractState) -> u8;
              fn get_total_supply(self: @TContractState) -> felt252;
              fn balance_of(self: @TContractState, account: ContractAddress) -> felt252;
              fn allowance(self: @TContractState, owner: ContractAddress, spender: ContractAddress) -> felt252;
              fn transfer(ref self: TContractState, recipient: ContractAddress, amount: felt252);
              fn transfer_from(
                  ref self: TContractState, sender: ContractAddress, recipient: ContractAddress, amount: felt252
              );
              fn approve(ref self: TContractState, spender: ContractAddress, amount: felt252);
              fn increase_allowance(ref self: TContractState, spender: ContractAddress, added_value: felt252);
              fn decrease_allowance(
                  ref self: TContractState, spender: ContractAddress, subtracted_value: felt252
              );
          }
          
          #[starknet::contract]
          mod erc_20 {
              use zeroable::Zeroable;
              use starknet::get_caller_address;
              use starknet::contract_address_const;
              use starknet::ContractAddress;
          
              #[storage]
              struct Storage {
                  name: felt252,
                  symbol: felt252,
                  decimals: u8,
                  total_supply: felt252,
                  balances: LegacyMap::<ContractAddress, felt252>,
                  allowances: LegacyMap::<(ContractAddress, ContractAddress), felt252>,
              }
          
              #[event]
              #[derive(Drop, starknet::Event)]
              enum Event {
                  Transfer: Transfer,
                  Approval: Approval,
              }
              #[derive(Drop, starknet::Event)]
              struct Transfer {
                  from: ContractAddress,
                  to: ContractAddress,
                  value: felt252,
              }
              #[derive(Drop, starknet::Event)]
              struct Approval {
                  owner: ContractAddress,
                  spender: ContractAddress,
                  value: felt252,
              }
          
              #[constructor]
              fn constructor(
                  ref self: ContractState,
                  recipient: ContractAddress,
                  name: felt252,
                  decimals: u8,
                  initial_supply: felt252,
                  symbol: felt252
              ) {
                  self.name.write(name);
                  self.symbol.write(symbol);
                  self.decimals.write(decimals);
                  assert(!recipient.is_zero(), 'ERC20: mint to the 0 address');
                  self.total_supply.write(initial_supply);
                  self.balances.write(recipient, initial_supply);
                  self
                      .emit(
                          Event::Transfer(
                              Transfer {
                                  from: contract_address_const::<0>(), to: recipient, value: initial_supply
                              }
                          )
                      );
              }
          
              #[external(v0)]
              impl IERC20Impl of super::IERC20<ContractState> {
                  fn get_name(self: @ContractState) -> felt252 {
                      self.name.read()
                  }
          
                  fn get_symbol(self: @ContractState) -> felt252 {
                      self.symbol.read()
                  }
          
                  fn get_decimals(self: @ContractState) -> u8 {
                      self.decimals.read()
                  }
          
                  fn get_total_supply(self: @ContractState) -> felt252 {
                      self.total_supply.read()
                  }
          
                  fn balance_of(self: @ContractState, account: ContractAddress) -> felt252 {
                      self.balances.read(account)
                  }
          
                  fn allowance(
                      self: @ContractState, owner: ContractAddress, spender: ContractAddress
                  ) -> felt252 {
                      self.allowances.read((owner, spender))
                  }
          
                  fn transfer(ref self: ContractState, recipient: ContractAddress, amount: felt252) {
                      let sender = get_caller_address();
                      self.transfer_helper(sender, recipient, amount);
                  }
          
                  fn transfer_from(
                      ref self: ContractState,
                      sender: ContractAddress,
                      recipient: ContractAddress,
                      amount: felt252
                  ) {
                      let caller = get_caller_address();
                      self.spend_allowance(sender, caller, amount);
                      self.transfer_helper(sender, recipient, amount);
                  }
          
                  fn approve(ref self: ContractState, spender: ContractAddress, amount: felt252) {
                      let caller = get_caller_address();
                      self.approve_helper(caller, spender, amount);
                  }
          
                  fn increase_allowance(
                      ref self: ContractState, spender: ContractAddress, added_value: felt252
                  ) {
                      let caller = get_caller_address();
                      self
                          .approve_helper(
                              caller, spender, self.allowances.read((caller, spender)) + added_value
                          );
                  }
          
                  fn decrease_allowance(
                      ref self: ContractState, spender: ContractAddress, subtracted_value: felt252
                  ) {
                      let caller = get_caller_address();
                      self
                          .approve_helper(
                              caller, spender, self.allowances.read((caller, spender)) - subtracted_value
                          );
                  }
              }
          
              #[generate_trait]
              impl StorageImpl of StorageTrait {
                  fn transfer_helper(
                      ref self: ContractState,
                      sender: ContractAddress,
                      recipient: ContractAddress,
                      amount: felt252
                  ) {
                      assert(!sender.is_zero(), 'ERC20: transfer from 0');
                      assert(!recipient.is_zero(), 'ERC20: transfer to 0');
                      self.balances.write(sender, self.balances.read(sender) - amount);
                      self.balances.write(recipient, self.balances.read(recipient) + amount);
                      self.emit(Transfer { from: sender, to: recipient, value: amount });
                  }
          
                  fn spend_allowance(
                      ref self: ContractState, owner: ContractAddress, spender: ContractAddress, amount: felt252
                  ) {
                      let current_allowance = self.allowances.read((owner, spender));
                      let ONES_MASK = 0xffffffffffffffffffffffffffffffff_u128;
                      // let is_unlimited_allowance = current_allowance.low == ONES_MASK
                      //     && current_allowance.high == ONES_MASK;
                      // if !is_unlimited_allowance {
                      //     self.approve_helper(owner, spender, current_allowance - amount);
                      // }
                  }
          
                  fn approve_helper(
                      ref self: ContractState, owner: ContractAddress, spender: ContractAddress, amount: felt252
                  ) {
                      assert(!spender.is_zero(), 'ERC20: approve from 0');
                      self.allowances.write((owner, spender), amount);
                      self.emit(Approval { owner, spender, value: amount });
                  }
              }
          }`
      
      default:
        return '';
    }
  };

  return (
    <div className="standar-container">
      <div className="functionstandar-container">
        <h2>Standar Smart Contract en Cairo - Escoge tu contrato y sus Argumentos para un Deploy Sencillo</h2>
        <div className="functionstandar-select-container">
          <label htmlFor="functionstandar-select">Contracts:</label>
          <select
            id="functionstandar-select"
            value={selectedFunction}
            onChange={handleFunctionChange}
          >
            <option value="">-- Select --</option>
            <option value="Owner">Owner</option>
            <option value="Vote">Vote</option>
            <option value="Erc20">Erc20</option>
            
          </select>
        </div>
        {selectedFunction && (
          <div className="code-standar-arguments-container">
            <div className="functionstandar-content">
              <div className="copystandar-link" onClick={handleCopyFunction}>
                <FontAwesomeIcon icon={faCopy} />
              </div>
              <pre>{functionCode}</pre>
            </div>
            <div className="arguments-standar-list">
              <h3>Argumentos Posibles:</h3>
              <ul>
                {argumentsList.map((arg, index) => (
                  <li key={index}>{arg}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div >
    <NetworkInfo />
    </div>
    </div>
  );
}

export default Standar;


