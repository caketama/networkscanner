import React, { useState } from "react";
import { Text, Flex, Box, Button } from "rebass";
import { Input } from "@rebass/forms";
import IPs from "../components/IPs";
import Ports from "../components/Ports";
import Services from "../components/Services";

const Scan = props => {
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
    return <IPs ip={IP[0]} />;
  });

  let port = scan.map(port => {
    return <Ports port={port[1]} />;
  });

  let services = scan.map(services => {
    return <Services services={services[2]} />;
  });

  return (
    <Flex color="white" justifyContent="center">
      <Box width={1 / 2} margin="30px">
        <Text m={1} fontSize={6}>
          Scan all the things!!
        </Text>
        <Input type="text" m={2} onChange={e => setIp(e.target.value)} />
        <Button variant="outline" m={2} color="white" onClick={e => sendScan()}>
          SCAN
        </Button>
        <Flex>
          <Box width={1 / 3}>
            <Text p={2} m={1} fontSize={5}>
              IP
            </Text>
            {IP[0]}
          </Box>
          <Box p={2} width={1 / 3}>
            <Text m={1} fontSize={5}>
              Ports
            </Text>
            {port}
          </Box>
          <Box p={2} width={1 / 3}>
            <Text m={1} fontSize={5}>
              Services
            </Text>
            <Services /> {services}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Scan;
