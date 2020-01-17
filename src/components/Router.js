import React from "react";
import { Route } from "react-router-dom";
import PreviousScans from "./PreviousScans";
import Scanner from "../containers/Scanner";
function Router() {
  return (
    <div>
      <Route exact path="/" component={Scanner} />
      <Route path="/previousscans" component={PreviousScans} />
    </div>
  );
}

export default Router;
