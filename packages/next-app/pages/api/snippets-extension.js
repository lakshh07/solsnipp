// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/lakshh07/solsnipp",
  cache: new InMemoryCache(),
});

export default async function handler(req, res) {
  const { data } = await client.query({
    query: gql`
      query {
        snippets {
          label
          description
          body
          prefix
        }
      }
    `,
  });

  res.status(200).json(data.snippets);
}
