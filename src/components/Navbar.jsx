import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="space-between">
      <Box>
        <Link href="/" display="flex" alignItems="center">
          <FaHome />
          <Text marginLeft="2">Home</Text>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;