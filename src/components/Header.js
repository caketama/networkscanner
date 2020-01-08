import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "rebass";

const Header = () => {
  return (
    <Flex mx={10} sx={{justifyContent: "flex-end"}}>
        <Link to="/previousscans">Previous Scans</Link>
      </Flex>
  );
};

export default Header;
