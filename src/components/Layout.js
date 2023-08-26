import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Box>
        <Header />
      </Box>
      <Box flexGrow={1}>{children}</Box>
      <Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;