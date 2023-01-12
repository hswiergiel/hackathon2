import { useState } from "react";
import "./carFleetForm.scss";

export default function CarFleetForm() {
  const [formRentOut, setFormRentOut] = useState({
    model: "",
    price: "",
    eco: false,
    kilometer: "",
  });

  const hChangeRentOut = (evt) =>
    setFormRentOut({
      ...formRentOut,
      [evt.target.name]: evt.target.value,
    });

  const hSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="rentOutCarContainer">
      <h2>Rent out your own car in a few clicks !</h2>
      <form onSubmit={hSubmit}>
        <input
          name="model"
          type="text"
          placeholder="Which model ?"
          onChange={hChangeRentOut}
          value={formRentOut.model}
        />
        <br />
        <input
          name="price"
          type="number"
          placeholder="price ?"
          onChange={hChangeRentOut}
          value={formRentOut.year}
        />
        <br />
        <div className="eco">
          Is eco ?
          <input
            name="eco"
            type="checkbox"
            placeholder="is eco ?"
            onChange={hChangeRentOut}
            value={formRentOut.year}
          />
        </div>
        <br />
        <input
          name="kilometer"
          type="number"
          placeholder="Kilometer ?"
          onChange={hChangeRentOut}
          value={formRentOut.year}
        />
        <br />
        <div className="buttonContainer">
          <button type="submit">Drop off my car</button>
        </div>
      </form>
    </div>
  );
}
