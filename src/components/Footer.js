import React from 'react';
import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Flex justifyContent="space-between">
          <Text>© 2023 Rizky Yusfian. All rights reserved.</Text>
          <Flex>
            <Link mx={2} href='https://www.gatsbyjs.com/' isExternal>Gatsby</Link>
            <Link mx={2} href='https://www.netlify.com/' isExternal>Netlify</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;