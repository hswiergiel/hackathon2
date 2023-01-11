import logo from "@assets/Logococo.png";
import "./style.scss";
export default function navbar() {
  return (
    <div className="navbar">
      <img className="Logo" src={logo} alt="" />
      <button class="button-51" role="button">
        Rent a vehicle
      </button>
      <button class="button-51" role="button">
        Register
      </button>
      <button class="button-51" role="button">
        To log in
      </button>
    </div>
  );
}
