import { createContext, useContext } from "react";
const SnippetData = createContext();

export function useSnippetData() {
  return useContext(SnippetData);
}

export default SnippetData;
