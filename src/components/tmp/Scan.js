import React, { useState } from "react";
import { Text, Flex, Box } from "rebass";
import { Input } from "@rebass/forms";
import ScanResult from './ScanResult'

const Scan = props => {
  const [scans, setScans] = useState([]);
  const [ip, setIp] = useState("127.0.0.1");
  const sendScan = async () => {
    try {
      const endpoint = "http://localhost:5000/api/scans";
      const data = { ip : ip };
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      };
      const response = await fetch(endpoint, configs);
      console.log(response.json);
      const ip_address = await response.json();
      console.log(ip_address)
      if (ip_address) {
        setIp(ip_address)
        console.log("this is working")
      } else {
        console.log("SQL ERROR")
      }
    } catch (error) {
      console.log(error);
    }
  };
  let mapScans = scans.map(scan => {
    return (
      <p>{scans}</p>)
  })

  return (
    <Flex>
      <Box width={1 / 3}></Box>
      <Text color="white" fontSize={6}>
        <Box width={1 / 3}></Box>
        Scan all the things!!
        <Input type="text" onChange={e => setIp(e.target.value)} />
        <button onClick={e => sendScan()}> SCAN </button>
        <Box width={1 / 3}></Box>
        <ScanResult />
      </Text>
    </Flex>
  );
};

export default Scan;
