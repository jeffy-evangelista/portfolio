import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ButtonTheme } from "./Button";
import { InputTheme } from "./InputTheme";
import { CardTheme } from "./CardTheme";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Button: ButtonTheme,
    Input: InputTheme,
    Card: CardTheme,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      lightGrey: "#F2F0EE",
      darkGrey: "#58595B",
      darkModeBG: "#333333",
      darkModeCardBG: "#3d3b3e",
    },
  },
  styles: {
    global: ({ colorMode }: { colorMode: "light" | "dark" }) => ({
      // styles for the `body`
      body: {
        bg: colorMode === "dark" ? "brand.darkModeBG" : "brand.lightGrey",
      },
    }),
  },
});

export default theme;
