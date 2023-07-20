import React from "react";
import { motion } from "framer-motion";
import {
  Text,
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";
type ProjectCardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  sourceLink: string;
  demoLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  cardDescription,
  cardImage,
  cardTitle,
  sourceLink,
  demoLink,
}) => {
  return (
    <motion.a whileHover={{ scale: 1.08, zIndex: 2 }}>
      <Card maxW={"400px"} p={"5px"}>
        <CardBody flexDirection={"column"}>
          <Box
            flex={{ base: "0 0 auto", md: "1" }}
            position="relative"
            pb="56.25%"
          >
            {/* Image */}
            <Center>
              <Image
                border={"1px solid"}
                borderColor={"brand.lightGrey"}
                src={cardImage}
                alt="Card Image"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                rounded="md"
              />
            </Center>
          </Box>
          <Box flex="1">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {cardTitle}
            </Text>
            <Text mb={4}>{cardDescription}</Text>
          </Box>
          <Flex justifyContent="flex-end" alignItems="center">
            <Box mr={2}>
              <Button
                colorScheme="teal"
                variant={"outline"}
                onClick={() => window.open(sourceLink, "_blank")}
              >
                Source Code
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => window.open(demoLink, "_blank")}
                colorScheme="teal"
              >
                Demo
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </motion.a>
  );
};
export default ProjectCard;
