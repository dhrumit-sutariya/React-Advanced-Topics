import { useState } from "react";
import axios from "axios";

const initialData = {
  username: "",
  password: "",
};

function SignUp() {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const postData = async (data) => {
    await axios
      .post("http://localhost:8080/register", data)
      .then((response) => console.log(response))
      .catch((error) => console.log("Error", error));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(data);
    postData(data);
  };

  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <form onSubmit={handleSignup}>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
