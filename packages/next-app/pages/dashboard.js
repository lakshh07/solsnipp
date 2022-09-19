import React from "react";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import Head from "next/head";

export default function dashboard() {
  return (
    <>
      <Head>
        <title>SolSnipp</title>
      </Head>
      <Dashboard />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const response = axios.get("https://solsnipp.vercel.app/api/snippets");

//   return {
//     props: {
//       snippets: (await response).data,
//     },
//   };
// }
