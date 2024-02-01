import React, { useState } from "react";
import DOMPurify, { sanitize } from "dompurify";

const TrustedTypesDemo = () => {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const sanatizedHtml = DOMPurify.sanitize(name);
    console.log("triggered", sanatizedHtml);
    setFinalName(sanatizedHtml);
    setLastName(lastName);
  };
  return (
    <div>
      <h1>Trusted Types</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Sanatized</label>
          <input
            type="text"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Without Sanatize</label>
          <input
            type="text"
            placeholder="Type Here"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        sanatized Output :-
        <div dangerouslySetInnerHTML={{ __html: finalName }}></div>
      </div>
      <div>Without Sanatize Output:- {lastName}</div>
    </div>
  );
};

export default TrustedTypesDemo;
