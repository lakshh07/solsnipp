import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <>
      <Flex
        px={"4em"}
        py={"1.5em"}
        justifyContent={"space-between"}
        zIndex={"999"}
        position={"relative"}
      >
        <Heading fontFamily={"Cairo"} fontWeight={800} fontSize={"30px"}>
          Web<sup>3</sup>Connect
        </Heading>
        <ConnectButton />
      </Flex>
    </>
  );
}

export default Navbar;
