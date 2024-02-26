import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    let isvalid = false;
    console.log(isvalid);
    navigate("/");
  };

  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <h1>Home</h1>
      <h3 onClick={handleAbout}>About</h3>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
}

export default Home;
