import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  useColorMode,
  Link,
  Container,
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/", label: "X" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={20}
      bg={colorMode === "dark" ? "rgba(10,15,30,0.75)" : "rgba(255,255,255,0.8)"}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
    >
      <Container maxW="6xl" py={4}>
        <Flex align="center" justify="space-between">
          <Link href="#top" _hover={{ textDecoration: "none" }}>
            <Text fontFamily="heading" fontWeight={700} fontSize="xl">
              Sheriff<Text as="span" color="brand.400">.</Text>
            </Text>
          </Link>

          <HStack spacing={{ base: 2, md: 4 }}>
            <HStack spacing={3} display={{ base: "none", sm: "flex" }}>
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
                  fontSize="18px"
                  color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
                  _hover={{ color: "brand.400", bg: "transparent" }}
                />
              ))}
            </HStack>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              variant="outline"
              size="sm"
              borderRadius="full"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
