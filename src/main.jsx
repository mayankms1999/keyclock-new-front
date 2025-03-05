
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import keycloak from './keycloak';

keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
  console.log(authenticated);
    if (authenticated) {
        console.log('Authenticated');
        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } else {
        console.warn('Not authenticated');
    }
}).catch((error) => {
    console.error('Failed to initialize Keycloak', error);
});

