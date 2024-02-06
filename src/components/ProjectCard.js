import React from "react";
import { Box, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";

const ProjectCard = ({
  name,
  description,
  url,
  language,
  articleLink,
  demoLink,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} shadow="md">
      <Box>
        <Heading as="h3" size="md" mb={2}>
          {name}
        </Heading>
        <Text color="gray.600" fontSize="sm" mb={2}>
          {description}
        </Text>
      </Box>
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mt={2}
          flexWrap={"wrap"}
        >
          <Text fontSize="sm" fontWeight="semibold" color="blue.500">
            Language: {language}
          </Text>
          <Flex mt={4}>
            <Link
              color="blue.500"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                Github
              </Button>
            </Link>
            {articleLink && (
              <Link
                color="blue.500"
                href={articleLink}
                target="_blank"
                rel="noopener noreferrer"
                ml={2}
              >
                <Button variant="outline" size="sm">
                  Article
                </Button>
              </Link>
            )}
            {demoLink && (
              <Link
                color="blue.500"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                ml={2}
              >
                <Button variant="outline" size="sm">
                  Demo
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCard;
