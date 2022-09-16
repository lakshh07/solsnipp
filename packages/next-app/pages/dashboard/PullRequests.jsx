import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Blockies from "react-blockies";
import truncateMiddle from "truncate-middle";
import { IoMdAddCircle } from "react-icons/io";
import { useAccount } from "wagmi";

function PullRequests({ owner }) {
  const { address } = useAccount();
  const requests = [
    {
      name: "NFT ERC1155",
      des: "Template for EC721 with OpenZippelin",
      approved: false,
      owner: "0x563361c978C1630Af85E8AFd28821E8eF26b1Df8",
      content: `"<!DOCTYPE html>",
      "<html lang=\"en\">",
      "<head>",
      "<meta charset=\"UTF-8\">",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
      "<meta name=\"Description\" content=\"Enter your description here\"/>",
      "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css\">",
      "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\">",
      "<link rel=\"stylesheet\" href=\"assets/css/style.css\">",
      "<title>title</title>",
      "</head>",
      "<body>",
      "$0",
      "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js\"></script>",
      "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js\"></script>",
      "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js\"></script>",
      "</body>",
      "</html>"`,
    },
    {
      name: "NFT ERC721",
      des: "Template for ERC1155 with OpenZippelin",
      approved: true,
      owner: "0x7b1C1702A09521b4160f79f853b7F54ba6b35a59",
      content: `ksfnmvlksnfvknfsknvsklfnvlksnvlksfvsvsvvsvsfvsfvsfvfsn fv
      "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js\"></script>",
      "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js\"></script>",
      "<script src
      `,
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
          Snippet Requests
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
          {requests?.length}
        </Text>
      </Flex>

      <Divider bg={"red"} opacity={"0.2"} />

      <Box mt={"15px"} overflow={"scroll"}>
        <Accordion allowToggle>
          {requests.map((list, index) => {
            return (
              <AccordionItem position={"relative"} border={"none"} key={index}>
                <AccordionButton
                  w={"100%"}
                  _hover={{ backgroundColor: "none" }}
                  p={"0"}
                  m={"0"}
                >
                  <Box
                    my={"8px"}
                    w={"100%"}
                    p={"10px 15px"}
                    bg={"rgba(17, 19, 21, 0.8)"}
                    border={"1px solid #8e96ff"}
                    borderRadius={"10px"}
                    cursor={"pointer"}
                    position={"relative"}
                    top={"0px"}
                    _hover={{
                      top: "-1px",
                      transition: " all 0.2s ease-in-out",
                    }}
                  >
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"flex-start"}
                    >
                      <Flex
                        justifyContent={"center"}
                        flexDir={"column"}
                        alignItems={"flex-start"}
                        flex={1}
                      >
                        <Heading fontSize={"22px"}>{list.name}</Heading>
                        <Text
                          pt={"3px"}
                          fontWeight={500}
                          color={"whitesmoke"}
                          fontSize={"15px"}
                          opacity={"0.6"}
                          textAlign={"left"}
                        >
                          {list.des}
                        </Text>
                      </Flex>

                      <Flex alignItems={"center"}>
                        {owner === address && (
                          <Box
                            mr={"10px"}
                            onClick={() => alert("approved request created")}
                          >
                            <IoMdAddCircle fontSize={"22px"} />
                          </Box>
                        )}

                        <Text
                          borderWidth={"2px"}
                          borderColor={"rgb(10 10 10/1)"}
                          alignItems={"center"}
                          borderRadius={"9999px"}
                          py={"0.25rem"}
                          px={"0.75rem"}
                          textTransform={"uppercase"}
                          fontSize={"0.75rem"}
                          lineHeight={"1rem"}
                          fontWeight={600}
                          color={"#111"}
                          bg={
                            list.approved
                              ? "rgb(183 234 213)"
                              : "rgb(250 229 195)"
                          }
                        >
                          {list.approved ? "approved" : "open"}
                        </Text>

                        <Flex
                          borderWidth={"2px"}
                          borderColor={"rgb(10 10 10/1)"}
                          alignItems={"center"}
                          borderRadius={"9999px"}
                          bg={"rgb(198 201 246)"}
                          py={"0.25rem"}
                          px={"0.75rem"}
                          w={"max-content"}
                          ml={"10px"}
                        >
                          <Box
                            borderRadius={"50%"}
                            borderWidth={"1.5px"}
                            borderColor={"rgb(10 10 10/1)"}
                            overflow={"hidden"}
                          >
                            <Blockies
                              seed={list.owner}
                              color="#dfe"
                              bgcolor="#aaa"
                              default="-1"
                              size={10}
                              scale={2}
                            />
                          </Box>
                          <Text
                            ml={"10px"}
                            fontSize={"0.75rem"}
                            lineHeight={"1rem"}
                            fontWeight={600}
                            color={"#111"}
                          >
                            {truncateMiddle(list.owner || "", 5, 4, "...")}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <AccordionPanel textAlign={"left"} pt={6}>
                      {list.content}
                    </AccordionPanel>
                  </Box>
                </AccordionButton>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </Box>
  );
}

export default PullRequests;
