import { SimpleGrid } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import ProjectCard from "components/Projects/ProjectCard";
import React from "react";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <CustomSection sectionName="projects" sectionTitle="Projects">
      <SimpleGrid columns={{ base: 1, xl: 2 }} gap={{ base: 5, xl: 10 }}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </CustomSection>
  );
};
export default Projects;
