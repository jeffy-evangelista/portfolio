import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type SocialLinksProps = {};

const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      top={"30%"}
      left={0}
      position={"fixed"}
    >
      <Flex bg={"white"} boxSize={"60px"} align={"center"} justify={"center"}>
        <Text>logo here</Text>
      </Flex>
    </Flex>
  );
};
export default SocialLinks;
