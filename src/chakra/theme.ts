import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  Fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      lightGrey: "#F2F0EE",
      darkGrey: "#58595B",
      teal: "#008080",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#F2F0EE",
      },
    },
  },
});
export default theme;
