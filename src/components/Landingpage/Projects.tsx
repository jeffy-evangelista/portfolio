import { SimpleGrid } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import ProjectCard from "components/Projects/ProjectCard";
import React from "react";
import PerfilRemasterd from "assets/projects/perfil-remastered.png";
type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const projects = [
    {
      title: "Perfil Remastered",
      description:
        "Perfil is a web app that allows users to create a profile and share their social media links. It is built with React, Chakra UI, and Firebase. It is a full stack application that uses Firebase for authentication and database.",
      image: PerfilRemasterd,
      sourceLink: "https://github.com/jeffigy/perfil-remastered",
      demoLink: "https://perfil-remastered.vercel.app/",
    },
    {
      title: "Perfil Remastered",
      description:
        "Perfil is a web app that allows users to create a profile and share their social media links. It is built with React, Chakra UI, and Firebase. It is a full stack application that uses Firebase for authentication and database.",
      image: PerfilRemasterd,
      sourceLink: "https://github.com/jeffigy/perfil-remastered",
      demoLink: "https://perfil-remastered.vercel.app/",
    },
    {
      title: "Perfil Remastered",
      description:
        "Perfil is a web app that allows users to create a profile and share their social media links. It is built with React, Chakra UI, and Firebase. It is a full stack application that uses Firebase for authentication and database.",
      image: PerfilRemasterd,
      sourceLink: "https://github.com/jeffigy/perfil-remastered",
      demoLink: "https://perfil-remastered.vercel.app/",
    },
    {
      title: "Perfil Remastered",
      description:
        "Perfil is a web app that allows users to create a profile and share their social media links. It is built with React, Chakra UI, and Firebase. It is a full stack application that uses Firebase for authentication and database.",
      image: PerfilRemasterd,
      sourceLink: "https://github.com/jeffigy/perfil-remastered",
      demoLink: "https://perfil-remastered.vercel.app/",
    },
    {
      title: "Perfil Remastered",
      description:
        "Perfil is a web app that allows users to create a profile and share their social media links. It is built with React, Chakra UI, and Firebase. It is a full stack application that uses Firebase for authentication and database.",
      image: PerfilRemasterd,
      sourceLink: "https://github.com/jeffigy/perfil-remastered",
      demoLink: "https://perfil-remastered.vercel.app/",
    },
    {
      title: "Perfil Remastered",
      description:
        "Perfil is a web app that allows users to create a profile and share their social media links. It is built with React, Chakra UI, and Firebase. It is a full stack application that uses Firebase for authentication and database.",
      image: PerfilRemasterd,
      sourceLink: "https://github.com/jeffigy/perfil-remastered",
      demoLink: "https://perfil-remastered.vercel.app/",
    },
  ];
  return (
    <CustomSection sectionName="projects" sectionTitle="Projects">
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={5}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            cardTitle={project.title}
            cardDescription={project.description}
            cardImage={project.image}
            sourceLink={project.sourceLink}
            demoLink={project.demoLink}
          />
        ))}
      </SimpleGrid>
    </CustomSection>
  );
};
export default Projects;
