import React, { useContext } from 'react';
import { CurrentUser,Notifications } from "./App";
function UseContextHeaderBar() {
    const user = useContext(CurrentUser);
    const notifications = useContext(Notifications);
    return (
        <header>
          Welcome back, {user.name}!
          You have {notifications.length} notifications.
        </header>
    );
}
export default UseContextHeaderBar;