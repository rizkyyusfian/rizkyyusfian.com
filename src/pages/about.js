import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import Layout from "../components/Layout";
import SpotifyTopSongs from "../components/SpotifyTopSong";
import Seo from "../components/Seo";
import logolight from "../assets/images/lightlogo.png";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  Badge,
  Grid,
  GridItem,
  List,
  ListItem,
  Flex,
  Image,
  Tooltip,
} from "@chakra-ui/react";

const AboutPage = () => {
  const topSongs = [
    {
      title: "Song Title 1",
      artist: "Artist Name 1",
      url: "https://open.spotify.com/track/...",
    },
    {
      title: "Song Title 2",
      artist: "Artist Name 2",
      url: "https://open.spotify.com/track/...",
    },
    // Add more songs
  ];

  return (
    <Layout>
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Box flex="1" textAlign="center" pr={{ md: 8 }}>
            <Heading as="h1" size="xl" mb={4}>
              About Me
            </Heading>
            <Text textAlign={"justify"}>
              Hey there! I'm a software engineer based in Indonesia, passionate
              about building digital solutions that make an impact. I love
              diving into code and crafting innovative solutions using
              technologies like Laravel, Node.js, and React.
            </Text>
            <Link as={GatsbyLink} to="/contact" mt={4}>
              Contact Me
            </Link>
          </Box>
          <Box flex="1" display={"flex"} justifyContent={"center"}>
            <Image
              src={logolight}
              alt="Profile Image"
              objectFit="cover"
              w="40%"
              h="auto"
            />
          </Box>
        </Flex>

        <VStack spacing={6} mt={8}>
          <Text fontWeight="bold">
            Fun Fact: I can solve a Rubik's Cube in under a minute!
          </Text>
          <Text fontWeight="bold">Hobby: Exploring new hiking trails.</Text>
        </VStack>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            My Top 5 Spotify Songs
          </Heading>
          {/* Add Spotify card or list here */}
          <SpotifyTopSongs songs={topSongs} />
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            My Tech Stack and Tools
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem>
              <Tooltip label="PHP" aria-label="Next.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                  height={"20%"}
                  width={"20%"}
                />
              </Tooltip>
            </GridItem>

            <GridItem>
              <Tooltip label="PHP" aria-label="Next.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  height={"20%"}
                  width={"20%"}
                />
              </Tooltip>
            </GridItem>
            <GridItem>
              <Tooltip label="PHP" aria-label="Next.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  height={"20%"}
                  width={"20%"}
                />
              </Tooltip>
            </GridItem>
            <GridItem>
              <Tooltip label="PHP" aria-label="Next.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  height={"20%"}
                  width={"20%"}
                />
              </Tooltip>
            </GridItem>
            <GridItem>
              <Tooltip label="PHP" aria-label="Next.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  height={"20%"}
                  width={"20%"}
                />
              </Tooltip>
            </GridItem>
            <GridItem>
              <Tooltip label="PHP" aria-label="Next.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  height={"20%"}
                  width={"20%"}
                />
              </Tooltip>
            </GridItem>
            {/* Add more badges */}
          </Grid>
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Experience
          </Heading>
          <List spacing={2}>
            {/* Add your work experience */}
            <ListItem>Software Engineer at Company X</ListItem>
            <ListItem>Freelance Web Developer</ListItem>
          </List>
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Education
          </Heading>
          <List spacing={2}>
            {/* Add your education details */}
            <ListItem>
              Bachelor's Degree in Computer Science, University Y
            </ListItem>
          </List>
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Achievements
          </Heading>
          <List spacing={2}>
            {/* Add your achievements */}
            <ListItem>Recipient of Web Development Excellence Award</ListItem>
          </List>
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Certificates
          </Heading>
          <List spacing={2}>
            {/* Add your certificates */}
            <ListItem>React Certification from Online Platform</ListItem>
          </List>
        </Box>

        <Box mt={8}>
          <Heading size="md" mb={4}>
            Web Blog Tech Stack
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem>
              <Badge colorScheme="purple">Gatsby</Badge>
            </GridItem>
            <GridItem>
              <Badge colorScheme="teal">Chakra UI</Badge>
            </GridItem>
            {/* Add more badges */}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
