import { useEffect, useState } from "react";
import axios from "axios";
import logogreen from "@assets/logogreencar.jpg";
import logocovoit from "@assets/logocovoit.png";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import "./carlist.scss";

export default function Carlist() {
  const [cars, setCars] = useState();
  const [carSelected, setCarSelected] = useState({});
  const { isShowing: isCarShowed, toggle: toggleCarShowed } = useModal();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then(({ data }) => {
        setCars(data);
      });
  }, []);

  const hCarShow = (evt, car) => {
    evt.preventDefault();
    toggleCarShowed();
    setCarSelected(car);
  };
  return (
    <section className="carsection">
      {cars &&
        cars.map((car) => {
          return (
            <div
              className={car.is_eco ? "carcard green" : "carcard nogreen"}
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
                    <button
                      type="button"
                      className="btncarlist"
                      key={car.id}
                      onClick={(evt) => hCarShow(evt, car)}
                    >
                      Louer ce véhicule
                    </button>
                  ) : (
                    ""
                  )}
                  {!car.is_available ? (
                    <button
                      type="button"
                      className="btncarlist"
                      id="covoit"
                      key={car.id}
                      onClick={(evt) => hCarShow(evt, car)}
                    >
                      Participer à un covoiturage
                    </button>
                  ) : (
                    ""
                  )}
                  <Modal isShowing={isCarShowed} hide={toggleCarShowed}>
                    <h1>{car.id}</h1>
                  </Modal>
                </div>
              </div>
            </div>
          );
        })}
      <Modal isShowing={isCarShowed} hide={toggleCarShowed}>
        <h1>{carSelected.id}</h1>
      </Modal>
    </section>
  );
}
