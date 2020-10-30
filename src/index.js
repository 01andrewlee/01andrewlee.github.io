// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import "./index.css";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
