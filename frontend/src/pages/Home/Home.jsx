import RentForm from "@components/RentForm/RentForm";
import "./home.scss";
import ConceptPresentation from "@components/ConceptPresentation/ConceptPresentation";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@components/Footer/Footer";
import FindCar from "@components/FindCar/FindCar";

export default function Home() {
  return (
    <>
      <FindCar />
      <ConceptPresentation />
      <RentForm />
      <Footer />
    </>
  );
}
