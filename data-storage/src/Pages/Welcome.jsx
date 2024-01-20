import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [localdata, setLocaldata] = useState("");
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const cookievalue = cookies.user;
  const navigate = useNavigate();

  const [count, setCount] = useState(
    parseInt(sessionStorage.getItem("Page")) || 1
  );

  useEffect(() => {
    const localdata = localStorage.getItem("email");
    if (localdata) {
      setLocaldata(localdata);
    }
  });

  const incrementCount = () => {
    const newCounter = count + 1;
    setCount(newCounter);
    sessionStorage.setItem("Page", newCounter);
  };

  const deleteCookie = () => {
    removeCookie("user", { path: "/" });
    console.log("Cookie Deleted Successfully");
    localStorage.clear("email");
    console.log("localStorage is cleared");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {cookievalue}</h1>
      <button onClick={incrementCount}>Update Count</button>
      <button onClick={deleteCookie}>Delete {cookievalue}</button>
      <h1>Session Count {count}</h1>
      <h1>Item in localStorage is {localdata}</h1>
    </div>
  );
}

export default Welcome;
