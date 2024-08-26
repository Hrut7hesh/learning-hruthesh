import { CurrentUser,Notifications } from "./App";
function HeaderBar() {
    return (
        <CurrentUser.Consumer>
          {user =>
            <Notifications.Consumer>
              {notifications =>
                <header>
                    Welcome back, {user.name}! 
                    You have {notifications.length} notifications.
                </header>
              }
            </Notifications.Consumer>
          }
        </CurrentUser.Consumer>
    );
}
export default HeaderBar