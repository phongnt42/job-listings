import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CustomMenuList = ({options, value: selectedOption, onChange}) => {

  function handleClick(option) {
    onChange(option); 
  }
  return (
    <Menu matchWidth={true}>
      <MenuButton>
        <Flex alignItems="center" justifyContent="space-between">
          {selectedOption ? selectedOption.label : "job Types"}{" "}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {options.map((level) => {
          return (
            <MenuItem
              key={level.value}
              bgColor={level.value === selectedOption.value && "#1e293b"}
              onClick={() => handleClick(level)}
            >
              {level.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default CustomMenuList;
