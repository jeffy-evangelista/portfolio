import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  IconButton,
  Flex,
  Spacer,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";

type MobileNavBarProps = {
  NavLinks: { name: string; href: string }[];
};

const MobileNavBar: React.FC<MobileNavBarProps> = ({ NavLinks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      {" "}
      <IconButton
        display={{ base: "block", md: "none" }}
        variant={"outline"}
        icon={<HamburgerIcon />}
        aria-label="menu-button"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        blockScrollOnMount={true}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex w={"full"} p={"10px"}>
            <Spacer />
            <ModalCloseButton display={"block"} position={"relative"} m={0} />
          </Flex>

          <DrawerBody>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              h={"100%"}
            >
              {NavLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.href}
                  name={link.name}
                  onClose={onClose}
                />
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileNavBar;
