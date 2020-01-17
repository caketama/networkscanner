import React from "react";
import { Text, Box } from "rebass";

const Ports = props => {
  return (
    <Box>
      <Text margin="10px" fontSize={3}>
        {props.port}
      </Text>
      </Box>
  );
};
export default Ports;
