import React from "react";
import { Flex } from "rebass";
import Link from "./StyledLinks";

const Header = () => {
  return (
    <Flex mx={10} sx={{ justifyContent: "flex-end" }}>
      <Link to="/previousscans">Previous Scans</Link>
    </Flex>
  );
};

export default Header;
