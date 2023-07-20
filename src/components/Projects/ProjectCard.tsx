import React from "react";
import { motion } from "framer-motion";
import { Text, Box, Button, Flex } from "@chakra-ui/react";
type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
    <motion.a whileHover={{ scale: 1.1 }}>
      {" "}
      <Box
        maxWidth="400px"
        width="100%"
        boxShadow="md"
        rounded="lg"
        p={4}
        bg="white"
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="1">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Card Title
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              finibus ex eget arcu blandit laoreet.
            </Text>
          </Box>
          <Box
            display={{ base: "block", md: "flex" }}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Box mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }}>
              <Button colorScheme="blue">Action 1</Button>
            </Box>
            <Box>
              <Button colorScheme="green">Action 2</Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </motion.a>
  );
};
export default ProjectCard;
