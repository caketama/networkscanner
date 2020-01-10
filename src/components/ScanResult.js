import React, { useState } from "react";
import { Flex, Box } from "rebass";
import IPs from "./IPs";
import Ports from "./Ports";
import Services from "./Services";

const ScanResult = () => {
  return (
    <Flex
      sx={{
        color: "white",
        fontsize: 6,
        justifycontent: "center"
      }}
    >
      <IPs />
      <Ports />
      <Services />
    </Flex>
  );
};

export default ScanResult;
