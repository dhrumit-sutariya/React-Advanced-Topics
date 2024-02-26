import { isvalid } from "./Login";

function PrivateElement({ children }) {
  if (!isvalid) {
    return <h1>Access Denied</h1>;
  }

  return <>{children}</>;
}

export default PrivateElement;
