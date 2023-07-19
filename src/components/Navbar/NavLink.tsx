import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

type NavLinkProps = {
  to: string;
  name: string;
};

const NavLink: React.FC<NavLinkProps> = ({ to, name }) => {
  return (
    <Button variant={"ghost"}>
      {" "}
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-56}
        duration={500}
      >
        {name}
      </Link>
    </Button>
  );
};
export default NavLink;
