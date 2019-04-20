import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./scenes/footer";

import Home from "./scenes/home";
import Registered from "./scenes/registered";
export default class PublicRoutes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/registered" component={Registered} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
