import logo from "@assets/Logococo.png";
import { NavLink } from "react-router-dom";
import "./style.scss";

export default function navbar() {
  return (
    <div className="navbar">
      <img className="Logo" src={logo} alt="" />
      <NavLink to="/" className="nav-links">
        <button className="button-51" type="button">
          Rent a vehicle
        </button>
      </NavLink>
      <button className="button-51" type="button">
        Register
      </button>
      <button className="button-51" type="button">
        To log in
      </button>
    </div>
  );
}
