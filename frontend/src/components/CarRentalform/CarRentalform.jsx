import "./carRentalForm.scss";
import { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LogContext from "../../contexts/LogContext";

export default function CarRentalForm() {
  const { setHidden } = useContext(LogContext);
  const notify = (msg) => toast(msg);
  const [formRentOut, setFormRentOut] = useState({
    type: "",
    model: "",
    year: "",
    price_per_day: "",
    is_eco: false,
    kilometer: "",
    is_available: 1,
    imageurl: "",
    owner_id: 3,
  });

  const hChangeRentOut = (evt) =>
    setFormRentOut({
      ...formRentOut,
      [evt.target.name]: evt.target.value,
    });

  const hSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:5000/vehicles", formRentOut)
      .then(({ data }) => {
        setFormRentOut(data);
        notify("Your car has been added to database");
      })
      .catch(() => {
        console.warn("Ohnoooo!");
      });
  };

  return (
    <div className="rentOutContainer" id="rentOutContainerleft">
      <ToastContainer />
      <h2>Rent your own vehicule in a few clicks and gain points !</h2>
      <form onSubmit={hSubmit}>
        <input
          name="type"
          type="text"
          placeholder="Which type (car, motorbike, utility, rocket...) ?"
          onChange={hChangeRentOut}
        />
        <br />
        <input
          name="model"
          type="text"
          placeholder="Which model ?"
          onChange={hChangeRentOut}
        />
        <br />
        <input
          name="year"
          type="number"
          placeholder="Minimum Year ?"
          onChange={hChangeRentOut}
        />
        <br />
        <input
          name="min_price_per_day"
          type="number"
          placeholder="Minimum price per day ?"
          onChange={hChangeRentOut}
        />
        <br />
        <input
          name="max_price_per_day"
          type="number"
          placeholder="Maximum price per day ?"
          onChange={hChangeRentOut}
        />
        <br />
        <div className="selectTitle">Do you want an eco-friendly vehicle ?</div>
        <select name="is_eco" className="selectYesNo">
          <option value={formRentOut.is_eco} onChange={hChangeRentOut}>
            No
          </option>
          <option value={formRentOut.is_eco} onChange={hChangeRentOut}>
            Yes
          </option>
        </select>
        <br />
        <br />
        <div className="buttonContainer">
          <button
            type="button"
            onClick={() => {
              setHidden("hidden");
            }}
          >
            Find me the car I want
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
