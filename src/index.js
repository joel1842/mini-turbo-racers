import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-3443m6xg.us.auth0.com"
    clientId="AGtHjBvXyLv3h3pwfXI9DlVueBvb1fM3"
    redirectUri={window.location.origin}
  >
    <App/>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals