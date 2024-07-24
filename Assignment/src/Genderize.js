import { useState } from "react";
import axios from "axios";
let Genderize = () => {
    let [name, setname] = useState("Enter Name");
    let [details, setdetails] = useState("");
    function check(){
        axios.get(`https://api.genderize.io/?name=${name}`)
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
            <h1>Genderize</h1>
            <input type="text" name="name" value={name} onChange={(e)=>(setname(e.target.value))}/>
            <button onClick={check}>Check</button>
            <p>Gender: {details.gender}</p>
        </div>
    );
}
export default Genderize;