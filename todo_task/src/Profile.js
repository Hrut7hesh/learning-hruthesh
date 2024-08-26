import UserContext from "./usercontext";
import PersonalDetails from "./PersonalDetails";
import User from "./User";
const Profile=()=>{
    const currentValue={name:"Hruthesh",city:"Bangalore"};
    return(
        <div>
            <UserContext.Provider value={currentValue}>
                <User />
                <PersonalDetails />
            </UserContext.Provider>
        </div>
    );
};
export default Profile;