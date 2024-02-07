import {
    Box,
    Image,
    Flex,
    Center,
    HStack,
    Spacer,
    Link as ChakraLink,
    Button,
    useColorMode,
    Text,
  } from "@chakra-ui/react";
  import { ExternalLinkIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
  import { Link } from "gatsby";
  import React from "react";
  import logolight from "../assets/images/lightlogo.png";
  import logodark from "../assets/images/darklogo.png";
  
  const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box>
        <Box w="100%">
          <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <Box>
              <Flex>
                <Image
                  src={colorMode === "light" ? logodark : logolight}
                  alt="Logo"
                  boxSize="36px"
                  borderRadius={5}
                  border="1px solid black"
                />
                <Center pl={2}>
                  <Box
                    as="h1"
                    fontSize="xl"
                    fontWeight="semibold"
                    letterSpacing="wide"
                  >
                    <Text>RIZKYYUSFIAN</Text>
                  </Box>
                </Center>
              </Flex>
            </Box>
            <Spacer />
            <Box
              p={4}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button onClick={toggleColorMode} variant="ghost" p={2}>
                {colorMode === "light" ? (
                  <MoonIcon boxSize={6} color="blue.500" />
                ) : (
                  <SunIcon boxSize={6} color={'yellow.300'} />
                )}
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
            <Box bg="" w="100%">
              <HStack direction={["column", "row"]} spacing="20px">
                <ChakraLink
                  _hover={{
                    fontWeight: "semibold",
                    color: "black",
                    backgroundColor: "red.300",
                  }}
                >
                  <Link to="/">Home</Link>
                </ChakraLink>
                <ChakraLink
                  _hover={{
                    fontWeight: "semibold",
                    color: "black",
                    backgroundColor: "blue.300",
                  }}
                >
                  <Link to="/about">About</Link>
                </ChakraLink>
                <ChakraLink
                  _hover={{
                    fontWeight: "semibold",
                    color: "black",
                    backgroundColor: "pink.300",
                  }}
                >
                  <Link to="/blog">Blog</Link>
                </ChakraLink>
                <ChakraLink
                  _hover={{
                    fontWeight: "semibold",
                    color: "black",
                    backgroundColor: "purple.300",
                  }}
                >
                  <Link to="/project">Projects</Link>
                </ChakraLink>
                <ChakraLink
                  href="https://github.com/rizkyyusfian"
                  _hover={{
                    fontWeight: "semibold",
                    color: "black",
                    backgroundColor: "green.300",
                  }}
                  isExternal
                >
                  Github <ExternalLinkIcon boxSize={4} mb={1} />
                </ChakraLink>
                <ChakraLink
                  href="https://www.linkedin.com/in/rizkyyusfian/"
                  _hover={{
                    fontWeight: "semibold",
                    color: "black",
                    backgroundColor: "teal.300",
                  }}
                  isExternal
                >
                  LinkedIn <ExternalLinkIcon boxSize={4} mb={1} />
                </ChakraLink>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };
  export default Header;