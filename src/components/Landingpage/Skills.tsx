import { SimpleGrid } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import TechCard from "components/Skills/TechCard";
import ChakraUI from "assets/icons/chakra-ui.png";
import Firebase from "assets/icons/firebase.png";
import NextJS from "assets/icons/nextjs.png";
import Postgres from "assets/icons/postgres.png";
import ReactJS from "assets/icons/reactjs.png";
import Typescript from "assets/icons/typescript.png";

const Skills = () => {
  const techs = [
    { techName: "ChakraUI", techLogo: ChakraUI },
    { techName: "Firebase", techLogo: Firebase },
    { techName: "NextJS", techLogo: NextJS },
    { techName: "Postgres", techLogo: Postgres },
    { techName: "ReactJS", techLogo: ReactJS },
    { techName: "Typescript", techLogo: Typescript },
  ];
  return (
    <CustomSection sectionName="skills" sectionTitle="Skills">
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={3}>
        {techs.map((tech, index) => (
          <TechCard
            key={index}
            techName={tech.techName}
            techLogo={tech.techLogo}
          />
        ))}
      </SimpleGrid>
    </CustomSection>
  );
};
export default Skills;
