import "./style.scss";
import Navbar from "@components/Navbar/Navbar";
import RentForm from "@components/RentForm/RentForm";

export default function Home() {
  return (
    <>
      <Navbar />

      <RentForm />
    </>
  );
}
