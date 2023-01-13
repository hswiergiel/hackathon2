import "./home.scss";
import ConceptPresentation from "@components/ConceptPresentation/ConceptPresentation";
import "react-toastify/dist/ReactToastify.css";
import FindCar from "@components/FindCar/FindCar";

export default function Home() {
  return (
    <>
      <FindCar />
      <ConceptPresentation />
    </>
  );
}
