import { Box, Image, Flex, Center, HStack, Spacer, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/lightlogo.png'

const Header = () => {
    return (
        <Box maxW="1024px" h={'max-content'} m='0 auto'>
            <Box p={2} bg="" w="100%" color="">
                <Flex>
                    <Box>
                        <Flex>
                            <Image src={logo} alt="Logo" boxSize="48px" borderRadius={5} border='1px solid black' />
                            <Center pl={2}>
                                <Box as="h1" fontSize="xl" fontWeight="semibold" letterSpacing="wide">
                                    Rizkyyusfian.com
                                </Box>
                            </Center>
                        </Flex>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image src={logo} alt="Logo" boxSize="48px" borderRadius={5} border='1px solid black' />
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Flex>
                    <Box p={2} bg="" w="100%">
                        <HStack>
                            <ChakraLink _hover={{ fontWeight: 'semibold', color: "red.500", backgroundColor: 'yellow.300'}}>
                                <Link to="/">Home</Link>
                            </ChakraLink>
                            <ChakraLink _hover={{ fontWeight: 'semibold', color: "red.500", backgroundColor: 'yellow.300'}}>
                                <Link to="/about">About</Link>
                            </ChakraLink>
                        </HStack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default Header