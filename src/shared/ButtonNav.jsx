import React from "react";
import { Box } from "@chakra-ui/react";

const ButtonNav = ({title}) => {
  return (
    <Box
      paddingX="16px"
      paddingY="8px"
      fontWeight={500}
      cursor="pointer"
      fontSize="14px"
      _hover={{
        backgroundColor: "#1E313B",
        borderRadius: "10px",
      }}
    >
      {title}
    </Box>
  );
};

export default ButtonNav;
