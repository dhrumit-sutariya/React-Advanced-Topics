import { useState } from "react";
import axios from "axios";

function Delete() {
  const [data, setData] = useState("");

  const handleRemove = (data) => {
    axios
      .delete(`http://localhost:8080/delete/${data}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRemove(data);
  };
  const handleChange = (e) => {
    setData(e.target.value);
    // console.log(data);
  };

  return (
    <div>
      <hr />
      <h1>Delete</h1>
      <form onSubmit={handleSubmit}>
        <label>Username :- </label>
        <input type="text" onChange={handleChange} />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default Delete;
