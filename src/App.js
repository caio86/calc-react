import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Contador initialValue={0} />
    </div>
  );
}

export default App;
