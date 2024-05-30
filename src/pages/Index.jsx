import { Container, Text, VStack, Heading, Box, Button, Image, IconButton, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4} bg="pink.50" color="gray.800">
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center" py={10} bg="pink.100" borderRadius="md">
          <Heading as="h1" size="2xl" color="purple.700">
            Tartts Hair
          </Heading>
          <Text fontSize="xl" mt={4}>
            Wigs for Everyone
          </Text>
          <Text fontSize="md" mt={2}>
            All types of hair and colors at a reasonable price
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" color="purple.600" mb={4}>
            Our Collection
          </Heading>
          <HStack spacing={4} justify="center">
            <Box boxSize="200px" bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1535911974356-3748cdc9d2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9uZGUlMjB3aWd8ZW58MHx8fHwxNzE3MDUzMjAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blonde Wig" />
              <Text textAlign="center" mt={2}>
                Blonde Wig
              </Text>
            </Box>
            <Box boxSize="200px" bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1481475287693-8dfac615ed88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicnVuZXR0ZSUyMHdpZ3xlbnwwfHx8fDE3MTcwNTMyMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Brunette Wig" />
              <Text textAlign="center" mt={2}>
                Brunette Wig
              </Text>
            </Box>
            <Box boxSize="200px" bg="white" borderRadius="md" overflow="hidden" boxShadow="md">
              <Image src="https://images.unsplash.com/photo-1635594824570-47c9e38095eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjB3aWd8ZW58MHx8fHwxNzE3MDUzMjAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Red Wig" />
              <Text textAlign="center" mt={2}>
                Red Wig
              </Text>
            </Box>
          </HStack>
        </Box>

        <Box textAlign="center" py={10} bg="pink.100" borderRadius="md">
          <Heading as="h2" size="lg" color="purple.600">
            Contact Us
          </Heading>
          <Text fontSize="md" mt={2}>
            We'd love to hear from you!
          </Text>
          <Button mt={4} colorScheme="purple" size="lg">
            Get in Touch
          </Button>
        </Box>

        <Box textAlign="center" py={4} bg="pink.200" borderRadius="md">
          <Text fontSize="sm">Follow us on social media</Text>
          <HStack spacing={4} justify="center" mt={2}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
