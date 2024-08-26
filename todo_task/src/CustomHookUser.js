import useUserData from "./useUserdata";
const CustomhookUser = () => {
    const userOb = useUserData();
    return (
        <div>
            Name={userOb.name} and age = {userOb.age}
        </div>
    );
};
export default CustomhookUser;