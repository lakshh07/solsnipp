import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ViewSnippet from "./ViewSnippet";
import FlipMove from "react-flip-move";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import client, { query } from "../api";

function Snippets({ snippets }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contractType, setContractType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [typeArray, setTypeArray] = useState([]);
  // const [snippets, setSnippets] = useState([]);

  async function fetchData() {
    const { data } = await client.query({
      query: gql`
        ${query}
      `,
    });
    console.log(data.snippets, "da");
    // setSnippets(data.snippets);
  }

  function makeContractTypeArray() {
    let arr = [];
    for (let i = 0; i < snippets?.length; i++) {
      if (!arr.includes(snippets[i]?.contractType)) {
        arr.push(snippets[i]?.contractType);
      }
    }
    setTypeArray(arr);
  }

  useEffect(() => {
    // fetchData();
    makeContractTypeArray();
  }, [snippets]);
  // console.log(typeArray);
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
          {snippets &&
            snippets?.filter((list) => {
              return list.status;
            }).length}
        </Text>
      </Flex>

      <Divider bg={"red"} opacity={"0.2"} />

      <Flex mt={"15px"} pb={"10px"}>
        <Box
          bg={
            contractType === ""
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(17, 19, 21, 0.8)"
          }
          color={contractType === "" ? "black" : "white"}
          border={"1px solid #8e96ff"}
          borderRadius={"999"}
          p={"2px 10px"}
          mr={"10px"}
          cursor={"pointer"}
          onClick={() => setContractType("")}
        >
          <Text m={"0"} p={"0"} fontSize={"14px"}>
            All
          </Text>
        </Box>
        <Flex overflow={"scroll"} w={"300px"}>
          {snippets &&
            typeArray.map((list, index) => {
              return (
                <Box
                  bg={
                    contractType === list
                      ? "rgba(255, 255, 255, 0.8)"
                      : "rgba(17, 19, 21, 0.8)"
                  }
                  color={contractType === list ? "black" : "white"}
                  border={"1px solid #8e96ff"}
                  borderRadius={"999"}
                  p={"2px 10px"}
                  cursor={"pointer"}
                  mr={"10px"}
                  key={index}
                  onClick={() => setContractType(list)}
                >
                  <Text m={"0"} p={"0"} fontSize={"14px"}>
                    {list}
                  </Text>
                </Box>
              );
            })}
        </Flex>
      </Flex>

      <Box h={"450px"} overflow={"scroll"}>
        <FlipMove>
          {snippets &&
            snippets
              ?.filter((list) => {
                return list.status;
              })
              .filter((list) => {
                return contractType ? list.contractType === contractType : list;
              })
              .map((list, index) => {
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
        </FlipMove>
      </Box>
    </Box>
  );
}

export default Snippets;
