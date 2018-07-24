import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Security } from "@okta/okta-react";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import config from "./config/appConfig";

import "bootstrap/dist/css/bootstrap.min.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

ReactDOM.render(
  <Router>
    <Security
      issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}
    >
      <App />
    </Security>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
