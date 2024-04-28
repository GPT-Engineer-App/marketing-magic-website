import { Flex, Link, Box, Text } from "@chakra-ui/react";

const TopMenu = () => {
  return (
    <Flex as="nav" bg="blue.800" color="white" p={3} justifyContent="space-between" alignItems="center">
      <Box p="2">
        <Text fontSize="lg" fontWeight="bold">
          Your Marketing Company
        </Text>
      </Box>
      <Box>
        <Link p="2" href="#services" mr="4">
          Services
        </Link>
        <Link p="2" href="#about">
          About
        </Link>
      </Box>
    </Flex>
  );
};

export default TopMenu;
