import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar/Navbar";
import { LogContextProvider } from "./contexts/LogContext";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import RenterPage from "./pages/RenterPage/RenterPage";
import Admin from "./pages/AdminLoginpage/AdminPage";
import Adminpagex from "./pages/AdminPage/Admin";

function App() {
  return (
    <LogContextProvider>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-page" element={<UserPage />} />
            <Route path="/renter-page" element={<RenterPage />} />
            <Route path="/adminlogin-page" element={<Admin />} />
            <Route path="/adminpage" element={<Adminpagex />} />
          </Routes>
        </div>
      </Router>
    </LogContextProvider>
  );
}

export default App;
