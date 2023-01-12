import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import RenterPage from "./pages/RenterPage/RenterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/renter-page" element={<RenterPage />} />
          <Route path="/user-page" element={<AmazonLocker />} />
          <Route path="/owner-page" element={<AmazonLocker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
