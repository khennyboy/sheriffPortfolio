import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FiMessageSquare, FiMail } from "react-icons/fi";
import { useColorMode } from "./ui/color-mode";

const EMAIL = "abdullateefkehinde848@gmail.com";

export default function Contact() {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }}>
      <Container maxW="3xl" textAlign="center">
        <Text
          color="brand.400"
          fontWeight={700}
          fontSize="sm"
          letterSpacing="0.08em"
          mb={2}
        >
          Get in touch
        </Text>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
          Contact
        </Heading>
        <Text
          color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
          fontSize={{ base: "md", md: "lg" }}
          mb={10}
        >
          I'd love to hear about your project and how I could help.
        </Text>

        <Flex justify="center" mb={8}>
          <Flex
            align="center"
            justify="center"
            w="72px"
            h="72px"
            borderRadius="full"
            bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
          >
            <Icon as={FiMail} boxSize={7} color="brand.400" />
          </Flex>
        </Flex>

        <Button
          as="a"
          href={`mailto:${EMAIL}`}
          rightIcon={<FiMessageSquare />}
          size="lg"
        >
          Contact me
        </Button>

        <Text
          mt={5}
          fontSize="sm"
          color={colorMode === "dark" ? "whiteAlpha.500" : "gray.500"}
        >
          {EMAIL}
        </Text>
      </Container>
    </Box>
  );
}
