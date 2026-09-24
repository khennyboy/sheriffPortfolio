import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  VStack,
  IconButton,
  Link,
  Separator,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";
import { useColorMode } from "./ui/color-mode";

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/", label: "X" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
];

const quickLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const muted = isDark ? "whiteAlpha.700" : "gray.600";
  const faint = isDark ? "whiteAlpha.500" : "gray.500";

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor={isDark ? "whiteAlpha.100" : "blackAlpha.100"}
      pt={12}
      pb={6}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={10}
          mb={10}
        >
          {/* Brand + blurb */}
          <VStack
            align={{ base: "center", md: "flex-start" }}
            gap={3}
            textAlign={{ base: "center", md: "left" }}
            maxW="sm"
          >
            <Text fontFamily="heading" fontWeight={700} fontSize="xl">
              Sheriff
              <Text as="span" color="brand.400">
                .
              </Text>
            </Text>
            <Text fontSize="sm" color={muted}>
              Frontend developer building fast, responsive interfaces with
              React, Next.js, and TypeScript.
            </Text>
            <HStack gap={2}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  as="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  variant="ghost"
                  size="sm"
                  fontSize="16px"
                  color={muted}
                  _hover={{ color: "brand.400", bg: "transparent" }}
                >
                  <s.icon />
                </IconButton>
              ))}
            </HStack>
          </VStack>

          {/* Quick links */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Text fontWeight={600} fontSize="sm">
              Quick links
            </Text>
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                fontSize="sm"
                color={muted}
                _hover={{ color: "brand.400" }}
              >
                {l.label}
              </Link>
            ))}
          </VStack>

          {/* Contact */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Text fontWeight={600} fontSize="sm">
              Get in touch
            </Text>
            <Link
              href="mailto:your@email.com"
              fontSize="sm"
              color={muted}
              _hover={{ color: "brand.400" }}
            >
              your@email.com
            </Link>
            <Link
              href="/Sheriff_Abdullateef_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="sm"
              color={muted}
              _hover={{ color: "brand.400" }}
            >
              Download resume
            </Link>
          </VStack>
        </Flex>

        <Separator borderColor={isDark ? "whiteAlpha.100" : "blackAlpha.100"} />

        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
          gap={3}
          pt={6}
        >
          <Text fontSize="xs" color={faint} textAlign="center">
            © {new Date().getFullYear()} Sheriff Abdullateef. Built with React
            &amp; Chakra UI.
          </Text>

          <IconButton
            as="a"
            href="#top"
            aria-label="Back to top"
            variant="ghost"
            size="sm"
            color={muted}
            _hover={{ color: "brand.400", bg: "transparent" }}
          >
            <FiArrowUp />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
}
