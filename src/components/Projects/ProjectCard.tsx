import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
    <motion.a whileHover={{ scale: 1.1 }}>
      {" "}
      <Box
        h={"400px"}
        w={"500px"}
        bg={"white"}
        boxShadow={"md"}
        borderRadius={"10px"}
      ></Box>
    </motion.a>
  );
};
export default ProjectCard;
