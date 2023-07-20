import { Box, Flex, Stack } from "@chakra-ui/react";
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
      <Stack>
        <Box boxSize={"60px"} bg={"white"}>
          logo here
        </Box>
        <Box boxSize={"60px"} bg={"white"}>
          logo here
        </Box>
        <Box boxSize={"60px"} bg={"white"}>
          logo here
        </Box>
        <Box boxSize={"60px"} bg={"white"}>
          logo here
        </Box>
      </Stack>
    </Flex>
  );
};
export default SocialLinks;
