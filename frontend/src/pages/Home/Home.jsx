import Navbar from "@components/Navbar/Navbar";
import RentForm from "@components/RentForm/RentForm";
import "./home.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useModal from "../../components/useModal/useModal";
import Modal from "../../components/Modal/Modal";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { isShowing: isLoginFromShowed, toggle: toggleLoginForm } = useModal();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

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
        if (res.status === 201) {
          navigate("/owner-page"); // implementer la diff entre admin et owner
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
    <div className="home">
      <Navbar />
      <RentForm />

      <ToastContainer />
      <header className="header-home">
        <Modal
          isShowing={isLoginFromShowed}
          hide={toggleLoginForm}
          title="Login"
        >
          <form onSubmit={hOwnerLogin}>
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
              <input type="submit" value="Login as User" />
            </div>
          </form>
        </Modal>
      </header>
    </div>
  );
}
