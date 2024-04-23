import React, { useState } from "react";
import userIcon from "../../assets/WhatsApp Image 2023-11-07 at 22.08.13 (1).jpeg";
import emailIcon from "../../assets/WhatsApp Image 2023-11-07 at 22.08.13 (2).jpeg";
import passIcon from "../../assets/WhatsApp Image 2023-11-07 at 22.08.13.jpeg";
import Footer from "../footer";

export default function LoginSignup() {
  const [action, setAction] = useState("Sign up");

  return (
    <>
      <div className="container_login">
        <div className="header_login">
          <div className="text_login">{action}</div>
          <div className="underline_login"></div>
        </div>

        <div className="inputs_login">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input_login">
              <img src={userIcon} alt="a" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input_login">
            <img src={emailIcon} alt="a" />
            <input type="email" placeholder="Mail" />
          </div>
          <div className="input_login">
            <img src={passIcon} alt="a" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password_login">
            Lost Password <span> Click Here!</span>
          </div>
        )}

        <div className="submit-container_login">
          <div
            className={
              action === "Sign Up" ? "submit_login gray_login" : "submit_login"
            }
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sing up
          </div>
          <div
            className={
              action === "Login" ? "submit_login gray_login" : "submit_login"
            }
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
