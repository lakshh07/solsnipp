import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/lakshh07/solsnipp",
  cache: new InMemoryCache(),
});

export const query = `query {
    snippets {
      id
      label
      description
      body
      status
      contractType
      owner
    }
  }`;

export default client;
