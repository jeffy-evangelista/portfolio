import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const InputTheme = definePartsStyle({
  defaultProps: {
    focusBorderColor: "teal",
  },
  field: {},
});
