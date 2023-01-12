import { useState } from "react";
import axios from "axios";
import "./carFleetForm.scss";

export default function CarFleetForm() {
  const [formRentOut, setFormRentOut] = useState({
    type: "",
    model: "",
    year: "",
    price_per_day: "",
    is_eco: false,
    kilometer: "",
    is_available: 1,
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
      })
      .catch(() => {
        console.warn("Ohnoooo!");
      });
  };

  return (
    <div className="rentOutContainer">
      <h2>Rent out your own vehicule in a few clicks !</h2>
      <form onSubmit={hSubmit}>
        <input
          name="type"
          type="text"
          placeholder="Which type (car, motorbike, utility, rocket...) ?"
          onChange={hChangeRentOut}
          value={formRentOut.type}
        />
        <br />
        <input
          name="model"
          type="text"
          placeholder="Which model ?"
          onChange={hChangeRentOut}
          value={formRentOut.model}
        />
        <br />
        <input
          name="year"
          type="number"
          placeholder="Year ?"
          onChange={hChangeRentOut}
          value={formRentOut.year}
        />
        <br />
        <input
          name="price_per_day"
          type="number"
          placeholder="price per day ?"
          onChange={hChangeRentOut}
          value={formRentOut.price_per_day}
        />
        <br />
        <div className="selectTitle">Is your vehicle eco-friendly ?</div>
        <select name="is_eco" className="selectYesNo">
          <option value={formRentOut.is_eco} onChange={hChangeRentOut}>
            No
          </option>
          <option value={formRentOut.is_eco} onChange={hChangeRentOut}>
            Yes
          </option>
        </select>
        <br />
        <input
          name="kilometer"
          type="number"
          placeholder="Kilometer ?"
          onChange={hChangeRentOut}
          value={formRentOut.kilometer}
        />
        <br />
        <div className="buttonContainer">
          <button type="submit">Drop off my car</button>
        </div>
      </form>
      <br />
    </div>
  );
}
