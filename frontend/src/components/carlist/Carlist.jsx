import { useEffect, useState } from "react";
import axios from "axios";
import "./carlist.scss";

export default function Carlist() {
  const [cars, setCars] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then(({ data }) => {
        setCars(data);
      });
  }, []);
  return (
    <section className="cars">
      {cars.map((car) => {
        return <div>{car.type}</div>;
      })}
    </section>
  );
}
