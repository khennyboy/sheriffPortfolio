import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import ProjectsSuspense from "./ProjectsContent.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Errorfallback.jsx";

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Text>Loading projects…</Text>}>
            <ProjectsSuspense />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
