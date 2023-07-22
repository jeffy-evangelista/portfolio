import {
  Flex,
  Image,
  Stack,
  Text,
  Button,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import CustomSection from "components/CustomSection";
import ProfilePicture from "assets/profile.jpg";
import { Link } from "react-scroll";

function Hero() {
  const { colorMode } = useColorMode();
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
            color={colorMode === "dark" ? "teal.200" : "teal"}
          >
            Hello, I am
          </Text>
          <Heading
            lineHeight={"0.9"}
            as={"h1"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "30px", sm: "38px", md: "40px", lg: "72px" }}
            color={colorMode === "dark" ? "gray.100" : "gray.600"}
          >
            Jeffy Evangelista
          </Heading>
          <Heading
            as={"h2"}
            variant={"heading"}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: "24px", sm: "25px", md: "34px", lg: "48px" }}
            color={colorMode === "dark" ? "gray.200" : "gray.500"}
          >
            Web Developer
          </Heading>
          <Text
            px={{ base: "25px", sm: "50px", md: "0px" }}
            fontSize={{ base: "14px", md: "16px" }}
            mb={"30px"}
            textAlign={{ base: "unset", md: "start" }}
          >
            Driven by thirst for learning and passion for coding. I am a web
            developer who loves to create beautiful and functional websites.
          </Text>
          <Stack
            justify={{ base: "center", md: "start" }}
            direction="row"
            gap={5}
          >
            <Button
              as={Link}
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
            >
              Let's Work Together{" "}
            </Button>
            <Button
              as={Link}
              to={"projects"}
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
              variant={"outline"}
            >
              Explore Projects{" "}
            </Button>
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
