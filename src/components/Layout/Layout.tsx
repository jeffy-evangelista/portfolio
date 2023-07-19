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
        direction={"column"}
        w={"full"}
        px={{ sm: "10", md: "100px", lg: "150px" }}
      >
        {children}
      </Flex>
    </>
  );
};
export default Layout;
