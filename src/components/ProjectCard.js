import React from 'react';
import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react';

const ProjectCard = ({ name, description, url, language }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} shadow="md">
      <Heading as="h3" size="md" mb={2}>
        {name}
      </Heading>
      <Text color="gray.600" fontSize="sm" mb={2}>
        {description}
      </Text>
      <Flex alignItems="center" mt={2}>
        <Text fontSize="sm" fontWeight="semibold" color="blue.500">
          Language: {language}
        </Text>
        <Link ml="auto" color="blue.500" href={url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectCard;