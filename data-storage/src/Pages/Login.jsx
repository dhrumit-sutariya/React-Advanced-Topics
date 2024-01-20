import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Clipboard from "./Clipboard";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [cookies, setCookies] = useCookies("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== "" && password === "demo") {
      setCookies("user", username, { path: "/" });
      localStorage.setItem("email", email);
      console.log("Cookie set successfully");
      navigate("./Welcome");
    } else {
      alert("invalid");
    }
  };

  return (
    <div>
      <form>
        <label>
          Username :-
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          E-mail :-
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password :-
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
      <hr />
      <Clipboard />
    </div>
  );
}

export default Login;
