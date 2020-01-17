import React from "react";
import { Text, Box } from "rebass";

const IPs = props => {
  return (
    <Box>
      <Text fontSize={4}>{props.ip}</Text>
    </Box>
  );
};

export default IPs;
