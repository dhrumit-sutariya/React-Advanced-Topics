import { useState } from "react";

function ImportDemo() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    import("./Add").then((data) => {
      const parsedNum1 = parseInt(num1);
      const parsedNum2 = parseInt(num2);
      console.log(data.Add(parsedNum1, parsedNum2));
      setResult(data.Add(parsedNum1, parsedNum2));
    });
  };

  return (
    <div>
      <h1>1. Dynamic Import Demo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Num 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Num 2"
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        {num1} + {num2} = {result}
      </p>
      <hr />
    </div>
  );
}

export default ImportDemo;
