import React from "react";
import IPs from "../components/IPs";
import Ports from "../components/Ports";
import Services from "../components/Services";
import { Flex, Box, Text } from "rebass";

const Scanner = () => {
  return (
    <Flex>
      <Box p={3} width={1/3}>
        <IPs />
      </Box>
      <Box p={3} width={1/3}>
        <Ports />
      </Box>
      <Box p={3} width={1/3}>
        <Services />
      </Box>
    </Flex>
  );
};

export default Scanner;
