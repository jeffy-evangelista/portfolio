import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);
const baseStyle = definePartsStyle({
  container: {
    _dark: {
      bg: "brand.darkModeCardBG",
    },
  },
});

export const CardTheme = defineMultiStyleConfig({ baseStyle });
