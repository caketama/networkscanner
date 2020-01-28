import React from 'react';
import { Link as Styler } from "rebass";
import { Link as RouterLink } from "react-router-dom";


const Link = props => {
  return <Styler {...props} variant="nav" color="#00FF00" as={RouterLink} />
}

export default Link;
