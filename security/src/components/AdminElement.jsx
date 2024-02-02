import { Navigate } from "react-router-dom";
import { User, Current_User } from "./Users";
function AdminElement({ children }) {
  if (User.Admin_User !== Current_User) {
    Navigate("/");
    return <div>Access Denied</div>;
  } else {
    return children;
  }
}

export default AdminElement;
