import React from "react";
import Navbar from "../Navbar/Navbar";
import { Flex } from "@chakra-ui/react";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex
        mt={"55px"}
        direction={"column"}
        w={"full"}
        px={{ base: "5px", sm: "50px", md: "100px", lg: "150px" }}
      >
        {children}
      </Flex>
    </>
  );
};
export default Layout;
