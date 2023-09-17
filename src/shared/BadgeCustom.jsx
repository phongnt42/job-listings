import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

const BadgeCustom = ({value, icon}) => {
  return (
    <Flex
      bgColor="#1e293b"
      justifyContent="space-between"
      gap="5px"
      paddingX="10px"
      borderRadius="10px"
      alignItems="center"
    >
      <Icon as={icon} color="white" />
      <Text fontSize="sm">{value}</Text>
    </Flex>
  );
};

export default BadgeCustom;
