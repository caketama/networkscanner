import React from "react";
import { Text, Flex, Box } from "rebass";
import { Input } from "@rebass/forms";

const Scan = () => {
  return (
    <Flex>
      <Box width={1 / 3}></Box>
      <Text color="white" fontSize={6}>
        <Box width={1 / 3}></Box>
        Scan all the things!!
        <Input />
        <Box width={1 / 3}></Box>
      </Text>
    </Flex>
  );
};

export default Scan;
