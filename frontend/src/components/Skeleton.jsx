import {
  Box,
  Card,
  Skeleton,
  SkeletonText,
  SimpleGrid,
  HStack,
  Stack,
} from "@chakra-ui/react";

export function ProjectCardSkeleton() {
  return (
    <Card.Root variant="outline" borderRadius="xl" overflow="hidden">
      <Card.Body p={4}>
        <Skeleton height="176px" borderRadius="lg" mb={4} />

        <Stack gap={3}>
          <Skeleton height="20px" width="40%" borderRadius="md" />

          <SkeletonText noOfLines={3} gap="2" skeletonHeight="14px" />

          <HStack gap={2} pt={2}>
            <Skeleton height="24px" width="60px" borderRadius="full" />
            <Skeleton height="24px" width="80px" borderRadius="full" />
            <Skeleton height="24px" width="70px" borderRadius="full" />
          </HStack>
        </Stack>
      </Card.Body>

      <Card.Footer p={4} pt={0}>
        <SimpleGrid columns={2} gap={3} width="100%">
          <Skeleton height="40px" borderRadius="md" />
          <Skeleton height="40px" borderRadius="md" />
        </SimpleGrid>
      </Card.Footer>
    </Card.Root>
  );
}