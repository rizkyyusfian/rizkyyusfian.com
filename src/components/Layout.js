import * as React from 'react'
import Header from './Header'
import { Box, ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import { theme } from '../@chakra-ui/gatsby-plugin/theme'

const Layout = ({ children }) => {
  return (
    <Box>
      <Box border="1px solid white">
        <Header />
      </Box>
      <Box border="1px solid white">
        {children}
      </Box>
    </Box>
  )
}

export default Layout