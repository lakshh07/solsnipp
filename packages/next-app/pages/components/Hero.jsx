import { Heading, Text, Flex, Box, Button } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Typed from "react-typed";
import { BsArrowRight } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";

function Hero() {
  const router = useRouter();

  const content = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
  </body>
  </html>
  `;
  // console.log(content.replace(/(\r\n)|\r|\n/g, "\n").split(/\n+/g));
  // contents.replace(/(\r\n)|\r|\n/g, '\n').split(/\n+/g)
  const arrC = content.replace(/(\r\n)|\r|\n/g, "\n").split(/\n+/g);

  const a = arrC.filter((lines) => {
    return lines.length < 3;
  });

  console.log(a);

  return (
    <>
      <Box
        h={"80vh"}
        px={"2rem"}
        position={"relative"}
        bg={"rgb(23, 26, 35)"}
        backgroundImage={"url(/assets/grid-bg.png)"}
        backgroundPosition={"center"}
        backgroundRepeat={"repeat no-repeat"}
        align={"center"}
      >
        <Box className="grad1" />
        <Box className="grad2" />

        <Flex h={"110%"} alignItems={"center"} justifyContent={"center"}>
          <Box align={"center"} textAlign={"center"} w={"57%"}>
            <Heading fontSize={"80px"} lineHeight={1} className={"text-grad"}>
              Web3-Native solidity snippets for the
              <span style={{ fontFamily: "Garamond" }}>
                {" "}
                world&apos;s best
              </span>{" "}
            </Heading>

            <Heading
              fontFamily={"Clash Display"}
              fontSize={"80px"}
              lineHeight={1}
            >
              <Typed
                strings={["Builder.", "Creaters.", "NFT Communities.", "DAOs."]}
                typeSpeed={150}
                backSpeed={50}
                loop
              />
            </Heading>

            <Text
              mt={"32px"}
              fontSize={"20px"}
              lineHeight={"140%"}
              fontWeight={500}
              color="rgba(255,255,255,.9)"
            >
              A new way community driven snippets for solidity
            </Text>

            <Flex justifyContent={"center"} alignItems={"center"} mt={"60px"}>
              <Button
                leftIcon={<SiVisualstudiocode />}
                mx={"10px"}
                bg={"whitesmoke"}
                color={"#111"}
                border={"1px solid whitesmoke"}
                _hover={{
                  bg: "transparent",
                  color: "whitesmoke",
                  transform: "scale(1.025)",
                }}
              >
                Install SolSnipp for VS Code
              </Button>
              <Button
                mx={"10px"}
                bg={"whitesmoke"}
                color={"#111"}
                border={"1px solid whitesmoke"}
                _hover={{
                  bg: "transparent",
                  color: "whitesmoke",
                  transform: "scale(1.025)",
                }}
                rightIcon={<BsArrowRight />}
                onClick={() => router.push("/dashboard")}
              >
                Get Started
              </Button>
            </Flex>

            <Text color="rgba(255,255,255,.75)" mt={"18px"} fontSize={"15px"}>
              Oh! Did we mention it&apos;s free?
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Hero;
