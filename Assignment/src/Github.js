import { useState } from "react";
import axios from "axios";
let Github = () => {
    let [name, setname] = useState("Enter Username");
    let [details, setdetails] = useState("");
    function check(){
        axios.get(`https://api.github.com/users/${name}`)
            .then(function(response){
                setdetails(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error( error);
            });
    }
    return(
        <div>
            <h1 className="github">Github Profile</h1>
            <input type="text" name="name" value={name} onChange={(e)=>(setname(e.target.value))}/>
            <button onClick={check}>Check</button><br/>
            <img src={details.avatar_url} alt="profile-Image"/>
            <h3>Id is {details.id}</h3>
        </div>
    );
}
export default Github;