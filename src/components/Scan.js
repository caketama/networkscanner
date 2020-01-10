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
  const [ip, setIp] = useState("127.0.0.1");
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
      <Box
        sx={{
          color: "white",
          justifyContent: "center"
        }}
      >
        <p>{IP[0]}</p>
      </Box>
    );
  });

  let port = scan.map(port => {
    return (
      <Box
        sx={{
          color: "white",
          justifyContent: "center"
        }}
      >
        <Text>{port[1]}</Text>
      </Box>
    );
  });
  let services = scan.map(services => {
    return (
      <Box
        sx={{
          color: "white",
          justifyContent: "center"
        }}
      >
        <Text>{services[2]}</Text>
      </Box>
    );
  });

  return (
    <Flex>
      <Box width={1 / 3}></Box>
      <Box
        width={1 / 2}
        sx={{
          color: "white"
        }}
      >
        <Text fontSize={6}>Scan all the things!!</Text>
        <Input type="text" onChange={e => setIp(e.target.value)} />
        <button onClick={e => sendScan()}> SCAN </button>
        <IPs />
        {IP[0]}
        {console.log(scan)}
        <Ports />
        {port}
        <Services />
        {services}
      </Box>
    </Flex>
  );
};

export default Scan;
