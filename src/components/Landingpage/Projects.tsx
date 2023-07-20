import { SimpleGrid } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import ProjectCard from "components/Projects/ProjectCard";
import React from "react";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <CustomSection sectionName="projects" sectionTitle="Projects">
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={10}>
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </CustomSection>
  );
};
export default Projects;
