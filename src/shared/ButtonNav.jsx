import React from "react";
import { Box } from "@chakra-ui/react";

const ButtonNav = ({children, style}) => {
  return (
    <Box
      paddingX="16px"
      paddingY="8px"
      fontWeight={500}
      cursor="pointer"
      fontSize="14px"
      borderRadius="8px"
      _hover={{
        backgroundColor: "#1E313B",
      }}
      {...style}
    >
      {children}
    </Box>
  );
};

export default ButtonNav;
