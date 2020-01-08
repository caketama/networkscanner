import React, { useState } from "react";
import { Text } from "rebass";

const IPs = props => {
  const getIP = async () => {
    try {
      const endpoint = "http://localhost:5000/api/get_ip";
      const data = { ip_address: props.ip };
      console.log(data);
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
        headers: { "Content-Type": "application/json" }
      };
      const res = await fetch(endpoint, configs);
      const ip_address = await res.json();
      if (ip_address) {
        console.log("WORKS")
      } else {
        console.log("FAIL")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Text color="#36f300" fontSize={6}>
      IP
    </Text>
  );
};

export default IPs;
