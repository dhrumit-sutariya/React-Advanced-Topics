import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const cookievalue = cookies.user;
  const navigate = useNavigate();

  const [count, setCount] = useState(
    parseInt(sessionStorage.getItem("Page")) || 1
  );

  const incrementCount = () => {
    const newCounter = count + 1;
    setCount(newCounter);
    sessionStorage.setItem("Page", newCounter);
  };

  const deleteCookie = () => {
    removeCookie("user", { path: "/" });
    console.log("Cookie Deleted Successfully");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {cookievalue}</h1>
      <button onClick={incrementCount}>Update Count</button>
      <button onClick={deleteCookie}>Delete {cookievalue}</button>
      <h1>Session Count {count}</h1>
    </div>
  );
}

export default Welcome;
