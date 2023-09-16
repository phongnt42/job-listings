import React from "react";
import { Flex } from "@chakra-ui/react";
import ButtonNav from "../shared/ButtonNav";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content container">
        Nguyen The Phong
        <Flex>
          <ButtonNav title="Task Board" />
          <ButtonNav title="Job Listings" />
          <ButtonNav title="Login" />
        </Flex>
      </div>
    </div>
  );
};

export default Header;
