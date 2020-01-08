import React from "react";
import { Route } from "react-router-dom";
import PreviousScans from './PreviousScans'
import Scan from './Scan'
function Router() {
  return (
  <div>
    <Route exact path="/" component={Scan} />
    <Route path="/previousscans" component={PreviousScans} />
  </div>
  )
}

export default Router;
