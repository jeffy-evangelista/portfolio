import { Button, Text, useBreakpointValue } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";

function App() {
  const sreenWidth = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  return (
    <Layout>
      <Button colorScheme="blue">Button</Button>
      <Text>{sreenWidth}</Text>
    </Layout>
  );
}

export default App;
