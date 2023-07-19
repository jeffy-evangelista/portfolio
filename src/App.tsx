import Layout from "./components/Layout/Layout";
import Landingpage from "./pages/Landingpage";
function App() {
  // const screenWidth = useBreakpointValue({
  //   base: "base",
  //   sm: "sm",
  //   md: "md",
  //   lg: "lg",
  //   xl: "xl",
  // });
  return (
    <Layout>
      <Landingpage />
    </Layout>
  );
}

export default App;
