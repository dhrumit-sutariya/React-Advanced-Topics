import ImportDemo from "./components/ImportDemo";
import ReactLazyDemo from "./components/ReactLazyDemo";
import AvoidingFallbacks from "./components/AvoidingFallbacks";

function App() {
  return (
    <div>
      <ReactLazyDemo />
      {/* <ImportDemo /> */}
      <AvoidingFallbacks />
    </div>
  );
}

export default App;
