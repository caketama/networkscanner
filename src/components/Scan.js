import React, { useState } from "react";
import { Text, Flex, Box } from "rebass";
import { Input } from "@rebass/forms";

const Scan = () => {
  const [error, setError] = useState(false);
  const [ip, setIp] = useState("");
  const sendScan = async () => {
    setError(false);
    try {
      const endpoint = "http://localhost:5000/api/scan";
      const data = { ip_address: ip };
      console.log(data);
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
        headers: { "Content-Type": "application/json" }
      };
      const res = await fetch(endpoint, configs);
      const ip_address = await res.json();
      console.log(res);
      if (ip_address) {
        setIp(ip_address);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <Flex>
      <Box width={1 / 3}></Box>
      <Text color="white" fontSize={6}>
        <Box width={1 / 3}></Box>
        Scan all the things!!
        <Input type="text" onChange={e => setIp(e.target.value)} />
        <button onClick={e => sendScan()}> SCAN </button>
        <Box width={1 / 3}></Box>
      </Text>
    </Flex>
  );
};

export default Scan;
