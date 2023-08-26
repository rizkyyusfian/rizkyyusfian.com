import * as React from "react";
import logo from "../assets/images/lightlogo.png";
import {
  Box,
  Text,
  Image,
  Flex,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex justifyContent="center" alignItems="center">
      {/* Left Column */}
      <Box w={{ base: "100%", md: "50%" }} p={8}>
        <Text fontSize="4xl" fontWeight="bold" mb={4} letterSpacing={0}>
          Hey, I'm Rizky Yusfian 👋🏻
        </Text>
        <Text fontSize="lg" mb={6}>
          Welcome to my digital space. 🚀
        </Text>
        <Text textAlign={"justify"}>
          "Hey there, I'm a software engineer from Indonesia. I mostly using
          PHP, Laravel, NodeJS, and ReactJS in my projects. When I'm not
          immersed in code, you'll find me exploring movies, melodies, books,
          and gaming.
        </Text>
        <Box mt={10}>
          <Text
            backgroundColor={colorMode === "light" ? "black" : "white"}
            color={colorMode === "light" ? "white" : "black"}
          >
            This Website still under development, Thank you for visiting. 🙏🏻
          </Text>
        </Box>
        <Box mt={10}>
          <Text fontSize="lg" mb={6}>
            You can find me on:
          </Text>
          <Text fontSize="lg" mb={6}>
            <ChakraLink
              href="https://www.instagram.com/xxmryyx/"
              _hover={{ backgroundColor: "blue.500" }}
              isExternal
            >
              Instagram
            </ChakraLink>
          </Text>
          <Text fontSize="lg" mb={6}>
            <ChakraLink
              href="https://twitter.com/xxmryyx"
              _hover={{ backgroundColor: "blue.500" }}
              isExternal
            >
              Twitter
            </ChakraLink>
          </Text>
        </Box>
      </Box>
      {/* Right Column */}
      <Box
        p={8}
        w={{ base: "100%", md: "50%" }}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Image
          src={logo} // Replace with the path to your image
          alt="MRYY Logo"
          objectFit="cover"
          w="80%"
          h="80%"
          borderRadius="5px"
          border={"1px solid black"}
        />
      </Box>
    </Flex>
  );
};

export default Hero;
