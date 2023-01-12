import { useState } from "react";
import "./userForm.scss";

export default function UserForm() {
  const [formRent, setFormRent] = useState({
    type: "",
    start: "",
    end: "",
    carpool: false,
  });

  const hChangeRent = (evt) =>
    setFormRent({
      ...formRent,
      [evt.target.name]: evt.target.value,
    });

  const hSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="rentContainer">
      <h2>Rent a vehicule in a few clicks !</h2>
      <form onSubmit={hSubmit}>
        <div className="selectTitle">Which type of vehicule do you want ?</div>
        <select name="type" className="selectYesNo">
          <option value={formRent.type} onChange={hChangeRent}>
            Car
          </option>
          <option value={formRent.type} onChange={hChangeRent}>
            Motorbike
          </option>
          <option value={formRent.type} onChange={hChangeRent}>
            Utility
          </option>
          <option value={formRent.type} onChange={hChangeRent}>
            Rocket
          </option>
        </select>
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
        <div className="selectTitle">Do you want to carpool ?</div>
        <select name="carpool" className="selectYesNo">
          <option value={formRent.carpool} onChange={hChangeRent}>
            No
          </option>
          <option value={formRent.carpool} onChange={hChangeRent}>
            Yes
          </option>
        </select>
        <br />
        <div className="buttonContainer">
          <button type="submit">Search</button>
        </div>
      </form>
      <br />
    </div>
  );
}
