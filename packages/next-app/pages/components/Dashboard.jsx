import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CreateSnippet from "./CreateSnippet";
import Requests from "./Requests";
import Snippets from "./Snippets";
import { gql } from "@apollo/client";
import { useAccount, useContractRead } from "wagmi";
import { solSnippAddress } from "../../utils/contractAddress";
import snippContractAbi from "../../contracts/ABI/SolSnipp.json";
import client, { query } from "../api";
import { useSnippetData } from "../../context/snippetData";
import { useLoadingContext } from "../../context/loading";

function Dashboard() {
  const [checkOwner, setCheckOwner] = useState(false);
  const { address } = useAccount();
  const { snipData, setSnipData } = useSnippetData();
  const { setLoading } = useLoadingContext();

  const { data: owner } = useContractRead({
    addressOrName: solSnippAddress,
    contractInterface: snippContractAbi,
    functionName: "owner",
    watch: true,
  });

  async function fetchData() {
    const { data } = await client.query({
      query: gql`
        ${query}
      `,
    });
    setLoading(false);
    setTimeout(() => {
      setSnipData(data.snippets);
    }, 250);
  }

  useEffect(() => {
    if (owner === address) {
      setCheckOwner(true);
    } else {
      setCheckOwner(false);
    }
  }, [owner, address]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box className="grad3" />
      <Box className="grad4" />
      <Container maxW={1250} top={"50px"} position={"relative"} h="80vh">
        <Grid
          position={"relative"}
          // h="80vh"
          h={"90%"}
          templateColumns="1fr 0.5fr"
          gap={6}
        >
          <GridItem
            h={"660px"}
            p={"20px"}
            borderRadius={"16px"}
            backdropFilter={"blur(25.6849px)"}
            boxShadow={
              "rgb(8 11 29 / 40%) 0px 5.13699px 7.70548px, rgb(15 15 15 / 10%) 0px 20.5479px 20.5479px -15.411px"
            }
            color={"white"}
            bg={"rgba(3, 5, 13, 0.3)"}
            overflow={"auto"}
          >
            <Requests
              owner={checkOwner}
              snippets={snipData}
              fetchData={fetchData}
            />
          </GridItem>

          <GridItem h={"100%"}>
            <CreateSnippet owner={checkOwner} fetchData={fetchData} />
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
              <Snippets snippets={snipData} />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
