import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import WebFont from "webfontloader";

import PublicRoutes from "./router";
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.less";

WebFont.load({
  google: {
    families: ["Open Sans", "Work Sans:400,500,700", "Quicksand", "sans-serif"]
  }
});

dotenv.load();

ReactDOM.render(
  <div style={{ minHeight: "100%" }}>
    <PublicRoutes />
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
