import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { FiDownload, FiMessageSquare } from "react-icons/fi";

export default function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" id="top" pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 8 }}
        >
          <Box flex="1.1" textAlign={{ base: "center", md: "left" }}>
            <Text
              color="brand.400"
              fontWeight={700}
              fontSize="sm"
              letterSpacing="0.08em"
              mb={3}
            >
              Frontend Engineer
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              lineHeight={1.1}
              mb={5}
            >
              Hi, I'm{" "}
              <Text as="span" color="brand.400">
                Sheriff Abdullateef
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
              maxW="520px"
              mx={{ base: "auto", md: 0 }}
              mb={8}
            >
              Frontend Engineer specializing in React, Next.js, and TypeScript.
              I build clean, high-performance interfaces and ship them
              end-to-end — from component to production.
            </Text>
            <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
              <Button
                as="a"
                href="/resume.pdf"
                download
                rightIcon={<FiDownload />}
                size="lg"
              >
                Resume
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="outline"
                rightIcon={<FiMessageSquare />}
                size="lg"
              >
                Contact me
              </Button>
            </HStack>
          </Box>

          <Box flexShrink={0}>
            <Box
              w={{ base: "220px", md: "300px" }}
              h={{ base: "220px", md: "300px" }}
              borderRadius="full"
              bgGradient="linear(to-br, brand.400, brand.700)"
              p="4px"
            >
              <Box
                w="100%"
                h="100%"
                borderRadius="full"
                overflow="hidden"
                bg={colorMode === "dark" ? "surface.darkCard" : "surface.lightAlt"}
              >
                {/* Replace with your own photo at src/assets/profile.jpg */}
                <Box
                  as="img"
                  src="/profile.jpg"
                  alt="Sheriff Abdullateef"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
