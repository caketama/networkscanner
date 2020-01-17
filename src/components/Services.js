import React from "react";
import { Text, Flex, Box } from "rebass";

const Services = props => {
  return (
    <Box p={1} >
      {props.services}
    </Box>
  );
};

export default Services;
