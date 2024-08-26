import { useContext } from "react";
import UserContext from "./usercontext";
const User = () =>{
    const userContextObject = useContext(UserContext);
    console.log(userContextObject);
    return(
        <div>
            <h1>user component with name = {userContextObject.name}</h1>
        </div>
    );
};
export default User;