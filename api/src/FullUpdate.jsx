import { useState } from "react";
import axios from "axios";

const initialData = {
  oldusername: "",
  newusername: "",
  oldpassword: "",
  newpassword: "",
};
function FullUpdate() {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const handleUpdate = async (data) => {
    await axios
      .put(`http://localhost:8080/update/${data.oldusername}`, {
        username: data.newusername,
        password: data.newpassword,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log("Error", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    handleUpdate(data);
  };
  return (
    <div>
      <hr />
      <h1>Update using put</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Old-Username :-
          <input
            type="text"
            name="oldusername"
            value={data.oldusername}
            onChange={handleChange}
          />
        </label>
        <label>
          Old-Password :-
          <input
            type="password"
            name="oldpassword"
            value={data.oldpassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          New-Username :-
          <input
            type="text"
            name="newusername"
            value={data.newusername}
            onChange={handleChange}
          />
        </label>
        <label>
          New-Password :-
          <input
            type="password"
            name="newpassword"
            value={data.newpassword}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default FullUpdate;
