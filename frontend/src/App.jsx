import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import Carlist from "@components/carlist/Carlist";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Carlist />
      <AmazonLocker />
      <Home />
    </div>
  );
}

export default App;
