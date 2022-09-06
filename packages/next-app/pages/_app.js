import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../helpers/rainbowSetup";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  const appInfo = {
    appName: "🦄Web3Connect",
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
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
