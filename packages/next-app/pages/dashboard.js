import React from "react";
import Dashboard from "./components/Dashboard";
import axios from "axios";

export default function dashboard({ snippets }) {
  return <>{/* <Dashboard snippets={snippets} /> */}</>;
}

export async function getStaticProps() {
  const response = axios.get("https://solsnipp.vercel.app/api/snippets");

  return {
    props: {
      snippets: (await response).data,
    },
    revalidate: 10,
  };
}
