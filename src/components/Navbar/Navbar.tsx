import { Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "assets/portfolio-logo.svg";

import NavLink from "./NavLink";
import MobileNavBar from "./MobileNav";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const NavLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];
  return (
    <Flex
      w={"full"}
      zIndex={"3"}
      top={0}
      position={"fixed"}
      bg={"brand.lightGrey"}
      align={"center"}
      px={{ base: "5px", sm: "50px", md: "100px", lg: "150px" }}
      mx="auto"
      h={"56px"}
    >
      <Image h={"40px"} src={logo} />
      <Spacer />

      <HStack
        spacing={{ base: "0px", lg: "30px" }}
        display={{ base: "none", md: "block" }}
      >
        {NavLinks.map((link, index) => (
          <NavLink key={index} to={link.href} name={link.name} />
        ))}
      </HStack>
      <MobileNavBar NavLinks={NavLinks} />
    </Flex>
  );
};
export default Navbar;
