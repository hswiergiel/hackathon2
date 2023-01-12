import Navbar from "@components/Navbar/Navbar";
import RentForm from "@components/RentForm/RentForm";
import "./home.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ConceptPresentation from "@components/ConceptPresentation/ConceptPresentation";
import useModal from "../../components/useModal/useModal";
import Modal from "../../components/Modal/Modal";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <RentForm />
      <ConceptPresentation />
      <AmazonLocker />
      <div className="home">
        <ToastContainer />
        <header className="header-home">
          <button
            type="button"
            className="modalToggle"
            onClick={(evt) => {
              evt.preventDefault();
            }}
          >
            Register
          </button>
          <button
            type="button"
            className="modalToggle"
            onClick={toggleLoginForm}
          >
            Login
          </button>

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
    </>
    <div className="home">
      <RentForm />
    </div>
  );
}
