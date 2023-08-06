import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { number } from "starknet";
import { useCreateVoteCallback } from "./useCreateVoteCallback";
import { useAccount } from "@starknet-react/core";
import { useTransactionManager } from "../components/providers/transactions";
import { VOTER_CLASS_HASH } from "../constants";
import { stark } from "starknet";

export const CreateVote: FC = () => {
  const createVoteCallback = useCreateVoteCallback();
  const { isConnected, account } = useAccount() || {};
  const { addTransaction } = useTransactionManager();
  const [registeredAddresses, setRegisteredAddresses] = useState("");

  const handleChange = (event: any) =>
    setRegisteredAddresses(event.target.value);

  const handleCreateVote = async () => {
    const addresses = registeredAddresses
      .split(",")
      .map((address: string) => number.toHex(number.toBN(address.trim())));

    await createVoteCallback(addresses);
  };

  const deployVoterContract = async (whitelistedAddresses: string[]) => {
    if (!account) { // Add null check for account
      console.error("Not connected");
      return;
    }

    const { transaction_hash } = await account.deploy({
      classHash: VOTER_CLASS_HASH,
      salt: stark.randomAddress(),
      unique: false,
      constructorCalldata: {
        admin_address: account.address,
        registered_addresses: whitelistedAddresses,
      },
    });

    addTransaction({
      status: "TRANSACTION_RECEIVED",
      summary: "Deploy Voter Contract",
      transactionHash: transaction_hash,
    });
  };

  return (
    <Flex
      direction="column"
      p="5"
      gap="4"
      background="blue.400"
      borderRadius="xl"
    >
      {isConnected ? (
        <>
          <Heading size="lg">Create your own vote</Heading>
          <Flex direction="column" align="flex-start">
            <Text fontSize="lg" mb="8px">
              Registered Addresses:{" "}
            </Text>
            <Input
              value={registeredAddresses}
              onChange={handleChange}
              placeholder="integer or hex address, comma separated"
              size="md"
              w="1000px"
              variant="filled"
              fontSize="sm"
              _placeholder={{
                fontSize: "sm",
              }}
              _focusVisible={{
                bg: "white",
                border: "2px solid",
                borderColor: "blue.800",
              }}
              px="2.5"
            />
          </Flex>

          <Button onClick={handleCreateVote} fontSize="md">
            Create Vote 🤩
          </Button>

          <Button
            onClick={() =>
              deployVoterContract(["address1", "address2", "address3"])
            }
            fontSize="md"
          >
            Deploy Voter Contract
          </Button>
        </>
      ) : (
        <Text>Connect your wallet to view and create vote</Text>
      )}
    </Flex>
  );
};

export const VotarComponent: FC = () => {
  const createVoteCallback = useCreateVoteCallback();
  const { isConnected, account } = useAccount() || {};
  const { addTransaction } = useTransactionManager();
  const [registeredAddresses, setRegisteredAddresses] = useState("");

  const handleChange = (event: any) =>
    setRegisteredAddresses(event.target.value);

  const handleCreateVote = async () => {
    const addresses = registeredAddresses
      .split(",")
      .map((address: string) => number.toHex(number.toBN(address.trim())));

    await createVoteCallback(addresses);
  };

  const deployVoterContract = async (whitelistedAddresses: string[]) => {
    if (!isConnected || !account) {
      console.error("Not connected");
      return;
    }

    const { transaction_hash } = await account.deploy({
      classHash: VOTER_CLASS_HASH,
      salt: stark.randomAddress(),
      unique: false,
      constructorCalldata: {
        admin_address: account.address,
        registered_addresses: whitelistedAddresses,
      },
    });

    addTransaction({
      status: "TRANSACTION_RECEIVED",
      summary: "Deploy Voter Contract",
      transactionHash: transaction_hash,
    });
  };

  return (
    <Flex
      direction="column"
      p="5"
      gap="4"
      background="blue.400"
      borderRadius="xl"
    >
      {isConnected ? (
        <>
          <Heading size="lg">Create your own vote</Heading>
          <Flex direction="column" align="flex-start">
            <Text fontSize="lg" mb="8px">
              Registered Addresses:{" "}
            </Text>
            <Input
              value={registeredAddresses}
              onChange={handleChange}
              placeholder="integer or hex address, comma separated"
              size="md"
              w="1000px"
              variant="filled"
              fontSize="sm"
              _placeholder={{
                fontSize: "sm",
              }}
              _focusVisible={{
                bg: "white",
                border: "2px solid",
                borderColor: "blue.800",
              }}
              px="2.5"
            />
          </Flex>

          <Button onClick={handleCreateVote} fontSize="md">
            Create Vote 🤩
          </Button>

          <Button
            onClick={() =>
              deployVoterContract(["address1", "address2", "address3"])
            }
            fontSize="md"
          >
            Deploy Voter Contract
          </Button>
        </>
      ) : (
        <Text>Connect your wallet to view and create vote</Text>
      )}
    </Flex>
  );
};
