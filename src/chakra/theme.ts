import { extendTheme } from "@chakra-ui/react";
import { ButtonTheme } from "./Button";
import { InputTheme } from "./InputTheme";

const theme = extendTheme({
  components: {
    Button: ButtonTheme,
    Input: InputTheme,
  },
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
