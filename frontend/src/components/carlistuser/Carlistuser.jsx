import { useEffect, useState, useContext } from "react";
import axios from "axios";
import logogreen from "@assets/logogreencar.jpg";
import logocovoit from "@assets/logocovoit.png";
import { ToastContainer, toast } from "react-toastify";
import LogContext from "../../contexts/LogContext";
import "./carlistuser.scss";

export default function Carlistuser() {
  const [cars, setCars] = useState();
  const notify = (msg) => toast(msg);
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
  }, []);

  return (
    <section className="carsection">
      {cars &&
        cars.map((car) => {
          return (
            <div id={car.model !== "MarioMobile" ? hidden2 : ""}>
              <div
                className={
                  car.is_eco ? "carcard greencar" : "carcard nogreencar"
                }
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
                    {car.is_available ? (
                      <button type="button" className="btncarlist">
                        Rent this vehicle
                      </button>
                    ) : (
                      ""
                    )}
                    {!car.is_available ? (
                      <button
                        type="button"
                        className="btncarlist"
                        id="covoit"
                        onClick={() => {
                          notify(
                            "Your request to carpool has been sent to the driver who will get in touch with you very soon!"
                          );
                        }}
                      >
                        Carpooling in this car
                      </button>
                    ) : (
                      ""
                    )}
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
