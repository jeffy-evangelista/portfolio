import { Flex, Image, Stack, Text, Button } from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import ProfilePicture from "assets/profile.jpg";

function Hero() {
  return (
    <CustomSection sectionName="hero">
      <Flex
        maxW={"1000px"}
        alignItems={"center"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          direction={"column"}
          mr={{ base: "0", md: "30px" }}
          pb={{ base: "20px", md: "0px" }}
        >
          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize={"16px"}
            color={"teal"}
          >
            Hello, I am
          </Text>
          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "30px", sm: "38px", md: "40px", lg: "72px" }}
            fontWeight={"bold"}
            color={"brand.darkGrey"}
          >
            Jeffy Evangelista
          </Text>
          <Text
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "24px", sm: "25px", md: "34px", lg: "48px" }}
            fontWeight={"bold"}
            color={"rgba(88, 89, 91, 0.5)"}
          >
            Web Developer
          </Text>
          <Text
            px={{ base: "25px", sm: "50px", md: "0px" }}
            fontSize={{ base: "14px", md: "16px" }}
            mb={"30px"}
          >
            Driven by thirst for learning and passion for coding. I am a web
            developer who loves to create beautiful and functional websites.
          </Text>
          <Stack
            justify={{ base: "center", md: "start" }}
            direction="row"
            gap={5}
          >
            <Button>Let's Work Together </Button>
            <Button variant={"outline"}>Explore Projects </Button>
          </Stack>
        </Flex>
        <Image
          borderRadius={"full"}
          boxSize={{ base: "230px", md: "250px", lg: "300px" }}
          alt="cover-photo"
          src={ProfilePicture}
        />
      </Flex>
    </CustomSection>
  );
}

export default Hero;
