import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { useRouter } from "next/router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../helpers/rainbowSetup";
import Navbar from "./components/Navbar";
import NavbarSmall from "./components/NavbarSmall";
import SnippetData from "../context/snippetData";
import { useState } from "react";
import LoadingContext from "../context/loading";
import Loading from "./components/Loading";

function MyApp({ Component, pageProps }) {
  const [snipData, setSnipData] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const appInfo = {
    appName: "⛓ SolSnipp",
  };

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "rgb(23, 26, 35)",
          color: "white",
          fontFamily: `'Inter', sans-serif`,
        },
      },
    },
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        showRecentTransactions={true}
        coolMode
        appInfo={appInfo}
        chains={chains}
      >
        <ChakraProvider theme={theme}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            <SnippetData.Provider value={{ snipData, setSnipData }}>
              <Loading />
              {router.asPath === "/" ? <Navbar /> : <NavbarSmall />}

              <Component {...pageProps} />
            </SnippetData.Provider>
          </LoadingContext.Provider>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
