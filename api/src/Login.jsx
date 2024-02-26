import { useState } from "react";
import axios from "axios";
const initialData = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const verifyData = async (data) => {
    await axios
      .post("http://localhost:8080/login", data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log("Error", error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(data);
    verifyData(data);
  };

  return (
    <div>
      <h1>Login</h1>

      <div>
        <form onSubmit={handleLogin}>
          <label>
            Username :-
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password :-
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
