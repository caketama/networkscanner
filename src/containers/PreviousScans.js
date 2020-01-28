import React, { useState } from "react";
import { Flex, Text, Box } from "rebass";
import IPs from "../components/IPs";
import Ports from "../components/Ports";
import Services from "../components/Services";

const PreviousScans = props => {
  const [error, setError] = useState(false);
  const [scan, setScan] = useState([]);
  const [data, setData] = useState(false);
  const [ip, setIp] = useState("");
  const getScans = async () => {
    setError(false);
    try {
      const endpoint = "http://localhost:5000/api/previous_scans";
      const configs = {
        method: "GET"
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
  if (!data) {
    getScans();
    setData(true)
  } else {
    console.log(data)
  }
  

  return (
    <Flex color="#00FF00">
      <Box width={1 / 3}>
        <Text p={2} m={1} fontSize={5}>
          IP
        </Text>
        {IP}
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
  );
};

export default PreviousScans;
