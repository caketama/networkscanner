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
      <Box>
        <p>{IP[0]}</p>
      </Box>
    );
  });

  let port = scan.map(port => {
    return (
      <Box>
        <p>{port[1]}</p>
      </Box>
    );
  });
  let services = scan.map(services => {
    return (
      <Box>
        <p>{services[2]}</p>
      </Box>
    );
  });

  return (
    <Flex>
      <Box
        width={1 / 3}
        sx={{
          color: "white"
        }}
      >
        <Text>Scan all the things!!</Text>
        <Input type="text" onChange={e => setIp(e.target.value)} />
        <button onClick={e => sendScan()}> SCAN </button>
        <Box mx="auto">
          <IPs />
          {IP}
        </Box>
          <Ports />
        <Box width={1/3}>
          {port}
        </Box>
        <Services />
      <Box color="white">
    {services}
        </Box></Box>
    </Flex>
  );
};

export default Scan;
