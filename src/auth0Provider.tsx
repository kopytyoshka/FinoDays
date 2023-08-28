// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
//
// interface Auth0ProviderWithHistoryProps {
//     children: React.ReactNode;
// }
//
// const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
//     const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
//     const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
//     const history = useHistory();
//
//     const onRedirectCallback = (appState: any) => {
//         history.push(appState?.returnTo || window.location.pathname);
//     };
//
//     return (
//         <Auth0Provider
//             domain={domain}
//             clientId={clientId}
//             redirectUri={window.location.origin}
//             onRedirectCallback={onRedirectCallback}
//         >
//             {children}
//         </Auth0Provider>
//     );
// };
//
// export default Auth0ProviderWithHistory;
import React from 'react';
import { useHistory } from 'react-router-dom';
import {Auth0Provider, useAuth0} from '@auth0/auth0-react';

interface Auth0ProviderWithHistoryProps {
    children: React.ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN ||'';
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
    const history = useHistory();


    const onRedirectCallback = (appState: any) => {
        useAuth0().handleRedirectCallback()
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
