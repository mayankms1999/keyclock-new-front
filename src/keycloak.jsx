import Keycloak from 'keycloak-js';
import config from './config'; // Import the configuration file

const keycloakConfig = {
    url: config.keycloak.url, 
    realm: config.keycloak.realm, 
    clientId: config.keycloak.clientId, 
   
};

console.log("in keycloak login");
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;