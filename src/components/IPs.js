import React, { useState } from "react";
import { Text, Flex, Box } from "rebass";

const IPs = () => {
  return (
    <Flex flexWrap="wrap">
      <Box width={1 / 3}>
        <Text
          sx={{
            justifyContent: "flex-start",
            color: "white",
            fontSize: 5
          }}
        >
          IP
        </Text>
      </Box>
    </Flex>
  );
};

export default IPs;
