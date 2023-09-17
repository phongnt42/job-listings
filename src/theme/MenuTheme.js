import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    width: "100%",
    textAlign: "left",
    bgColor: "#020617",
    textColor: "#ffffff",
    border: "1px solid #ffffff",
    paddingX: '16px',
    paddingY: '7px',
    borderRadius: '6px',
    _hover: {
      bgColor: "#020617",
    },
    _active: {
      bgColor: "#020617",
    },
    fontWeight: "600",
    _focusVisible: {
      borderColor: "#3182ce",
      boxShadow: "0 0 0 1px #3182ce",
    },
    _focus: {
      borderColor: "#3182ce",
      boxShadow: "0 0 0 1px #3182ce",
    },
  },
  list: {
    // this will style the MenuList component
    background: "#020617",
    paddingX: "2px",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    background: "#020617",
    _hover: { bgColor: "#1e293b" },
  },

});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
