import { Flex, Image, Text } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import ProfilePicture from "assets/profile.jpg";
function Hero() {
  return (
    <CustomSection sectionName="hero">
      <Flex
        alignItems={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          direction={"column"}
          mr={{ base: "0", md: "70px" }}
          pb={{ base: "20px", md: "0px" }}
        >
          <Text fontSize={"16px"} color={"teal"}>
            Hello, I am
          </Text>
          <Text
            fontSize={{ base: "30px", sm: "38px", md: "48px", lg: "72px" }}
            fontWeight={"bold"}
            color={"brand.darkGrey"}
          >
            Jeffy Evangelista
          </Text>
          <Text
            fontSize={{ base: "24px", sm: "28px", md: "38px", lg: "48px" }}
            fontWeight={"bold"}
            color={"rgba(88, 89, 91, 0.5)"}
          >
            Web Developer
          </Text>
        </Flex>
        <Image
          borderRadius={"full"}
          boxSize={{ base: "270px", md: "300px", lg: "330px" }}
          alt="cover-photo"
          src={ProfilePicture}
        />
      </Flex>
    </CustomSection>
  );
}

export default Hero;
