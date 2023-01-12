import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import RenterPage from "./pages/RenterPage/RenterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/renter-page" element={<RenterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
