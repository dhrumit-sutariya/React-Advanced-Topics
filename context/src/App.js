import { createContext } from "react";
import ComA from "./components/ComA";

const Data = createContext();

function App() {
  const FirstName = "Dhrumit";
  return (
    <Data.Provider value={FirstName}>
      <ComA />
    </Data.Provider>
  );
}

export default App;
export { Data };
