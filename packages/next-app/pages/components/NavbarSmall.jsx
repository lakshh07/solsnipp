import React from "react";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function NavbarSmall() {
  return (
    <>
      <Flex
        px={"4em"}
        py={"1em"}
        justifyContent={"space-between"}
        zIndex={"999"}
        position={"relative"}
      >
        <Heading fontFamily={"Cairo"} fontWeight={800} fontSize={"30px"}>
          Web<sup>3</sup>Connect
        </Heading>
        <ConnectButton />
      </Flex>

      {/* <Divider /> */}
    </>
  );
}

export default NavbarSmall;
