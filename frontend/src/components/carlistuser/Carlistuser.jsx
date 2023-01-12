import { useEffect, useState } from "react";
import axios from "axios";
import logogreen from "@assets/logogreencar.jpg";
import logocovoit from "@assets/logocovoit.png";
import "./carlistuser.scss";

export default function Carlistuser() {
  const [cars, setCars] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then(({ data }) => {
        setCars(data);
      });
  }, []);
  return (
    <section className="carsection">
      {cars &&
        cars.map((car) => {
          return (
            <div
              className={car.is_eco ? "carcard greencar" : "carcard nogreencar"}
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
                      Louer ce véhicule
                    </button>
                  ) : (
                    ""
                  )}
                  {!car.is_available ? (
                    <button type="button" className="btncarlist" id="covoit">
                      Participer à un covoiturage
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
