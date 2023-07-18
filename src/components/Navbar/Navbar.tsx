import { Button, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../../../public/portfolio-logo.svg";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      align={"center"}
      px={{ sm: "10", md: "100px", lg: "150px" }}
      mx="auto"
      h={"56px"}
    >
      <Image h={"40px"} src={logo} />
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
