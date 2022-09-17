import React from "react";
import Dashboard from "./components/Dashboard";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import axios from "axios";

function dashboard({ snippets }) {
  return (
    <>
      <Dashboard snippets={snippets} />
    </>
  );
}

export default dashboard;

export async function getStaticProps({ params }) {
  const response = axios.get("http://localhost:3000/api/snippets");

  return {
    props: {
      snippets: (await response).data,
    },
  };
}
