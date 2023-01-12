import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "@components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import RenterPage from "./pages/RenterPage/RenterPage";
import Admin from "./pages/AdminLoginpage/AdminPage";
import Adminpagex from "./pages/AdminPage/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/renter-page" element={<RenterPage />} />
          <Route path="/adminlogin-page" element={<Admin />} />
          <Route path="/adminpage" element={<Adminpagex />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
