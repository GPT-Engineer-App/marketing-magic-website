import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import TopMenu from "../components/TopMenu";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <TopMenu />
      {/* Hero Section */}
      <Flex bg="blue.600" color="white" minHeight="70vh" direction="column" align="center" justify="center" textAlign="center" p={10} bgImage="url('https://images.unsplash.com/photo-1581320541782-6e8b2f6b2b71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" bgSize="cover" bgPosition="center">
        <Heading as="h1" size="2xl" fontWeight="bold">
          Elevate Your Brand
        </Heading>
        <Text fontSize="xl" mt={4} maxWidth="600px">
          We are committed to pushing the boundaries of digital marketing and delivering impactful results to our clients.
        </Text>
        <Button mt={10} size="lg" colorScheme="orange" rightIcon={<FaEnvelope />}>
          Contact Us
        </Button>
      </Flex>

      {/* Services Section */}
      <VStack spacing={8} py={10} px={5} align="center">
        <Heading as="h2" size="xl">
          Our Services
        </Heading>
        <HStack spacing={10} align="start">
          <VStack maxW="300px" textAlign="center">
            <Icon as={FaMapMarkerAlt} w={10} h={10} color="blue.500" />
            <Text fontWeight="bold">Strategy & Planning</Text>
            <Text>Comprehensive, data-driven planning to ensure your marketing success.</Text>
          </VStack>
          <VStack maxW="300px" textAlign="center">
            <Icon as={FaPhone} w={10} h={10} color="green.500" />
            <Text fontWeight="bold">Digital Marketing</Text>
            <Text>SEO, PPC, social media, and more to boost your online presence.</Text>
          </VStack>
          <VStack maxW="300px" textAlign="center">
            <Icon as={FaEnvelope} w={10} h={10} color="red.500" />
            <Text fontWeight="bold">Creative Design</Text>
            <Text>Eye-catching designs that resonate with your target audience.</Text>
          </VStack>
        </HStack>
      </VStack>

      {/* About Us Section */}
      <Flex bg="gray.100" p={10} align="center" justify="center" direction="column">
        <Heading as="h3" size="lg">
          About Us
        </Heading>
        <Text fontSize="md" mt={4} maxWidth="600px" textAlign="center">
          With over a decade of experience, we have helped brands achieve their business outcomes. We believe in creating lasting relationships with our clients.
        </Text>
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtfGVufDB8fHx8MTcxNDMwNzY3Mnww&ixlib=rb-4.0.3&q=80&w=1080" mt={4} borderRadius="md" />
      </Flex>

      {/* Footer */}
      <Box bg="blue.800" color="white" p={5}>
        <Flex justify="space-between" align="center" wrap="wrap">
          <Text>&copy; {new Date().getFullYear()} Your Marketing Company</Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaFacebookF} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedinIn} />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
