import React, { useState } from "react";
import { Flex, Text } from "rebass";
import IPs from "../components/IPs";
import Ports from "../components/Ports";
import Services from "../components/Services";

const PreviousScans = props => {
  const [error, setError] = useState(false);
  const [scan, setScan] = useState([]);
  const [ip, setIp] = useState("");
  const getScans = async () => {
    setError(false);
    try {
      const endpoint = "http://localhost:5000/api/previous_scans";
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
      <Flex sx={{ justifyContent: "center" }}>
        <Text color="#00FF00" fontSize={6}>
          Previous Scans
        </Text>
      </Flex>
    );
  };

export default PreviousScans;
