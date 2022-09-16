import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
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
        <Link href="/">
          <Heading fontFamily={"Cairo"} fontWeight={800} fontSize={"30px"}>
            ⛓ SolSnipp
          </Heading>
        </Link>
        <ConnectButton />
      </Flex>
    </>
  );
}

export default Navbar;
