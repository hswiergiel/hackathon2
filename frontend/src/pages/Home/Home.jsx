import RentForm from "@components/RentForm/RentForm";
import "./home.scss";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import ConceptPresentation from "@components/ConceptPresentation/ConceptPresentation";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <RentForm />
      <ConceptPresentation />
      <AmazonLocker />
    </>
  );
}
