import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import PublicElement from "./components/PublicElement";
import PrivateElement from "./components/PrivateElement";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicElement>
                <Login />
              </PublicElement>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateElement>
                <Home />
              </PrivateElement>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateElement>
                <About />
              </PrivateElement>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
