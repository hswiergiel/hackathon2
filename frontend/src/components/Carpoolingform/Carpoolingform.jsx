import { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import LogContext from "../../contexts/LogContext";
import "./caPoolingForm.scss";

export default function CarPoolingForm() {
  const { setHidden2 } = useContext(LogContext);
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
    <div className="rentOutContainer" id="rentOutContainerright">
      <ToastContainer />
      <h2>
        Share a car which is already rent and make an eco-friendly saving money
        move!
      </h2>
      <form onSubmit={hSubmit}>
        <input
          name="type"
          type="text"
          placeholder="Departure"
          onChange={hChangeRentOut}
          value={formRentOut.type}
        />
        <br />
        <input
          name="model"
          type="text"
          placeholder="Arrival"
          onChange={hChangeRentOut}
          value={formRentOut.model}
        />
        <br />
        <input
          name="year"
          type="date"
          placeholder="Date"
          onChange={hChangeRentOut}
          value={formRentOut.year}
        />
        <br />
        <input
          name="price_per_day"
          type="number"
          placeholder="Shared price per day"
          onChange={hChangeRentOut}
          value={formRentOut.price_per_day}
        />
        <br />
        <div className="selectTitle">Do you want an eco-friendly vehicle?</div>
        <select name="is_eco" className="selectYesNo">
          <option value={formRentOut.is_eco} onChange={hChangeRentOut}>
            No
          </option>
          <option value={formRentOut.is_eco} onChange={hChangeRentOut}>
            Yes
          </option>
        </select>
        <br />
        <div className="buttonContainer">
          <button
            type="button"
            onClick={() => {
              setHidden2("hidden");
            }}
          >
            Show the carpooling I want
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}
