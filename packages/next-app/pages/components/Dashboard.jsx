import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CreateSnippet from "./CreateSnippet";
import Requests from "./Requests";
import Snippets from "./Snippets";

import { useAccount, useContractRead } from "wagmi";
import { solSnippAddress } from "../../utils/contractAddress";
import snippContractAbi from "../../contracts/ABI/SolSnipp.json";

function Dashboard({ snippets }) {
  const [checkOwner, setCheckOwner] = useState(false);
  const { address } = useAccount();

  const { data: owner } = useContractRead({
    addressOrName: solSnippAddress,
    contractInterface: snippContractAbi,
    functionName: "owner",
    watch: true,
  });

  useEffect(() => {
    if (owner === address) {
      setCheckOwner(true);
    } else {
      setCheckOwner(false);
    }
  }, [owner, address]);

  return (
    <>
      <Box className="grad3" />
      <Box className="grad4" />
      <Container maxW={1250} top={"50px"} position={"relative"} h="80vh">
        <Grid
          position={"relative"}
          // h="80vh"
          h={"100%"}
          templateColumns="1fr 0.5fr"
          gap={6}
        >
          <GridItem
            h={"100%"}
            p={"20px"}
            borderRadius={"16px"}
            backdropFilter={"blur(25.6849px)"}
            boxShadow={
              "rgb(8 11 29 / 40%) 0px 5.13699px 7.70548px, rgb(15 15 15 / 10%) 0px 20.5479px 20.5479px -15.411px"
            }
            color={"white"}
            bg={"rgba(3, 5, 13, 0.3)"}
          >
            <Requests owner={checkOwner} snippets={snippets} />
          </GridItem>

          <GridItem h={"100%"}>
            <CreateSnippet owner={checkOwner} />
            <Box
              h={"89%"}
              p={"20px"}
              borderRadius={"16px"}
              backdropFilter={"blur(25.6849px)"}
              boxShadow={
                "rgb(8 11 29 / 40%) 0px 5.13699px 7.70548px, rgb(15 15 15 / 10%) 0px 20.5479px 20.5479px -15.411px"
              }
              color={"white"}
              bg={"rgba(3, 5, 13, 0.3)"}
            >
              <Snippets snippets={snippets} />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
