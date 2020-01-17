import React, { useState } from "react";
import { Text, Flex, Box } from "rebass";
import { Input } from "@rebass/forms";
import ScanResult from "./ScanResult";
import IPs from "./IPs";
import Ports from "./Ports";
import Services from "./Services";

const Scan = () => {
  const [error, setError] = useState(false);
  const [scan, setScan] = useState([]);
  const [ip, setIp] = useState("192.168.56.4");
  const sendScan = async () => {
    setError(false);
    try {
      const endpoint = "http://localhost:5000/api/add_scan";
      const data = { ip_address: ip };
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      };
      const res = await fetch(endpoint, configs);
      const ip_address = await res.json();
      if (ip_address) {
        setScan(ip_address.scan);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  let IP = scan.map(IP => {
    return (
      <Text>
        <p>
          <br />
          {IP[0]}
        </p>
      </Text>
    );
  });

  let port = scan.map(port => {
    return (
      <Text>
        <p>{port[1]}</p>
      </Text>
    );
  });

  let services = scan.map(services => {
    return (
      <Text>
        <p>{services[2]}</p>
      </Text>
    );
  });

  return (
    <Flex color="white">
      <Box width={1 / 3}></Box>
      <Box
        width={1 / 3}
        sx={{
          color: "white"
        }}
      >
        <Text fontSize={6}>Scan all the things!!</Text>
        <Input type="text" onChange={e => setIp(e.target.value)} />
        <button onClick={e => sendScan()}> SCAN </button>
        <Box width={1 / 3}></Box>
        <Flex flexWrap="row">
          <IPs />
          <Box mx="auto">
          {IP}
          </Box>
          <Box mx="auto">
          <Ports /> {port}</Box>
          <Box mx="auto">
          <Services /> {services}
            </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Scan;
