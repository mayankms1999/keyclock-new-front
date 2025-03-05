import React, { useEffect, useState } from 'react';
import axios from 'axios';
import keycloak from './keycloak';

const Welcome = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch data from the Spring Boot backend
        axios.get('http://localhost:8081/api/home', {
            headers: {
                Authorization: `Bearer ${keycloak.token}`,
            },
        })
        .then((response) => {
            setMessage(response.data);
        })
        .catch((error) => {
            console.error('Failed to fetch data', error);
        });
    }, []);
    <h2>welcome </h2>

    const handleLogout = () => {
        <button onClick={keycloak.logout()}>Logout</button>
        // keycloak.logout(); // Logout from Keycloak
    };

    return (
        <div>
            <h1>Welcome Page</h1>
            <p>{message}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Welcome;