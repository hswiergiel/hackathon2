import "./style.scss";
import GreenEnergy from "../../assets/greenenergy.svg";
import Loupe from "../../assets/loupe.svg";
import Car from "../../assets/car.svg";
import Wheel from "../../assets/wheel.svg";
import Carpooling from "../../assets/carpool.svg";
import Chrono from "../../assets/clock.svg";
import Money from "../../assets/money.png";

export default function ConceptPresentation() {
  return (
    <div className="presentationConceptContainer">
      <h2 className="titleCompanyContainer">As a community or company ⬇</h2>
      <div className="companyContainer">
        <div className="companyBloc1">
          <h3 className="titleCompanyBloc1">Publish a vehicle quickly</h3>
          <p className="textCompanyBloc1">
            Offer a vehicle for rent by adding it to your fleet in just a few
            clicks.
          </p>
          <img className="imgCompanyBloc1" src={Car} alt="car" />
        </div>
        <div className="companyBloc2">
          <h3 className="titleCompanyBloc2">
            Easily consult and manage your vehicle fleet.
          </h3>
          <p className="textCompanyBloc2">
            Access your vehicle information in real time and manage it as you
            see fit.
          </p>
          <img className="imgCompanyBloc2" src={Loupe} alt="Check Up" />
        </div>
        <div className="companyBloc3">
          <h3 className="titleCompanyBloc3">Promote your green vehicles</h3>
          <p className="textCompanyBloc3">
            <em>Ekoko</em> promotes the rental of the most environmentally
            friendly vehicles.
          </p>
          <img
            className="imgCompanyBloc3"
            src={GreenEnergy}
            alt="Green Energy"
          />
        </div>
      </div>
      <h2 className="titleUserContainer">As an individual ⬇</h2>
      <div className="userContainer">
        <div className="userBloc1">
          <h3 className="titleUserBloc1">Rent a car quickly</h3>
          <p className="textUserBloc1">
            You will have free access to a wide range of low-cost car rental
            offers.
          </p>
          <img className="imgUserBloc1" src={Wheel} alt="Wheel" />
        </div>
        <div className="userBloc2">
          <h3 className="titleUserBloc2">Lower costs ? Carpool !</h3>
          <p className="textUserBloc2">
            Opt for the <em>carpooling</em> option to share costs and reduce
            pollution.
          </p>
          <img className="imgUserBloc2" src={Carpooling} alt="Hands" />
        </div>
        <div className="userBloc3">
          <h3 className="titleUserBloc3">
            Collect and return your vehicle quickly
          </h3>
          <p className="textUserBloc3">
            Opt for collection and/or return of the vehicle via Amazon Locker to
            save time.
          </p>
          <img className="imgUserBloc3" src={Chrono} alt="Chrono" />
        </div>
      </div>
      <h2 className="titleFidelityProgramm">Our loyalty programm ⬇</h2>
      <div className="fidelityProgramm">
        <div className="imgFidelityContainer">
          <img className="imgFidelityProgramm" src={Money} alt="Money" />
        </div>
        <div className="textFidelityContainer">
          <h3 className="hookFidelityProgramm">
            Drive <em className="green">green</em>, save{" "}
            <em className="yellow">money</em> !
          </h3>
          <p className="textFidelityProgramm">
            Rent an environmentally friendly vehicle and benefit from our
            loyalty programme. <br />
            The more eco-friendly you drive, the more points you earn !<br />
            With these points you can benefit from attractive discounts.
            <br />
            <button className="btnFidelityProgramm" type="button">
              Read more
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
