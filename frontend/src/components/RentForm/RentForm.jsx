import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./rentForm.scss";

export default function RentForm() {
  const [formRent, setFormRent] = useState({
    where: "",
    start: "",
    end: "",
  });

  const [formRentOut, setFormRentOut] = useState({
    brand: "",
    model: "",
    year: "",
  });

  const hChangeRent = (evt) =>
    setFormRent({
      ...formRent,
      [evt.target.name]: evt.target.value,
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
    <div className="formContainer">
      <div className="rentCarContainer">
        <h2>Rent a car in a few clicks !</h2>
        <form onSubmit={hSubmit}>
          <input
            name="where"
            type="text"
            placeholder="Where ?"
            onChange={hChangeRent}
            value={formRent.where}
          />
          <br />
          <div className="inputTitle">Start :</div>
          <input
            name="start"
            type="date"
            onChange={hChangeRent}
            value={formRent.start}
          />
          <br />
          <div className="inputTitle">End :</div>
          <input
            name="end"
            type="date"
            onChange={hChangeRent}
            value={formRent.end}
          />
          <br />
          <div className="buttonContainer">
            <NavLink to="/user-page" className="nav-links">
              <button type="submit">Search</button>
            </NavLink>
          </div>
        </form>
      </div>
      <div className="rentOutCarContainer">
        <h2>Rent out your own car in a few clicks !</h2>
        <form onSubmit={hSubmit}>
          <input
            name="brand"
            type="text"
            placeholder="Which brand ?"
            onChange={hChangeRentOut}
            value={formRentOut.brand}
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
          <div className="buttonContainer">
            <NavLink to="/renter-page" className="nav-links">
              <button type="submit">Drop off my car</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
