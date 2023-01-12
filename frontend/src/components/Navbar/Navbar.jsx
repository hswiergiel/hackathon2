import logo from "@assets/Logococo.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState, useContext } from "react";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";
import "react-toastify/dist/ReactToastify.css";
import LogContext from "../../contexts/LogContext";
import "./style.scss";

export default function navbar() {
  const { isShowing: isLoginFromShowed, toggle: toggleLoginForm } = useModal();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { loggedIn, setLoggedIn, setCurrentUser } = useContext(LogContext);

  const hLoginChange = (evt) => {
    setLoginForm({ ...loginForm, [evt.target.name]: evt.target.value });
  };

  const notify = (msg) => toast(msg);

  const navigate = useNavigate();

  const hUserLogin = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/loginuser", loginForm)
      .then((res) => {
        setLoggedIn(true);
        toggleLoginForm();
        setCurrentUser(res.data);
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

  const hOwnerLogin = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/loginowner", loginForm)
      .then((res) => {
        setLoggedIn(true);
        toggleLoginForm();
        setCurrentUser(res.data);
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

  const hLogOut = (evt) => {
    evt.preventDefault();
    setLoggedIn(false);
    navigate("/");
  };
  return (
    <div className="navbar">
      <img className="Logo" src={logo} alt="" />
      <NavLink to="/" className="nav-links">
        <button className="button-51" type="button">
          Rent a vehicle
        </button>
      </NavLink>
      <button className="button-51" type="button">
        Register
      </button>
      {loggedIn ? (
        <button className="button-51" type="button" onClick={hLogOut}>
          To log out
        </button>
      ) : (
        <button className="button-51" type="button" onClick={toggleLoginForm}>
          To log in
        </button>
      )}

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
    </div>
  );
}
