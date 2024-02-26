import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

let isvalid = false;

function Login() {
  const [input, setInput] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    if (!input.username.trim() || !input.password.trim()) {
      //   isvalid = false;
      alert("All fields are required");
      return false;
    }

    if (input.username !== "admin" || input.password !== "admin") {
      //   isvalid = false;
      alert("Invalid credentials");
      return false;
    }

    isvalid = true;
    navigate("/home");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      console.log(input);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          value={input.username}
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={input.password}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;

export { isvalid };
