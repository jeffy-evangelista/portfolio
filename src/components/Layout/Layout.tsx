import React from "react";
import Navbar from "../Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
import SocialLinks from "components/SocialLinks/SocialLinks";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <Flex
        mt={"55px"}
        direction={"column"}
        w={"full"}
        px={{ base: "5px", md: "100px", lg: "150px" }}
      >
        {children}
      </Flex>
    </>
  );
};
export default Layout;
