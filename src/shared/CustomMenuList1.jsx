import React from 'react'
import { Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const CustomMenuList1 = () => {
  return (
    <Menu matchWidth={true}>
    <MenuButton
      as={Button}
      rightIcon={<ChevronDownIcon />}
      w="100%"
      textAlign="left"
      bgColor="#020617"
      textColor="#ffffff"
      border="1px solid #ffffff"
      _hover={{
        bgColor: "#020617",
      }}
      _active={{
        bgColor: "#020617",
      }}
      _focusVisible={{
        borderColor: "#3182ce",
        boxShadow: "0 0 0 1px #3182ce",
      }}
      _focus={{
        borderColor: "#3182ce",
        boxShadow: "0 0 0 1px #3182ce",
      }}
    >
      Actions
    </MenuButton>
    <MenuList background="#020617" paddingX="2px">
      <MenuItem background="#020617" _hover={{bgColor:'#1e293b'}}>Download</MenuItem>
      <MenuItem background="#020617" _hover={{bgColor:'#1e293b'}}>Create a Copy</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default CustomMenuList1