import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <Box as="section" id="projects" py={{ base: 14, md: 20 }}>
      <Container maxW="6xl">
        <Text
          color="brand.400"
          fontWeight={700}
          fontSize="sm"
          letterSpacing="0.08em"
          mb={2}
        >
          What I've built
        </Text>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={10}>
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
