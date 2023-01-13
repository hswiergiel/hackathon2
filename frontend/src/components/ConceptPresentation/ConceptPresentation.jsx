import "./style.scss";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import GreenEnergy from "../../assets/greenenergy.svg";
import Loupe from "../../assets/loupe.svg";
import Car from "../../assets/car.svg";
import Wheel from "../../assets/wheel.svg";
import Carpooling from "../../assets/carpool.svg";
import Chrono from "../../assets/clock.svg";
import Money from "../../assets/money.png";
import Carpool from "../../assets/carpooling.png";
import Locker from "../../assets/locker.png";
import Keys from "../../assets/keys.svg";

import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import LogContext from "../../contexts/LogContext";

export default function ConceptPresentation() {
  const { isShowing: isLoginFromShowed, toggle: toggleLoginForm } = useModal();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { setLoggedIn } = useContext(LogContext);

  const hLoginChange = (evt) => {
    setLoginForm({ ...loginForm, [evt.target.name]: evt.target.value });
  };

  const notify = (msg) => toast(msg);

  const navigate = useNavigate();

  const hOwnerLogin = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/loginowner", loginForm)
      .then((res) => {
        setLoggedIn(true);
        if (res.status === 201) {
          navigate("/renter-page");
          // implementer la diff entre admin et owner
        }
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 404) {
          notify("Wrong email !!!");
        } else if (status === 401) {
          notify("Wrong password !!!");
        }
        console.error(err);
      });
  };
  const hUserLogin = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/loginuser", loginForm)
      .then((res) => {
        setLoggedIn(true);
        if (res.status === 201) {
          navigate("/user-page");
          // implementer la diff entre admin et owner
        }
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 404) {
          notify("Wrong email !!!");
        } else if (status === 401) {
          notify("Wrong password !!!");
        }
        console.error(err);
      });
  };
  return (
    <>
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
              <em>Ecoco</em> promotes the rental of the most environmentally
              friendly vehicles.
            </p>
            <img
              className="imgCompanyBloc3"
              src={GreenEnergy}
              alt="Green Energy"
            />
          </div>
        </div>
        <div className="buttonCompany">
          <button
            className="btnCompany"
            type="button"
            onClick={toggleLoginForm}
          >
            Login as company
            <img className="imgKeys" src={Keys} alt="Green Energy" />
          </button>
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
              Opt for collection and/or return of the vehicle via Amazon Locker
              to save time.
            </p>
            <img className="imgUserBloc3" src={Chrono} alt="Chrono" />
          </div>
        </div>
        <div className="buttonUser">
          <button className="btnUser" type="button" onClick={toggleLoginForm}>
            Login as user
            <img className="imgKeys" src={Keys} alt="Green Energy" />
          </button>
        </div>
        {/* <h2 className="titleFidelityProgramm">Our loyalty programm ⬇</h2> */}
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
        <div className="carpoolOption">
          <div className="textCarpoolContainer">
            <h3 className="hookCarpoolOption">
              Opt for <em className="green">carpooling</em> !
            </h3>
            <p className="textCarpoolOption">
              Would you like to save money by sharing the rental costs ? Select
              the carpooling option when booking. Other users will be notified
              when your vehicle is available for a shared journey.
              <br />
              <button className="btnCarpoolOption" type="button">
                Read more
              </button>
            </p>
          </div>
          <div className="imgCarpoolContainer">
            <img className="imgCarpoolOption" src={Carpool} alt="Carpool" />
          </div>
        </div>
        <div className="amazonLocker">
          <div className="imgLockerContainer">
            <img className="imgAmazonLocker" src={Locker} alt="Locker" />
          </div>
          <div className="textLockerContainer">
            <h3 className="hookAmazonLocker">
              Use <em className="orange">Amazon Locker</em> for pick up & drop
              off your vehicle quickly !
            </h3>
            <p className="textAmazonLocker">
              Choose the "return than amazon locker" option for drop your car
              off vicinity at the Amazon Locker of your choice and leave the
              keys in a locker.
              <br /> You'll save time and freedom it's without extra charge for
              you.
              <br />
              Yes, as a member of the Ecoco family, you have our support, you
              deserve it.
              <br />
              <button className="btnAmazonLocker" type="button">
                Read more
              </button>
            </p>
          </div>
        </div>
      </div>
      <Modal isShowing={isLoginFromShowed} hide={toggleLoginForm} title="Login">
        <ToastContainer />
        <form onSubmit={hUserLogin}>
          <div className="formGroup">
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={hLoginChange}
              value={loginForm.email}
            />
          </div>
          <div className="formGroup">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={hLoginChange}
              value={loginForm.password}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="formGroup">
            <input
              type="submit"
              value="Login as Owner"
              onSubmit={hOwnerLogin}
            />
          </div>
          <div className="formGroup">
            <input type="submit" value="Login as User" onSubmit={hUserLogin} />
          </div>
        </form>
      </Modal>
    </>
  );
}
