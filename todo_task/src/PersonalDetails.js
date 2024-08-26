import { useContext } from "react";
import UserContext from "./usercontext";
const PersonalDetails =()=>{
    const userContextObject = useContext(UserContext);
    return(
        <div>
            <h1>PersonalDetails</h1>
            <h1>user component with city = {userContextObject.city}</h1>
            <h1>user component with name = {userContextObject.name}</h1>
        </div>
    );
};
export default PersonalDetails;