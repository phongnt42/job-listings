import React from "react";
import { Flex } from "@chakra-ui/react";
import ButtonNav from "../shared/ButtonNav";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content container">
        Nguyen The Phong
        <Flex>
          <ButtonNav>Task Board</ButtonNav>
          <ButtonNav>Job Listings</ButtonNav>
          <ButtonNav>Login</ButtonNav>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
