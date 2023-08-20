import { Link as ChakraLink } from "gatsby"
import { Box, Text, Image, Flex, Center, HStack, Spacer, Link } from "@chakra-ui/react"
import * as React from "react"
import logo from '../assets/images/lightlogo.png'
import Layout from "../components/Layout"
import Seo from '../components/Seo'

const pageStyles = {
  margin: "0 auto",
  color: "#232129",
  width: "1024px",
  padding: 96,
  border: "1px solid black",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Box m='0 auto' width='1024px'>
        <Box border='1px solid black'>
          <Flex justifyContent="center" alignItems="center">
            {/* Left Column */}
            <Box w={{ base: '100%', md: '50%' }} p={8}>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Hey, Rizky Yusfian
              </Text>
              <Text fontSize="lg" mb={6}>
                Welcome to my digital garden. 🌱
              </Text>
              <Text>
                I'm a software developer in Chicago. I make open-source projects and write about code, design, and life.
                I like accordions, drawing, sci-fi, reading, and gaming.
              </Text>
            </Box>
            {/* Right Column */}
            <Box p='40px' w={{ base: '100%', md: '50%' }}>
              <Image
                src={logo}  // Replace with the path to your image
                alt="Tania's Image"
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="5px"
                border={'1px solid black'}
              />
            </Box>
          </Flex>
          <Box p={8}>
            Latest Post
            <Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  <Link href="/blog/hello-world">
                    Hello World
                  </Link>
                </Text>
                <Text mb={4}>
                  Welcome to my digital garden. 🌱
                </Text>
                <Text>
                  I'm a software developer in Chicago. I make open-source projects and write about code, design, and life.
                  I like accordions, drawing, sci-fi, reading, and gaming.
                </Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  <Link href="/blog/hello-world">
                    Hello World
                  </Link>
                </Text>
                <Text mb={4}>
                  Welcome to my digital garden. 🌱
                </Text>
                <Text>
                  I'm a software developer in Chicago. I make open-source projects and write about code, design, and life.
                  I like accordions, drawing, sci-fi, reading, and gaming.
                </Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  <Link href="/blog/hello-world">
                    Hello World
                  </Link>
                </Text>
                <Text mb={4}>
                  Welcome to my digital garden. 🌱
                </Text>
                <Text>
                  I'm a software developer in Chicago. I make open-source projects and write about code, design, and life.
                  I like accordions, drawing, sci-fi, reading, and gaming.
                </Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  <Link href="/blog/hello-world">
                    Hello World
                  </Link>
                </Text>
                <Text mb={4}>
                  Welcome to my digital garden. 🌱
                </Text>
                <Text>
                  I'm a software developer in Chicago. I make open-source projects and write about code, design, and life.
                  I like accordions, drawing, sci-fi, reading, and gaming.
                </Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  <Link href="/blog/hello-world">
                    Hello World
                  </Link>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Footer/> */}
      </Box>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Blog Page" />