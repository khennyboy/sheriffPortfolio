import {
  Box,
  Heading,
  Text,
  HStack,
  Wrap,
  WrapItem,
  Tag,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const { colorMode } = useColorMode();
  const cardBg = colorMode === "dark" ? "surface.darkCard" : "white";
  const border = colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100";

  return (
    <Box
      display="flex"
      flexDirection="column"
      bg={cardBg}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      overflow="hidden"
      transition="transform 0.18s ease, box-shadow 0.18s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
      }}
    >
      <Box h="160px" bgGradient={project.gradient} position="relative">
        {project.featured && (
          <Tag.Root
            position="absolute"
            top={3}
            left={3}
            bg="brand.500"
            color="white"
            fontWeight={600}
            fontSize="xs"
          >
            <Tag.Label>Latest build</Tag.Label>
          </Tag.Root>
        )}
        <Flex h="100%" align="flex-end" p={5}>
          <Heading as="h3" fontSize="xl" color="white">
            {project.title}
          </Heading>
        </Flex>
      </Box>

      <Box p={5} flex={1} display="flex" flexDirection="column" gap={2}>
        <Text fontSize="sm" fontWeight={600} color="brand.400">
          {project.tagline}
        </Text>
        <Text
          fontSize="sm"
          color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
        >
          {project.description}
        </Text>

        <Wrap spacing={2}>
          {project.stack?.map((s) => (
            <WrapItem key={s}>
              <Tag.Root
                size="sm"
                borderRadius="full"
                variant="subtle"
                bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
              >
                <Tag.Label>{s}</Tag.Label>
              </Tag.Root>
            </WrapItem>
          ))}
        </Wrap>

        <HStack spacing={3} flex={1} alignItems="flex-end" mt={2}>
          <Button
            as="a"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            flex={1}
          >
            <FiGithub />
            Code
          </Button>
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            flex={1}
          >
            <FiExternalLink />
            Live
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
