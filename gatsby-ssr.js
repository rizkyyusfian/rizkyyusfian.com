import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./src/styles/theme";
import "./src/styles/global.css";

export function wrapRootElement({ element }) {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>;
}