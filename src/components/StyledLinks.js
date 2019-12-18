import React from 'react';
import { Link as Styler } from "rebass";
import { Link as RouterLink } from "react-router-dom";


export default props => {
  return <Styler {...props} variant="nav" as={RouterLink} />
}
