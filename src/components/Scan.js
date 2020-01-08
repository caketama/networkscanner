import React, { useState } from "react";
import { Text, Flex, Box } from "rebass";
import { Input } from "@rebass/forms";
import ScanResult from './ScanResult'

const Scan = props => {
  const [error, setError] = useState(false);
  const [scan, setScan] = useState([]);
  const [ip, setIp] = useState("");
  const sendScan = async () => {
    setError(false);
    try {
      const endpoint = "http://localhost:5000/api/add_scan";
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
      console.log(ip_address);
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
  const getScan = async () => {
    try {
      const endpoint = "http://localhost:5000/api/get_scans";
      const data = {
        ip_address: ip,
      };
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
        headers: { "Content-Type": "application/json" }
      };
      console.log(data);
      const res = await fetch(endpoint, configs);
      console.log(res);
      const json_res = await res.json();
      if (json_res) {
        setScan(json_res);
        console.log("success");
      } else {
        console.log("SQL ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };
  getScan()
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
