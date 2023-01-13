import { useEffect, useState, useContext } from "react";
import axios from "axios";
import logogreen from "@assets/logogreencar.jpg";
import logocovoit from "@assets/logocovoit.png";
import { ToastContainer, toast } from "react-toastify";
import LogContext from "../../contexts/LogContext";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import "./carlistuser.scss";

export default function Carlistuser() {
  const { currentUser } = useContext(LogContext);
  const [cars, setCars] = useState();
  const notify = (msg) => toast(msg);
  const [carSelected, setCarSelected] = useState({});
  const [bookingForm, setBookingForm] = useState({
    nb_seats: 3,
    rent_start_date: "2023-02-20",
    rent_end_date: "2023-02-27",
  });
  const [currentBooking, setCurrentBooking] = useState({});
  const { isShowing: isCarShowed, toggle: toggleCarShowed } = useModal();
  const { hidden, hidden2 } = useContext(LogContext);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then(({ data }) => {
        const carsavailable = [...data];
        setCars(
          carsavailable.filter(
            (elt) =>
              elt.is_available === 1 ||
              elt.model === "MarioMobile" ||
              elt.model === "Partner"
          )
        );
      });
  }, [currentBooking]);

  const hCarShow = (evt, car) => {
    evt.preventDefault();
    toggleCarShowed();
    setCarSelected(car);
  };
  useEffect(() => {
    setBookingForm({
      ...bookingForm,
      user_id: currentUser.id,
      vehicle_id: carSelected.id,
    });
  }, [currentUser, carSelected]);

  const hBooking = async (evt) => {
    evt.preventDefault();
    await axios
      .get(`http://localhost:5000/vehicles/${carSelected.id}`)
      .then(async ({ data }) => {
        await axios
          .post(`http://localhost:5000/booking/${data.owner_id}`, bookingForm)
          .then(async () => {
            if (bookingForm.carpooling) {
              setCurrentBooking(bookingForm);
            } else {
              carSelected.is_available = 0;
              setCurrentBooking(bookingForm);
              await axios
                .put(
                  `http://localhost:5000/vehicles/${carSelected.id}`,
                  carSelected
                )
                .then((omg) => {
                  setCarSelected(omg.data);
                })
                .catch((err) => {
                  console.error(err);
                });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      });
    toggleCarShowed();
  };

  const hCovoitChange = (evt) => {
    setBookingForm({
      ...bookingForm,
      [evt.target.name]: parseInt(evt.target.value, 10),
    });
  };

  const messagecovoit = () => {
    notify(
      "Your request to carpool has been sent to the driver who will get in touch with you very soon!"
    );
  };
  return (
    <section className="carsection">
      {cars &&
        cars
          .filter(
            (car) => car.is_available && car.id !== currentBooking.vehicle_id
          )
          .map((car) => {
            return (
              <div id={car.model !== "MarioMobile" ? hidden2 : ""}>
                <div
                  className={
                    car.is_eco ? "carcard greencar" : "carcard nogreencar"
                  }
                  key={car.id}
                  id={car.year < 2015 || car.price_per_day > 160 ? hidden : ""}
                >
                  <div className="carcardinside">
                    <div className="carimginfo">
                      <img
                        className="carimg"
                        src={car.imageurl}
                        alt="covoit logo"
                      />
                      <div className="carinfo">
                        {!car.is_available ? (
                          <img
                            className="logocar"
                            src={logocovoit}
                            alt={car.type}
                          />
                        ) : (
                          ""
                        )}
                        {car.is_eco ? (
                          <img
                            className="logocar"
                            src={logogreen}
                            alt="green logo"
                          />
                        ) : (
                          ""
                        )}
                        <p>
                          <em className="carinfoitems">Type :</em> {car.type}
                        </p>
                        <p>
                          <em className="carinfoitems">Model :</em> {car.model}
                        </p>
                        <p>
                          <em className="carinfoitems">Year of purchase :</em>{" "}
                          {car.year}
                        </p>
                        <p>
                          <em className="carinfoitems">Mileage reader:</em>{" "}
                          {car.kilometer} kilometers
                        </p>
                        <p>
                          <em className="carinfoitems">Price:</em>{" "}
                          {car.price_per_day}€ / day
                        </p>
                      </div>
                    </div>
                    <div className="btnpart">
                      <button
                        type="button"
                        className="btncarlist"
                        onClick={
                          car.carpooling
                            ? () => {
                                messagecovoit();
                              }
                            : (evt) => hCarShow(evt, car)
                        }
                      >
                        {car.carpooling
                          ? "Participer à un covoiturage"
                          : "Louer ce véhicule"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      <Modal isShowing={isCarShowed} hide={toggleCarShowed}>
        <ToastContainer />
        <div className="carcardinside">
          <div className="carimginfo">
            <img
              className="carimg"
              src={carSelected.imageurl}
              alt="covoit logo"
            />
            <div className="carinfo">
              {!carSelected.is_available ? (
                <img
                  className="logocar"
                  src={logocovoit}
                  alt={carSelected.type}
                />
              ) : (
                ""
              )}
              {carSelected.is_eco ? (
                <img className="logocar" src={logogreen} alt="green logo" />
              ) : (
                ""
              )}
              <p>
                <em className="carinfoitems">Type :</em> {carSelected.type}
              </p>
              <p>
                <em className="carinfoitems">Year of purchase :</em>{" "}
                {carSelected.year}
              </p>
              <p>
                <em className="carinfoitems">Mileage reader:</em>{" "}
                {carSelected.kilometer} kilometers
              </p>
              <p>
                <em className="carinfoitems">Price:</em>{" "}
                {carSelected.price_per_day}€ / day
              </p>
              <input
                name="type"
                type="text"
                placeholder="Carpooling: Departure"
              />
              <br />
              <br />
              <input
                name="type"
                type="text"
                placeholder="Carpooling: Arrival"
              />
              <br />
              <br />
              <input name="type" type="date" placeholder="Carpooling: Date" />
            </div>
          </div>
          <div className="btnpart">
            {carSelected.is_available ? (
              <form onSubmit={hBooking} className="covoit-form">
                <div className="covoit">
                  <h3>Carpooling?</h3>
                  <div>
                    <input
                      type="radio"
                      name="carpooling"
                      value={1}
                      onChange={hCovoitChange}
                    />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="carpooling"
                      value={0}
                      onChange={hCovoitChange}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div>

                <button
                  type="button"
                  className="btncarlist"
                  key={carSelected.id}
                  onClick={hBooking}
                >
                  Rent this vehicle
                </button>
              </form>
            ) : (
              ""
            )}
            {!carSelected.is_available ? (
              <button
                type="button"
                className="btncarlist"
                id="covoit"
                key={carSelected.id}
              >
                Carpooling in this car
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Modal>
    </section>
  );
}
