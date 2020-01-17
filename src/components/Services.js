import React from "react";
import { Text, Flex, Box } from "rebass";

const Services = props => {
  return (
    <Flex flexWrap="flex-start">
      <Box>
      <Text margin="5px" fontSize={3}>
        {props.services}
      </Text>
      </Box>
    </Flex>
  );
};

export default Services;
