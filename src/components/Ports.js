import React from "react";
import { Text } from "rebass";

const Ports = props => {
  return (
    <Text p={2} fontSize={2}>
      {props.port}
    </Text>
  );
};
export default Ports;
