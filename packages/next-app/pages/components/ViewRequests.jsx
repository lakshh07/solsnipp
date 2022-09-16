import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

function ViewRequests({ isOpen, onClose, checkOwner }) {
  const [snipData, setSnipData] = useState({
    label: "",
    prefix: "",
    body: "",
    description: "",
  });

  function onChange(e) {
    setSnipData(() => ({ ...snipData, [e.target.name]: e.target.value }));
  }

  function onSubmit() {
    // setSnipData({
    //   ...snipData,
    //   body: snipData.body.replace(/(\r\n)|\r|\n/g, "\n").split(/\n+/g),
    // });
    // setSnipData({
    //   ...snipData,
    //   body: snipData.body.replace(/(\r\n)|\r|\n/g, "\n").split(/\n+/g),
    // });
    console.log(snipData);
  }

  // {checkOwner.toString()}
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
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ViewRequests;
