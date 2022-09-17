import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import * as IPFS from "ipfs-core";

import { useSigner, useWaitForTransaction } from "wagmi";
import { solSnippAddress } from "../../utils/contractAddress";
import snippContractAbi from "../../contracts/ABI/SolSnipp.json";
import { ethers } from "ethers";

function CreateSnippetModal({ isOpen, onClose, checkOwner }) {
  const toast = useToast();
  const { data: signer } = useSigner();

  const [hash, setHash] = useState("");
  const [snipData, setSnipData] = useState({
    label: "",
    prefix: "",
    body: "",
    description: "",
  });

  function onChange(e) {
    setSnipData(() => ({ ...snipData, [e.target.name]: e.target.value }));
  }

  async function onSubmit() {
    const contract = new ethers.Contract(
      solSnippAddress,
      snippContractAbi,
      signer
    );

    const ipfs = await IPFS.create();
    const { cid } = await ipfs.add(JSON.stringify(snipData));

    const result = await contract.createSnippet(
      snipData.label,
      snipData.description,
      cid.toString(),
      checkOwner ? true : false
    );

    console.log(cid.toString());
    console.log(result.hash);

    setHash(result.hash);
  }

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: hash,
  });

  useEffect(() => {
    hash &&
      setSnipData({
        label: "",
        prefix: "",
        body: "",
        description: "",
      });

    isLoading &&
      toast({
        title: "Transaction Sent",
        description: hash,
        status: "info",
        duration: 3000,
        isClosable: true,
        variant: "subtle",
        position: "bottom-right",
        containerStyle: { color: "blackAlpha.800" },
      });

    isSuccess &&
      toast({
        title: "Transaction Successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
        variant: "subtle",
        containerStyle: { color: "blackAlpha.800" },
      });

    isSuccess &&
      setTimeout(() => {
        onClose();
      }, 4000);
  }, [isSuccess, isLoading, setSnipData, toast]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
        <ModalOverlay backdropFilter="blur(3px)" />
        <ModalContent
          bg={"rgba(3, 5, 13, 0.8)"}
          boxShadow={
            "rgb(8 11 29 / 40%) 0px 5.13699px 7.70548px, rgb(15 15 15 / 10%) 0px 20.5479px 20.5479px -15.411px"
          }
        >
          <ModalHeader>Create Snippet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex>
                <FormControl mr={"8px"} flex={2}>
                  <FormLabel>Label</FormLabel>
                  <Input
                    borderColor={"#8e96ff"}
                    placeholder="label"
                    name="label"
                    value={snipData.label}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl ml={"8px"} flex={1}>
                  <FormLabel>Prefix</FormLabel>
                  <Input
                    borderColor={"#8e96ff"}
                    placeholder="prefix"
                    name="prefix"
                    value={snipData.prefix}
                    onChange={onChange}
                  />
                </FormControl>
              </Flex>

              <FormControl mt={"16px"}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  borderColor={"#8e96ff"}
                  placeholder="description"
                  rows={"2"}
                  name="description"
                  value={snipData.description}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl mt={"16px"}>
                <FormLabel>
                  Content{" "}
                  <span style={{ opacity: 0.6, fontSize: "12px" }}>
                    (paste code)
                  </span>{" "}
                </FormLabel>
                <Textarea
                  borderColor={"#8e96ff"}
                  placeholder="content"
                  rows={"4"}
                  name="body"
                  value={snipData.body}
                  onChange={(e) =>
                    setSnipData({
                      ...snipData,
                      body: e.target.value
                        .replace(/(\r\n)|\r|\n/g, "\n")
                        .split(/\n+/g),
                    })
                  }
                />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"whitesmoke"}
              color={"#111"}
              border={"1px solid whitesmoke"}
              _hover={{
                bg: "transparent",
                color: "whitesmoke",
                transform: "scale(1.025)",
              }}
              onClick={onSubmit}
              isLoading={isLoading}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateSnippetModal;
