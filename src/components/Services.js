import React from "react";
import { Text, Flex, Box } from "rebass";

const Services = props => {
  return (
    <Flex flexWrap="flex-start">
      <Text fontSize={3}>
        {props.services}
      </Text>
    </Flex>
  );
};

export default Services;
