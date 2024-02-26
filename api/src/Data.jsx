import { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/username")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <hr />
      <p>Avaible Username in Database</p>

      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
