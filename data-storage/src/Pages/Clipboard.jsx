import { useState } from "react";

function Clipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const [text, setText] = useState("demo");

  const handleClick = async () => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    }
  };

  const displayer = () => {
    handleClick()
      .then(() => {
        setIsCopied(true);
        console.log("copied");
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Clipboard</h1>

      <label>Password :- </label>
      <input type="text" value={text} readOnly />
      <button type="button" onClick={displayer}>
        <span>{isCopied ? "copied" : "copy"}</span>
      </button>
    </div>
  );
}

export default Clipboard;
