import { useEffect, useState } from "react";
import axios from "axios";
import logogreen from "@assets/logogreencar.jpg";
import "./carlistowner.scss";

export default function Carlist() {
  const [cars, setCars] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then(({ data }) => {
        setCars(data);
      });
  }, []);

  const makeunavailable = (car) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${car.id}`, {
        ...car,
        is_available: 0,
      })
      .then(() => {
        const newCars = [...cars];
        const index = newCars.findIndex((elt) => elt.id === car.id);
        newCars[index] = { ...car, is_available: 0 };
        setCars(newCars);
      })
      .catch(() => {
        console.warn("error");
      });
  };
  const makeavailable = (car) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${car.id}`, {
        ...car,
        is_available: 1,
      })
      .then(() => {
        const newCars = [...cars];
        const index = newCars.findIndex((elt) => elt.id === car.id);
        newCars[index] = { ...car, is_available: 1 };
        setCars(newCars);
      })
      .catch(() => {
        console.warn("error");
      });
  };
  return (
    <section className="carsection">
      {cars &&
        cars.map((car) => {
          return (
            <div
              className={car.is_eco ? "carcard greencar" : "carcard nogreencar"}
              key={car.id}
            >
              <div className="carcardinside">
                <div className="carimginfo">
                  <img
                    className="carimg"
                    src={car.imageurl}
                    alt="covoit logo"
                  />
                  <div className="carinfo">
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
                      <em className="carinfoitems">Year of purchase :</em>{" "}
                      {car.year}
                    </p>
                    <p>
                      <em className="carinfoitems">Mileage reader:</em>{" "}
                      {car.kilometer} KM
                    </p>
                    <p>
                      <em className="carinfoitems">Price:</em>{" "}
                      {car.price_per_day}€ / day
                    </p>
                    {car.is_available ? (
                      <p>
                        <em className="carinfoitems" id="available">
                          Vehicle available
                        </em>
                      </p>
                    ) : (
                      ""
                    )}
                    {!car.is_available ? (
                      <p>
                        <em className="carinfoitems" id="unavailable">
                          Vehicle unavailable
                        </em>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="btnpart">
                  {car.is_available ? (
                    <button
                      type="button"
                      className="btncarlist"
                      id="makeavailable"
                      onClick={() => {
                        makeunavailable(car);
                      }}
                    >
                      Make unavailable
                    </button>
                  ) : (
                    ""
                  )}
                  {!car.is_available ? (
                    <button
                      type="button"
                      className="btncarlist"
                      id="makeunavailable"
                      onClick={() => {
                        makeavailable(car);
                      }}
                    >
                      Make available
                    </button>
                  ) : (
                    ""
                  )}
                  <button type="button" className="btncarlist" id="modifinfo">
                    Modify informations
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
