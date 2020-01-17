import React from "react";
import { Text, Flex, Box } from "rebass";

const Services = props => {
  return (
    <Box mx="auto">
        <Text p={1}> {props.services}</Text>
      </Box>
  );
};

export default Services;
