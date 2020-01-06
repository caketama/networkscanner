import React from "react";
import { Text, Flex, Box } from "rebass";
import IPs from "./IPs";
import Ports from "./Ports";
import Services from "./Services";

const ScanResult = () => {
  return (
    <Flex
      sx={{
        color: "white",
        fontSize: 6,
        justifyContent: "center"
      }}
    >
      <IPs />
      <Box mx="auto" />
      <Ports />
      <Box mx="auto" />
      <Services />
    </Flex>
  );
};

export default ScanResult;
