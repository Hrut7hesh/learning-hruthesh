import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

export const TokenDecoder = () => {
    const [decodedToken, setDecodedToken] = useState(null);
    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.post('http://localhost:1337/api/auth/local', {
                    identifier: 'h@gmail.com',
                    password: 'sonu12',
                });
                const decoded = jwtDecode(response.data.jwt);
                const user = response.data.user;
                console.log(response);
                setDecodedToken(decoded);
                setUserDetail(user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchToken();
    }, []);

    return (
        <div>
            <h1>User Details</h1>
            {decodedToken && userDetail ? (
                <div>
                    <p>Username: {userDetail.username}</p>
                    <p>Email: {userDetail.email}</p>
                    <p>Token ID: {userDetail.id}</p>
                    <p>Blocked: {userDetail.blocked ? "true":"false"}</p>
                    <p>Confirmed: {userDetail.confirmed ? "true":"false"} </p>
                    <p>Created At: {userDetail.createdAt}</p>
                    <p>Updated At: {userDetail.updatedAt}</p>
                    <p>Provider: {userDetail.provider}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};