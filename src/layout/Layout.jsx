import React from "react";
import "../App.scss";
import Header from "./Header";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <div className="main-page">
      <Header />
      <Box marginY="1rem">{children}</Box>
    </div>
  );
};

export default Layout;
