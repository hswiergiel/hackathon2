import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import CarFleetForm from "@components/CarFleetForm/CarFleetForm";
import Carlistowner from "@components/carlistowner/Carlistowner";

export default function Home() {
  return (
    <>
      <CarFleetForm />
      <Carlistowner />
      <AmazonLocker />
    </>
  );
}
