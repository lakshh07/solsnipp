import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { GoGitPullRequest } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { useAccount } from "wagmi";
import CreateSnippetModal from "./CreateSnippetModal";

function CreateSnippet({ owner }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAccount();

  return (
    <Flex
      justifyContent={"flex-end"}
      alignItems={"center"}
      m={"10px 10px 20px"}
    >
      {owner && (
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
          isDisabled={address ? false : true}
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
        isDisabled={address ? false : true}
      >
        Request Snippet
      </Button>

      <CreateSnippetModal
        isOpen={isOpen}
        onClose={onClose}
        checkOwner={owner}
      />
    </Flex>
  );
}

export default CreateSnippet;
