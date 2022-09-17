import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ViewSnippet from "./ViewSnippet";

function Snippets({ snippets }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box h={"100%"}>
      <Flex
        alignItems={"center"}
        justifyContent={"flex-start"}
        p={"0px 5px 15px"}
      >
        <Heading
          fontFamily={"Inter"}
          fontSize={"36px"}
          fontWeight={600}
          lineHeight={"35px"}
        >
          Snippets
        </Heading>
        <Text
          w={"1.7rem"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"1.1rem"}
          lineHeight={"1.7rem"}
          bg={"#fff"}
          color={"#111"}
          textAlign={"center"}
          borderRadius={"50%"}
          ml={"0.75rem"}
          fontWeight={600}
        >
          {snippets && snippets?.length}
        </Text>
      </Flex>

      <Divider bg={"red"} opacity={"0.2"} />

      <Box mt={"15px"} h={"450px"} overflow={"scroll"}>
        {snippets &&
          snippets?.map((list, index) => {
            return (
              <Box
                key={index}
                my={"16px"}
                p={"10px 15px"}
                bg={"rgba(17, 19, 21, 0.8)"}
                border={"1px solid #8e96ff"}
                borderRadius={"10px"}
              >
                <Flex
                  justifyContent={"center"}
                  flexDir={"column"}
                  alignItems={"flex-start"}
                  cursor={"pointer"}
                  onClick={() => {
                    setActiveIndex(index);
                    onOpen();
                  }}
                >
                  <Heading fontSize={"20px"}>{list.label}</Heading>
                  <Text
                    pt={"3px"}
                    fontWeight={500}
                    color={"whitesmoke"}
                    fontSize={"14px"}
                    opacity={"0.6"}
                  >
                    {list.description}
                  </Text>
                </Flex>
              </Box>
            );
          })}
        <ViewSnippet
          isOpen={isOpen}
          onClose={onClose}
          index={activeIndex}
          snippet={snippets}
        />
      </Box>
    </Box>
  );
}

export default Snippets;
