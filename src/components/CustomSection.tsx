import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

type CustomSectionProps = {
  sectionTitle: string;
  sectionName: string;
  children: React.ReactNode;
};

const CustomSection: React.FC<CustomSectionProps> = ({
  sectionTitle,
  sectionName,
  children,
}) => {
  return (
    <div id={sectionName}>
      <Flex
        direction={"column"}
        align={"center"}
        border={"1px solid red"}
        minH={"100vh"}
      >
        <Text color={"brand.darkGrey"} fontSize={"48px"} fontWeight={"bold"}>
          {sectionTitle}
        </Text>
        <Flex
          align={"center"}
          justify={"center"}
          w={"full"}
          flexGrow={1}
          border={"1px solid blue"}
        >
          <VStack spacing={10}>{children}</VStack>
        </Flex>
      </Flex>
    </div>
  );
};
export default CustomSection;
