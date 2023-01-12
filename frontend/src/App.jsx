import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import Navbar from "@components/Navbar/Navbar";
import { LogContextProvider } from "./contexts/LogContext";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import RenterPage from "./pages/RenterPage/RenterPage";

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
          </Routes>
        </div>
      </Router>
    </LogContextProvider>
  );
}

export default App;
