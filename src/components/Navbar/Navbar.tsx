import {
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import logo from "assets/portfolio-logo.svg";

import NavLink from "./NavLink";
import MobileNavBar from "./MobileNav";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
      bg={colorMode === "dark" ? "brand.darkModeBG" : "brand.lightGrey"}
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
      <IconButton
        ml={{ base: "5px", md: "0px" }}
        variant={"ghost"}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        aria-label="toggle-mode"
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
export default Navbar;
