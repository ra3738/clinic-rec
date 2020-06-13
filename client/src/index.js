import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from './authentication/react-auth0-spa';
import config from './authentication/auth_config.json';
import history from './utils/history.utils';
import App from './App';

// Routes the user to the right place after login
const onRedirectCallback = appState => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    audience={config.audience}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);
