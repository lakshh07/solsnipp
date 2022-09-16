import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoGitPullRequest } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { useAccount } from "wagmi";
import ViewRequests from "../components/ViewRequests";

function CreateSnippet({ owner }) {
  const [checkOwner, setCheckOwner] = useState(false);

  const { address } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent={"flex-end"}
      alignItems={"center"}
      m={"10px 10px 20px"}
    >
      {owner === address && (
        <Button
          bg={"whitesmoke"}
          color={"#111"}
          border={"1px solid whitesmoke"}
          _hover={{
            bg: "transparent",
            color: "whitesmoke",
            transform: "scale(1.025)",
          }}
          width={"100%"}
          mr={"16px"}
          rightIcon={<MdAdd />}
          onClick={onOpen}
        >
          Create Snippet
        </Button>
      )}

      <Button
        bg={"whitesmoke"}
        color={"#111"}
        border={"1px solid whitesmoke"}
        _hover={{
          bg: "transparent",
          color: "whitesmoke",
          transform: "scale(1.025)",
        }}
        width={"100%"}
        rightIcon={<GoGitPullRequest />}
        onClick={onOpen}
      >
        Request Snippet
      </Button>

      <ViewRequests isOpen={isOpen} onClose={onClose} checkOwner={checkOwner} />
    </Flex>
  );
}

export default CreateSnippet;
