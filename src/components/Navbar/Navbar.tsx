import {
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../../public/portfolio-logo.svg";
type NavbarProps = {};
import { HamburgerIcon } from "@chakra-ui/icons";
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      zIndex={"2"}
      top={0}
      position={"sticky"}
      bg={"brand.lightGrey"}
      align={"center"}
      px={{ base: "5", sm: "50px", md: "100px", lg: "150px" }}
      mx="auto"
      h={"56px"}
    >
      <Image h={"40px"} src={logo} />
      <Spacer />

      <IconButton
        display={{ base: "block", md: "none" }}
        variant={"outline"}
        aria-label="menu-button"
        icon={<HamburgerIcon />}
      />
      <HStack
        spacing={{ base: "0px", lg: "30px" }}
        display={{ base: "none", md: "block" }}
      >
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
