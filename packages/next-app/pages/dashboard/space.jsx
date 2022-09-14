import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import SpaceBox from "../components/SpaceBox";

function space() {
  return (
    <>
      <Box h={"100%"} maxW={"1300px"} mx={"auto"} mt={"48px"}>
        <Box className="grad3" />
        <Box className="grad4" />
        <Grid templateColumns={"1.2fr 0.4fr"} alignItems={"center"}>
          <GridItem pl={"16px"} pr={"32px"} mr={"16px"}>
            <Heading fontSize={"36px"} lineHeight={"1.2"}>
              Web3 Space
            </Heading>
            <Text mt={"8px"} pb={"24px"} color={"gray.400"} fontWeight={500}>
              This is a space for people hacking on the nights and weekends to
              build cool shit in the world of web3, ML/AI, gaming, bio,
              hardware, or whatever else. The treasury is funded by supporters
              that want to see the next generation of builders win.
            </Text>

            <SpaceBox />
          </GridItem>
          <GridItem
            ml={"16px"}
            p={"16px"}
            bg={"rgba(3, 5, 13, 0.4)"}
            boxShadow={"rgb(15 15 15 / 10%) 0px 64px 64px -48px"}
            backdropFilter={"blur(80px)"}
            borderRadius={"16px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              align={"center"}
              textAlign={"center"}
              w={"100%"}
              border={"1px solid"}
              borderColor={"gray.400"}
              borderRadius={"16px"}
              padding={"8px"}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                color={"gray.400"}
              >
                <Text mr={"8px"} fontSize={"sm"} fontWeight={"medium"}>
                  Treasury
                </Text>
                <AiOutlineInfoCircle />
              </Flex>

              <Text mt={"8px"} fontSize={"3xl"} fontWeight={"bold"}>
                $108,602
              </Text>

              <Flex
                mt={"8px"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"gray.400"}
                fontSize={"sm"}
                textTransform={"capitalize"}
              >
                <Text mr={"8px"}>0xdC1eC867CffB...</Text>
                <BsArrowUpRight />
              </Flex>
            </Box>
            <Flex
              mt={"16px"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
            >
              <Button w={"100%"} mx={"8px"}>
                Post
              </Button>
              <Button w={"100%"} mx={"8px"}>
                Invite
              </Button>
            </Flex>

            <Box>
              <Heading>Members</Heading>
              <Flex></Flex>
            </Box>
            <Box>
              <Heading>Moderators</Heading>
              <Flex></Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default space;
