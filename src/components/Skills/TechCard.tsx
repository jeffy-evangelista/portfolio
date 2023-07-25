import { Card, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
type TechCardProps = {
  techName: string;
  techLogo?: string;
};

const TechCard: React.FC<TechCardProps> = ({ techName, techLogo }) => {
  return (
    <motion.a whileHover={{ scale: 1.1 }}>
      <Card
        boxSize="160px"
        justify="center"
        align="center"
        sx={{
          "@media screen and (max-width: 768px)": {
            boxSize: "120px",
          },
        }}
      >
        <Flex direction="column" align="center">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image
              src={techLogo}
              alt="Tech Logo"
              w={{ base: "65px", md: "100px" }}
              h={{ base: "65px", md: "100px" }}
            />
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }}>{techName}</motion.p>
        </Flex>
      </Card>
    </motion.a>
  );
};
export default TechCard;
