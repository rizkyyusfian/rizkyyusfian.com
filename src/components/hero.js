import * as React from 'react'
import logo from "../assets/images/lightlogo.png";
import { Box, Text, Image, Flex } from "@chakra-ui/react";


const Hero = () => {
    return (
        <Flex justifyContent="center" alignItems="center">
            {/* Left Column */}
            <Box w={{ base: "100%", md: "50%" }} p={8}>
                <Text fontSize="4xl" fontWeight="bold" mb={4}>
                    Hey, I'm Rizky Yusfian 👋🏻
                </Text>
                <Text fontSize="lg" mb={6}>
                    Welcome to my digital space. 🚀
                </Text>
                <Text textAlign={'justify'}>
                    I'm a software engineer in Indonesia. I make open-source projects and write about code, design, and life. I like movie, sci-fi, reading, and gaming.
                </Text>
            </Box>
            {/* Right Column */}
            <Box p={8} w={{ base: "100%", md: "50%" }} display={'flex'} justifyContent={'flex-end'}>
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
    )
}

export default Hero;