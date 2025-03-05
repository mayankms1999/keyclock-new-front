import React from 'react';
import keycloak from './keycloak';

const Login = () => {
    const handleLogin = () => {
        console.log("in login function");
        keycloak.login(); 
    };
    const handleLogout = () => {
        <button onClick={keycloak.logout()}>Logout</button>
        // keycloak.logout(); // Logout from Keycloak
    };
    return (
        <div>
            <h1>Web page</h1>
            {/* <button onClick={()=>handleLogin()}>Login for Login</button> */}
            <button onClick={()=>handleLogout()}>Logout </button>


        </div>
    );
};

export default Login;