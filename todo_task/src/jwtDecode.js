import {jwtDecode} from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
const JwtDecode = () =>{
    useEffect(()=>{
        axios.post("http://localhost:3000/api/v1/auth/login",{
            username:"sonu",
            password:"qwe123",
        })
        .then((res)=>{
            console.log(res.data);
            const decoded = jwtDecode(res.data.token);
            console.log(decoded);
        });
    },[]);
    return <div>Decoded value = {}</div>
}
export default JwtDecode;