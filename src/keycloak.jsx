import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://localhost:8180', // Keycloak server URL
    realm: 'myrealm', // Your realm name
    clientId: 'myclient-new', // Your client ID
    // url: process.env.REACT_APP_KEYCLOAK_URL,
    // realm: process.env.REACT_APP_KEYCLOAK_REALM,
    // clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID
};



console.log("in keycloak login");

const keycloak = new Keycloak(keycloakConfig);
// console.log("in keycloak login  "+keycloak.authenticated.authenticated);

export default keycloak;