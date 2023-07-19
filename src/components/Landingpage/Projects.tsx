import { Box, HStack } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import React from "react";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <CustomSection sectionName="projects" sectionTitle="Projects">
      <HStack spacing={"10px"}>
        <Box
          h={"350px"}
          w={"270px"}
          bg={"white"}
          boxShadow={"md"}
          borderRadius={"10px"}
        ></Box>
        <Box
          h={"350px"}
          w={"270px"}
          bg={"white"}
          boxShadow={"md"}
          borderRadius={"10px"}
        ></Box>
      </HStack>
    </CustomSection>
  );
};
export default Projects;
