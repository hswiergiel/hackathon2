import Navbar from "@components/Navbar/Navbar"
import RentForm from "@components/RentForm/RentForm";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";

export default function Home() {
  return (
    <>
      <Navbar />
      <RentForm />
      <AmazonLocker />
    </>
  );
}
