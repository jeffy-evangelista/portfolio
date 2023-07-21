import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

type CustomSectionProps = {
  sectionTitle?: string;
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
        minH={"calc(100vh - 56px)"}
        mb={{ base: "50px", md: "100px" }}
      >
        {sectionTitle ? (
          <Text
            color={"brand.darkGrey"}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={"semibold"}
            mb={{ base: "50px", md: "100px" }}
          >
            {sectionTitle}
          </Text>
        ) : null}
        <Flex align={"center"} justify={"center"} w={"full"} flexGrow={1}>
          <VStack spacing={10}>{children}</VStack>
        </Flex>
      </Flex>
    </div>
  );
};
export default CustomSection;
