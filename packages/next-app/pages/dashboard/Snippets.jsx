import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Snippets() {
  const Existed = [
    {
      name: "NFT ERC1155",
      des: "Template for EC721 with OpenZippelin",
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
    },
  ];
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
          {Existed?.length}
        </Text>
      </Flex>

      <Divider bg={"red"} opacity={"0.2"} />

      <Box mt={"15px"} h={"450px"} overflow={"scroll"}>
        {Existed.map((list, index) => {
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
              >
                <Heading fontSize={"20px"}>{list.name}</Heading>
                <Text
                  pt={"3px"}
                  fontWeight={500}
                  color={"whitesmoke"}
                  fontSize={"14px"}
                  opacity={"0.6"}
                >
                  {list.des}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Snippets;
