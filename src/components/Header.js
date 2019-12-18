import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text } from "rebass";
import PreviousScans from "./PreviousScans";

const Header = () => {
  return (
    <Flex mx={10} sx={{justifyContent: "flex-end"}}>
        <Link to="/previousscans">Previous Scans</Link>
      </Flex>
  );
};

export default Header;
