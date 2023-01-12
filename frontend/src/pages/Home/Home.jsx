import RentForm from "@components/RentForm/RentForm";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import "./home.scss";
import ConceptPresentation from "@components/ConceptPresentation/ConceptPresentation";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ConceptPresentation />
      <AmazonLocker />
      <RentForm />
    </>
  );
}
