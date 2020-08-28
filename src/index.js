import React from "react";
import ReactDOM from "react-dom";

import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri={`${window.location.origin}/callback`}
      scope="openid profile email PERMISSIONS"
      responseType="id_token token"
      audience="YOUR_AUDIENCE"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
