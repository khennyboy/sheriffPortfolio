import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import useGetProjects from "../services/getProject";
import projects from "../data/projects";

const ProjectsContent = () => {
  const { data, isPending, error, isError } = useGetProjects();
  console.log(data);
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectsContent;
