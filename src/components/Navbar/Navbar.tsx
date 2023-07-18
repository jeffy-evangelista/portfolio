import { Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      align={"center"}
      px={{ sm: "10", md: "100px", lg: "150px" }}
      mx="auto"
      h={"56px"}
      // borderBottom="1px"
    >
      <Image h={"40px"} src="../../../public/portfolio-logo.svg" />
      <Spacer />
      <HStack spacing={{ sm: "5px", md: "20px", lg: "30px" }}>
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>About</Button>
        <Button variant={"ghost"}>Tools</Button>
        <Button variant={"ghost"}>Projects</Button>
        <Button variant={"ghost"}>Contact</Button>
      </HStack>
    </Flex>
  );
};
export default Navbar;
