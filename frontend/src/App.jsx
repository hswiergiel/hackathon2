import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-page" element={<AmazonLocker />} />
          <Route path="/owner-page" element={<AmazonLocker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
