import React from "react";
import { Text, Flex, Box } from "rebass";

const ScanResult = () => {
  return (
    <Flex>
      <Box width={1 / 3}></Box>
      <Box
        width={1 / 3}
        sx={{
          color: "white",
          fontSize: 6,
          justifyContent: "center"
        }}
      >
        <Text>All the Results!</Text>
        <Box width={1 / 3}></Box>
      </Box>
    </Flex>
  );
};

export default ScanResult;
