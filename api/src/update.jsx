import { useState } from "react";
import axios from "axios";
const initialData = {
  oldusername: "",
  newusername: "",
};

function Update() {
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data.oldusername);
  };

  const update = async (data) => {
    await axios
      .patch(`http://localhost:8080/update/${data.oldusername}`, {
        username: data.newusername,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log("Error", error));
  };

  const updateChange = (e) => {
    e.preventDefault();
    // console.log(data.oldusername);
    update(data);
  };

  return (
    <div>
      <hr />
      <h1>Update using patch</h1>
      <form onSubmit={updateChange}>
        <label>
          Current Username :-
          <input
            type="text"
            onChange={handleChange}
            name="oldusername"
            value={data.oldusername}
          />
        </label>
        <label>
          New Username :-
          <input
            type="text"
            onChange={handleChange}
            name="newusername"
            value={data.newusername}
          />
        </label>
        <button type="submit">Update</button>
      </form>

      <br />
    </div>
  );
}

export default Update;
