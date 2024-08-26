import { createContext } from "react";
const initialvalue = {name:"default name",city:"default city"};
const UserContext = createContext(initialvalue);
export default UserContext;