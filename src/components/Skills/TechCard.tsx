import { Card, Flex } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
type TechCardProps = {
  techName: string;
  techLogo?: string;
};

const TechCard: React.FC<TechCardProps> = ({ techName, techLogo }) => {
  return (
    <motion.a whileHover={{ scale: 1.1 }}>
      <Card boxSize={"160px"} justify={"center"} align={"center"}>
        <Flex direction={"column"} align={"center"}>
          <motion.div
            style={{ width: "100px", height: "100px" }}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={techLogo}
              alt="Tech Logo"
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>
          <motion.p whileHover={{ scale: 1.2 }}>{techName}</motion.p>
        </Flex>
      </Card>
    </motion.a>
  );
};
export default TechCard;
