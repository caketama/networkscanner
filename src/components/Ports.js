import React from "react";
import { Text, Flex, Box } from "rebass";

const Ports = props => {
  return (
    <Text lineHeight="body" p={2} fontSize={2}>
      {props.port}
    </Text>
  );
};
export default Ports;
