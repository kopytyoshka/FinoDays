import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";


const container = document.getElementById('root');
const root = createRoot(container!);

const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        useRefreshTokens={true}
        useRefreshTokensFallback={false}
        redirectUri={window.location.origin}
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App/>
    </Auth0Provider>,
);

serviceWorkerRegistration.unregister();
reportWebVitals();
