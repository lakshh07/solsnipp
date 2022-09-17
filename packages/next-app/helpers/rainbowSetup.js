import { chain, createClient, configureChains } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Web3Connect",
  chains,
});
export const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});
