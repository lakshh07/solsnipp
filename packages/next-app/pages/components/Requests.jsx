import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Blockies from "react-blockies";
import truncateMiddle from "truncate-middle";
import { IoMdAddCircle } from "react-icons/io";
import { ethers } from "ethers";
import { solSnippAddress } from "../../utils/contractAddress";
import solSnippAbi from "../../contracts/ABI/SolSnipp.json";
import { useSigner, useWaitForTransaction } from "wagmi";

export default function Requests({ owner, snippets }) {
  const { data: signer } = useSigner();
  const [hash, setHash] = useState("");
  const toast = useToast();
  const route = useRouter();

  async function approveRequest(_id, index) {
    const contract = new ethers.Contract(solSnippAddress, solSnippAbi, signer);

    if (snippets[_id + 1]?.status) {
      toast({
        title: "Request already approved",
        status: "info",
        duration: 2000,
        isClosable: true,
        variant: "subtle",
        position: "bottom-right",
        containerStyle: { color: "blackAlpha.800" },
      });
    } else {
      const result = await contract.approve(_id);
      setHash(result.hash);
    }
  }

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: hash,
  });

  useEffect(() => {
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
        route.reload();
      }, 1000);
  }, [isSuccess, isLoading, toast]);

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
          {snippets &&
            snippets?.filter((list) => {
              return !list.status;
            }).length}
        </Text>
      </Flex>

      <Divider bg={"red"} opacity={"0.2"} />

      <Box mt={"15px"} overflow={"scroll"}>
        <Accordion allowToggle w={"755px"}>
          {snippets &&
          snippets?.filter((list) => {
            return !list.status;
          }).length ? (
            snippets
              ?.filter((list) => {
                return !list.status;
              })
              .map((list, index) => {
                return (
                  <AccordionItem
                    position={"relative"}
                    border={"none"}
                    key={index}
                  >
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
                            <Heading fontSize={"22px"}>{list.label}</Heading>
                            <Text
                              pt={"3px"}
                              fontWeight={500}
                              color={"whitesmoke"}
                              fontSize={"15px"}
                              opacity={"0.6"}
                              textAlign={"left"}
                            >
                              {list.description}
                            </Text>
                          </Flex>

                          <Flex alignItems={"center"}>
                            {owner && (
                              <Box
                                mr={"10px"}
                                onClick={() => {
                                  approveRequest(list.id);
                                }}
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
                                list.status
                                  ? "rgb(183 234 213)"
                                  : "rgb(250 229 195)"
                              }
                            >
                              {list.status ? "approved" : "open"}
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
                          {list.body.map((content, index) => {
                            return <p key={index}>{content}</p>;
                          })}
                        </AccordionPanel>
                      </Box>
                    </AccordionButton>
                  </AccordionItem>
                );
              })
          ) : (
            <Flex
              mt="9em"
              justifyContent="center"
              flexDir="column"
              alignItems="center"
            >
              <Image src={"/assets/no-results.png"} height={70} width={70} />
              <Heading fontSize="1em" pt="1em" fontWeight={500} opacity={0.8}>
                No pending requests
              </Heading>
            </Flex>
          )}
        </Accordion>
      </Box>
    </Box>
  );
}
