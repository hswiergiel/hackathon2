import "./userpage.scss";
import AmazonLocker from "@components/amazonLocker/AmazonLocker";
import Carlistuser from "@components/carlistuser/Carlistuser";
import CarPoolingForm from "@components/Carpoolingform/Carpoolingform";
import CarRentalForm from "@components/CarRentalform/CarRentalform";

export default function UserPage() {
  return (
    <>
      <div id="userforms">
        <CarRentalForm />
        <CarPoolingForm />
      </div>
      <Carlistuser />
      <AmazonLocker />
    </>
  );
}
