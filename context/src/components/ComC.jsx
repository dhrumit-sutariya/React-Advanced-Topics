import React, { useContext } from "react";
import { Data } from "../App";

function ComC() {
  // let MyName = FirstName + " Patel";

  let Name = useContext(Data);
  Name = Name + " Sutariya";

  return (
    <div>
      <h1>Context API</h1>
      <h2>My name is {Name}</h2>
      {/* <h2>My name is {MyName}</h2> */}
    </div>
  );
}

export default ComC;
