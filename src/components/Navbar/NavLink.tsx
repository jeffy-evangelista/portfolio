import { Button, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { Link } from "react-scroll";

type NavLinkProps = {
  to: string;
  name: string;
  onClose?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, name, onClose }) => {
  const isMdScreen = useBreakpointValue({ base: false, md: true });
  const handleClick = () => {
    if (onClose) {
      onClose();
    }
  };
  useEffect(() => {
    if (isMdScreen && onClose) {
      onClose();
    }
  }, [isMdScreen, onClose]);

  return (
    <Button
      as={Link}
      variant={"ghost"}
      fontSize={{ base: "22px", md: "16px" }}
      onClick={handleClick}
      to={to}
      spy={true}
      smooth={true}
      offset={-56}
      duration={500}
      mb={{ base: "20px", md: "0px" }}
    >
      {name}
    </Button>
  );
};
export default NavLink;
