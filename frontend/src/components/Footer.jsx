import { Box, Container, Flex, Text, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/", label: "X" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
];

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
      py={8}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Text fontFamily="heading" fontWeight={700}>
            Sheriff<Text as="span" color="brand.400">.</Text>
          </Text>

          <HStack spacing={4}>
            {socials.map((s) => (
              <IconButton
                key={s.label}
                as="a"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                icon={<s.icon />}
                variant="ghost"
                size="sm"
                fontSize="16px"
                color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
                _hover={{ color: "brand.400", bg: "transparent" }}
              />
            ))}
          </HStack>

          <Text fontSize="sm" color={colorMode === "dark" ? "whiteAlpha.500" : "gray.500"}>
            © {new Date().getFullYear()} Sheriff Abdullateef
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
