import { Text } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import React from "react";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <CustomSection sectionName="skills" sectionTitle="Skills">
      <Text> this is the skills page</Text>
    </CustomSection>
  );
};
export default Skills;
